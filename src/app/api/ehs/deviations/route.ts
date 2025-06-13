// src/app/api/ehs/deviations/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import { authMiddleware } from '@/middleware/auth';

// GET - List deviations with optional date filtering
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get('start');
    const endDate = searchParams.get('end');

    const whereClause: any = {};
    
    if (startDate && endDate) {
      whereClause.date = {
        gte: new Date(startDate),
        lte: new Date(endDate),
      };
    }

    const deviations = await prisma.eHSDeviation.findMany({
      where: whereClause,
      orderBy: { date: 'desc' },
    });

    // Calculate pending days for each deviation
    const deviationsWithPendingDays = deviations.map(deviation => {
      const pendingDays = deviation.complianceStatus === 'Closed' 
        ? 0 
        : Math.floor((Date.now() - deviation.date.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        ...deviation,
        pendingDays,
      };
    });

    return NextResponse.json(deviationsWithPendingDays);
  } catch (error) {
    console.error('Get deviations error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch deviations' },
      { status: 500 }
    );
  }
}

// POST - Create new deviation (protected)
export const POST = authMiddleware(async (req) => {
  try {
    const data = await req.json();
    
    const deviation = await prisma.eHSDeviation.create({
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
        categorization: data.categorization || 'Yellow',
        remarksByDepartment: data.remarksByDepartment,
        complianceStatus: data.complianceStatus || 'Open',
      },
    });

    return NextResponse.json(deviation);
  } catch (error) {
    console.error('Create deviation error:', error);
    return NextResponse.json(
      { error: 'Failed to create deviation' },
      { status: 500 }
    );
  }
});