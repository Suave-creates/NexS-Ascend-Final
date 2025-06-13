// src/components/ExcelUploadForm.tsx
'use client';
import { useState } from 'react';

export default function ExcelUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('❌ Please select an Excel file first.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();

    if (res.ok) {
      setMessage(`✅ Uploaded ${data.count} records.`);
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-4 rounded shadow"
    >
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Upload Excel
      </button>
      {message && (
        <p className="text-center text-sm mt-2">{message}</p>
      )}
    </form>
  );
}
