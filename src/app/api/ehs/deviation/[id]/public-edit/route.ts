// src/app/api/ehs/deviation/[id]/public-edit/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';

// PATCH - Public edit (only specific fields)
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await req.json();
    
    // Only allow updating these specific fields
    const allowedFields = {
      photographAfter: data.photographAfter,
      remarksByDepartment: data.remarksByDepartment,
      complianceStatus: data.complianceStatus,
    };

    // Remove undefined fields
    const updateData = Object.fromEntries(
      Object.entries(allowedFields).filter(([_, value]) => value !== undefined)
    );

    const deviation = await prisma.eHSDeviation.update({
      where: { id: parseInt(params.id) },
      data: updateData,
    });

    return NextResponse.json(deviation);
  } catch (error) {
    console.error('Public edit deviation error:', error);
    return NextResponse.json(
      { error: 'Failed to update deviation' },
      { status: 500 }
    );
  }
}