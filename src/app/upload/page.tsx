// src/app/upload/page.tsx
'use client';

import ExcelUploadForm from '@/components/ExcelUploadForm';

export default function UploadPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <h2 className="text-xl font-semibold mb-4">Excel Upload</h2>
      <p className="text-black-600 text-sm mb-4">
        Expected columns: <strong>ShippingID</strong> and <strong>City</strong>
      </p>
      <ExcelUploadForm />
    </div>
  );
}
