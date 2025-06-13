import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

const PACKING_REGEX = /^SNXS\d{16}$/;

export async function POST(req: Request) {
  try {
    const { scanId, stationId, nexsId } = await req.json();

    // 1) Reject packing-format barcodes (used only in /packing)
    if (PACKING_REGEX.test(scanId)) {
      return NextResponse.json(
        { error: 'Packing Scan IDs (SNXS+16 digits) are not valid here.' },
        { status: 400 }
      );
    }

    // 2) Check if this scanId has already been logged before
    const existing = await prisma.dispatchScan.findFirst({
      where: { scanId },
    });

    const isDuplicate = !!existing;
    const previousStation = existing?.stationId ?? null;

    // 3) Create IST timestamp (UTC + 5.5 hrs)
    const istNow = new Date(Date.now() + 5.5 * 60 * 60 * 1000);

    // 4) Log the new scan with IST time
    await prisma.dispatchScan.create({
      data: {
        scanId,
        stationId,
        nexsId,
        timestamp: istNow,
      },
    });

    // 5) Return response
    return NextResponse.json({
      success: true,
      isDuplicate,
      previousStation,
    });

  } catch (err: any) {
    console.error('Dispatch API error:', err);
    return NextResponse.json(
      { error: err.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
