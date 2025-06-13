// src/app/api/bulk/stats/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const stationId = url.searchParams.get('stationId');
  if (!stationId) {
    return NextResponse.json({ error: 'stationId is required' }, { status: 400 });
  }

  const IST_OFFSET = 5.5 * 60 * 60 * 1000;
  const oneHourAgo = new Date(Date.now() - 1000 * 60 * 60 + IST_OFFSET);
  const count = await prisma.bulkScan.count({
    where: {
      stationId,
      timestamp: { gte: oneHourAgo },
    },
  });

  return NextResponse.json({ count });
}
