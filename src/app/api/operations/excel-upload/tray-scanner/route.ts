// src/app/api/operations/tray-scanner/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/utils/prisma'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const locationId = url.searchParams.get('locationId')
  if (!locationId) {
    return NextResponse.json(
      { error: 'locationId query parameter is required' },
      { status: 400 }
    )
  }

  const record = await prisma.operationsMetadata.findFirst({
    where: { locationId },
  })

  return NextResponse.json(
    record
      ? { found: true, locationId: record.locationId, cityOdd: record.cityOdd }
      : { found: false }
  )
}
