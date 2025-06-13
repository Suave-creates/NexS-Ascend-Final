// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/utils/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const { employeeCode, password } = await req.json();

    // 1) Look up the user by their employee code
    const user = await prisma.user.findUnique({
      where: { employeeCode },
    });
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // 2) Compare the incoming password with the hashed one in the database
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // 3) Success! (Later we’ll set a real session or cookie here)
    return NextResponse.json({ message: 'Authenticated' });
  } catch (err) {
    console.error('Auth error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
