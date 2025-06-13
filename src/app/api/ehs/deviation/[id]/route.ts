// src/app/api/ehs/deviation/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { authMiddleware } from '@/middleware/auth';

// GET - Get single deviation
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const deviation = await prisma.eHSDeviation.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!deviation) {
      return NextResponse.json({ error: 'Deviation not found' }, { status: 404 });
    }

    const pendingDays = deviation.complianceStatus === 'Closed' 
      ? 0 
      : Math.floor((Date.now() - deviation.date.getTime()) / (1000 * 60 * 60 * 24));

    return NextResponse.json({
      ...deviation,
      pendingDays,
    });
  } catch (error) {
    console.error('Get deviation error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deviation' },
      { status: 500 }
    );
  }
}

// PUT - Update deviation (protected)
export const PUT = authMiddleware(async (req, { params }: { params: { id: string } }) => {
  try {
    const data = await req.json();
    
    const deviation = await prisma.eHSDeviation.update({
      where: { id: parseInt(params.id) },
      data: {
        month: data.month,
        date: new Date(data.date),
        timeOfRound: data.timeOfRound,
        location: data.location,
        responsibleDepartment: data.responsibleDepartment,
        remarks: data.remarks,
        observations: data.observations,
        photographBefore: data.photographBefore,
        controlMeasures: data.controlMeasures,
        photographAfter: data.photographAfter,
        categorization: data.categorization,
        remarksByDepartment: data.remarksByDepartment,
        complianceStatus: data.complianceStatus,
      },
    });

    return NextResponse.json(deviation);
  } catch (error) {
    console.error('Update deviation error:', error);
    return NextResponse.json(
      { error: 'Failed to update deviation' },
      { status: 500 }
    );
  }
});

// DELETE - Delete deviation (protected)
export const DELETE = authMiddleware(async (req, { params }: { params: { id: string } }) => {
  try {
    await prisma.eHSDeviation.delete({
      where: { id: parseInt(params.id) },
    });

    return NextResponse.json({ message: 'Deviation deleted successfully' });
  } catch (error) {
    console.error('Delete deviation error:', error);
    return NextResponse.json(
      { error: 'Failed to delete deviation' },
      { status: 500 }
    );
  }
});