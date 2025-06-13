import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import * as xlsx from 'xlsx';

export const config = { api: { bodyParser: false } };

function normalizeRow(row: any) {
  const normalized: Record<string, any> = {};
  for (const key in row) {
    normalized[key.trim().toLowerCase()] = row[key];
  }
  return normalized;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const workbook = xlsx.read(buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json<any>(sheet, { defval: null });

    const acceptedRows: { locationId: string; cityOdd: string; shipToCust: string | null }[] = [];
    for (const rawRow of rows) {
      const row = normalizeRow(rawRow);
      const locationId = String(row['location_id'] ?? '').trim();
      const cityOdd = String(row['city_odd'] ?? '').trim();
      const shipToCust = row['ship_to_cust'] !== undefined && row['ship_to_cust'] !== null
        ? String(row['ship_to_cust']).trim()
        : null;

      // Skip rows with blank locationId
      if (!locationId) continue;

      // Accept Nagpur always
      if (cityOdd.toLowerCase() === 'nagpur') {
        acceptedRows.push({ locationId, cityOdd: 'Nagpur', shipToCust });
      }
      // Accept Bengaluru only if ship_to_cust is '1'
      else if (
        cityOdd.toLowerCase() === 'bengaluru' &&
        shipToCust === '1'
      ) {
        acceptedRows.push({ locationId, cityOdd: 'Bengaluru', shipToCust });
      }
    }

    await prisma.operationsMetadata.deleteMany({});
    await prisma.$executeRawUnsafe('ALTER TABLE OperationsMetadata AUTO_INCREMENT = 1');
    const count = await prisma.operationsMetadata.count();
    console.log('Rows after delete:', count);

    let insertedCount = 0;
    if (acceptedRows.length > 0) {
      const result = await prisma.operationsMetadata.createMany({ data: acceptedRows });
      insertedCount = result.count ?? acceptedRows.length;
    }

    const maxId = await prisma.operationsMetadata.aggregate({ _max: { id: true } });
    console.log('Max ID after insert:', maxId._max.id);

    return NextResponse.json({
      success: true,
      inserted: insertedCount,
      message: `Successfully uploaded ${insertedCount} rows.`,
    });
  } catch (error) {
    console.error('Excel upload error:', error);
    return NextResponse.json(
      { error: 'Failed to process file', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}