// src/app/page.tsx

import Image from "next/image";
import ExcelUploadForm from "@/components/ExcelUploadForm";

export default function DashboardPage() {
  return (
    <main
      className="min-h-screen p-8 flex items-start justify-start"
      style={{
        backgroundImage: "url(/images/home-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-white bg-opacity-90 rounded-xl shadow-lg px-8 py-6"
        style={{ marginTop: "133px" }} // 208px (mt-52) - 75px = 133px
      >
        <h1 className="text-3xl font-bold" style={{ color: '#1f295c' }}>
          Welcome to NexS Ascend by ARYA
        </h1>
      </div>
    </main>
  );
}