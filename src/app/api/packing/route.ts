import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

const PACKING_REGEX = /^SNXS\d{16}$/;

export async function POST(req: Request) {
  try {
    const { scanId, stationId, nexsId } = await req.json();

    // 1) Reject invalid packing-format barcodes
    if (!PACKING_REGEX.test(scanId)) {
      return NextResponse.json(
        { error: 'Invalid Packing Scan ID format (must be SNXS+16 digits).' },
        { status: 400 }
      );
    }

    // 2) Check if this scanId has been scanned before
    const existing = await prisma.packingScan.findFirst({
      where: { scanId },
    });

    const isDuplicate = !!existing;
    const previousStation = existing?.stationId ?? null;

    // 3) Create IST timestamp (UTC + 5.5 hrs)
    const istNow = new Date(Date.now() + 5.5 * 60 * 60 * 1000);

    // 4) Insert new scan record
    await prisma.packingScan.create({
      data: {
        scanId,
        stationId,
        nexsId,
        timestamp: istNow,
      },
    });

    // 5) Lookup city from metadata (if available)
    const meta = await prisma.shippingMetadata.findUnique({
      where: { shippingID: scanId },
    });

    const city = meta?.city?.toUpperCase() ?? null;

    // 6) Return final response
    return NextResponse.json({
      success: true,
      isDuplicate,
      previousStation,
      city,
    });

  } catch (err: any) {
    console.error('Packing API error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
