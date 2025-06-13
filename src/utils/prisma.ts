// src/utils/prisma.ts
import { PrismaClient } from '@prisma/client';

// Prevent multiple instances in development (HMR)  
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
