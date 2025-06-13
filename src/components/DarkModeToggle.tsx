// src/components/DarkModeToggle.tsx
'use client';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  );
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-surface hover:bg-surface-light dark:bg-surface-dark dark:hover:bg-surface">
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
