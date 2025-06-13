import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

const FR0_REGEX = /^SNXS\d{16}$/;

export async function POST(req: Request) {
  try {
    const { scanId, stationId, nexsId } = await req.json();

    // 1) Validate scan format
    if (!FR0_REGEX.test(scanId)) {
      return NextResponse.json(
        { error: 'Invalid FR0 Scan ID format (must be SNXS+16 digits).' },
        { status: 400 }
      );
    }

    // 2) Check for duplicate
    const existing = await prisma.fR0Scan.findFirst({
      where: { scanId },
    });

    const isDuplicate = !!existing;
    const previousStation = existing?.stationId ?? null;

    // 3) IST timestamp (optional override)
    const istNow = new Date(Date.now() + 5.5 * 60 * 60 * 1000);

    // 4) Save to DB — createdAt is optional since Prisma handles it
    await prisma.fR0Scan.create({
      data: {
        scanId,
        stationId,
        nexsId,
        createdAt: istNow,
      },
    });

    // 5) Lookup metadata (optional city)
    const meta = await prisma.shippingMetadata.findUnique({
      where: { shippingID: scanId },
    });

    const city = meta?.city?.toUpperCase() ?? null;

    // 6) Respond
    return NextResponse.json({
      success: true,
      isDuplicate,
      previousStation,
      city,
    });
  } catch (err: any) {
    console.error('FR0 API error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
