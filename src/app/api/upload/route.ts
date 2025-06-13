// src/app/api/operations/metadata/upload.ts

import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import * as XLSX from 'xlsx';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as Blob;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rawRows: any[] = XLSX.utils.sheet_to_json(sheet);

    // Only accept Nagpur, Bengaluru (with ship_to_cust === '1'), and Surat
    const rows = rawRows
      .filter((row) => {
        const city = String(row.city_odd ?? '').trim().toLowerCase();
        if (city === 'nagpur' || city === 'surat') {
          return row.shipping_code; // must have shipping_code
        }
        if (city === 'bengaluru') {
          return row.shipping_code && String(row.ship_to_cust ?? '').trim() === '1';
        }
        return false;
      })
      .map((row) => ({
        shippingID: String(row.shipping_code).trim(),
        city:       String(row.city_odd).trim(),
      }));

    if (rows.length === 0) {
      return NextResponse.json(
        { error: 'No valid rows found' },
        { status: 400 }
      );
    }

    // In one transaction: clear out historic data, reset auto-increment, then bulk insert new
    await prisma.$executeRawUnsafe('ALTER TABLE ShippingMetadata AUTO_INCREMENT = 1');
    await prisma.$transaction([
      prisma.shippingMetadata.deleteMany(),
      prisma.shippingMetadata.createMany({
        data: rows,
        skipDuplicates: true,  // safe-guard if your sheet has dupes
      }),
    ]);

    return NextResponse.json({ success: true, count: rows.length });
  } catch (err: any) {
    console.error('Upload API error:', err);
    return NextResponse.json(
      { error: err.message || 'Upload failed' },
      { status: 500 }
    );
  }
}
