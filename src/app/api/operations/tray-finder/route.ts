// File: src/app/api/operations/tray-finder/route.ts
import { NextResponse } from 'next/server';
import { pool } from '../../../../lib/db';
import fs from 'fs';
import path from 'path';

// Load mapping from numeric ID to location name (JSON file)
function loadLocationMap(): Record<number, string> {
  try {
    const mapPath = path.resolve(process.cwd(), 'src/lib/locationMap.json');
    const json = fs.readFileSync(mapPath, 'utf-8');
    return JSON.parse(json);
  } catch (err) {
    console.error('Failed to load location map:', err);
    return {};
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const trayId = searchParams.get('trayId');
  if (!trayId) {
    return NextResponse.json({ error: 'trayId is required' }, { status: 400 });
  }

  try {
    // Fetch the last 5 scan entries (including duplicates)
    const [rows] = await pool.query(
      `
      SELECT
        tray_barcode AS trayId,
        location_id  AS location,
        scan_time    AS timestamp,
        action
      FROM bosch_cv_db.conveyor_tray_movement
      WHERE tray_barcode = ?
      ORDER BY scan_time DESC
      LIMIT 5
    `,
      [trayId]
    );
    const typedRows = rows as Array<{
      trayId: string;
      location: number;
      timestamp: string;
      action: string;
    }>;
    // Annotate each record from JSON map
    const locMap = loadLocationMap();
    const history = typedRows.map(r => ({
      trayId: r.trayId,
      location: r.location,
      locationName: locMap[r.location] ?? `Location ${r.location}`,
      timestamp: r.timestamp,
      action: r.action,
    }));

    return NextResponse.json({ history });
  } catch (error: any) {
    console.error('DB error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch tray history' },
      { status: 500 }
    );
  }
}
