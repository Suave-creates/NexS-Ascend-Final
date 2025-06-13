// src/app/layout.tsx
import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        {/* 1️⃣ Sidebar on the left */}
        <Sidebar />

        {/* 2️⃣ Main area */}
        <div className="flex-1 flex flex-col">
          {/* Header at top */}
          <Header />

          {/* Page content */}
          <main className="flex-1 overflow-auto bg-gray-50 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
