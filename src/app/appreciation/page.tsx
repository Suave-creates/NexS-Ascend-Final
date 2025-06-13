import Image from 'next/image';

export default function AppreciationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        🌟 Appreciation Wall 🌟
      </h1>

      <Image
        src="/images/appriciation-bg.jpg" // This matches your file path in the public folder
        alt="Appreciation Message"
        width={800}
        height={600}
        className="rounded-xl shadow-xl"
      />
    </div>
  );
}
