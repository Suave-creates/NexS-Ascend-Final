'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select an Excel file.');
      return;
    }

    setMessage('Uploading...');
    setError('');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Upload failed');
      } else {
        setMessage(`Successfully uploaded ${data.count} rows.`);
      }
    } catch (err: any) {
      setError(err.message || 'Upload error');
    }
  };

  return (
    <div className="flex justify-center items-start py-8">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-left">
        <h1 className="text-2xl font-semibold mb-4 text-[#1f295c]">
          Excel Upload
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="file"
              className="block mb-1 font-medium text-[#1f295c]"
            >
              Select Excel File
            </label>
            <input
              id="file"
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => {
                if (e.target.files) setFile(e.target.files[0]);
              }}
              className="block w-full text-black border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#1f295c] text-white font-medium rounded hover:bg-opacity-90 transition"
            >
              Upload
            </button>
          </div>
        </form>

        {message && (
          <p className="mt-4 text-green-700">{message}</p>
        )}
        {error && (
          <p className="mt-4 text-red-700">{error}</p>
        )}
      </div>
    </div>
  );
}
