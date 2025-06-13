"use client";

import { useState, useEffect } from 'react';

export default function bulkPage() {
  const [scanId, setScanId] = useState('');
  const [stationId, setStationId] = useState('');
  const [nexsId, setNexsId] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [hourCount, setHourCount] = useState(0);
  const [showDupModal, setShowDupModal] = useState(false);
  const [prevStation, setPrevStation] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [showCityModal, setShowCityModal] = useState(false);

  const FORMAT_REGEX = /^SNXS\d{16}$/;

  // Refresh “last hour” count every 45s
  useEffect(() => {
    if (!stationId) return;
    const fetchStats = async () => {
      const res = await fetch(`/api/bulk/stats?stationId=${stationId}`);
      if (res.ok) {
        const { count } = await res.json();
        setHourCount(count);
      }
    };
    fetchStats();
    const iv = setInterval(fetchStats, 45_000);
    return () => clearInterval(iv);
  }, [stationId]);

  // Auto‐scan when ID is valid
  useEffect(() => {
    if (!FORMAT_REGEX.test(scanId)) return;

    if (!stationId.trim()) {
      setMessage('❌ Station ID cannot be empty.');
      setScanId('');
      setTimeout(() => setMessage(null), 2000);
      return;
    }
    if (!nexsId.trim()) {
      setMessage('❌ NexS ID cannot be empty.');
      setScanId('');
      setTimeout(() => setMessage(null), 2000);
      return;
    }

    // Process scan
    (async () => {
      const res = await fetch('/api/bulk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scanId, stationId, nexsId }),
      });
      const data = await res.json();

      if (res.ok) {
        // Duplicate?
        if (data.isDuplicate) {
          setPrevStation(data.previousStation);
          setShowDupModal(true);
        } else {
          // Success
          setMessage('✔️ Scan recorded.');
          // Show city if available
          if (data.city) {
            setCity(data.city);
            setShowCityModal(true);
            setTimeout(() => setShowCityModal(false), 3000);
          }
        }
      } else {
        // Validation or server error
        setMessage(`❌ ${data.error}`);
      }
      // Clear input & message timeout
      setScanId('');
      setTimeout(() => setMessage(null), 2000);
    })();
  }, [scanId, stationId, nexsId]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/bulk-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-black">
        {/* Hourly Count */}
        {stationId && (
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded shadow text-center">
            <div className="text-xs text-gray-600">Last 1 hr scans</div>
            <div className="text-xl font-bold">{hourCount}</div>
            <div className="text-xs text-gray-500">{stationId}</div>
          </div>
        )}

        {/* Header */}
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1f295c' }}>
          Bulk Scan
        </h2>

        {/* Message */}
        {message && (
          <div className="mb-4 text-center text-sm text-green-700">
            {message}
          </div>
        )}

        {/* Form Fields */}
        <div className="space-y-4">
          <label className="block">
            <span>Scan ID</span>
            <input
              type="text"
              value={scanId}
              onChange={e => setScanId(e.target.value.toUpperCase())}
              placeholder="SNXS + 16 digits"
              className="mt-1 w-full border border-gray-300 rounded p-2"
            />
          </label>

          <label className="block">
            <span>Station ID</span>
            <select
              value={stationId}
              onChange={e => setStationId(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select station</option>
              {Array.from({ length: 30 }, (_, i) => {
                const code = i + 1 < 10 ? `BS0${i + 1}` : `BS${i + 1}`;
                return (
                  <option key={code} value={code}>
                    {code}
                  </option>
                );
              })}
            </select>
          </label>

          <label className="block">
            <span>NexS ID</span>
            <input
              type="text"
              value={nexsId}
              onChange={e => setNexsId(e.target.value)}
              placeholder="Enter NexS ID"
              className="mt-1 w-full border border-gray-300 rounded p-2"
            />
          </label>
        </div>

        {/* Duplicate Modal */}
        {showDupModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <p className="mb-4">
                ⚠️ Duplicate detected!<br />
                Previously at station <strong>{prevStation}</strong>.
              </p>
              <button
                onClick={() => setShowDupModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* City Modal */}
        {showCityModal && city && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg text-center">
              <h3 className="text-lg font-bold">Destination City</h3>
              <p className="mt-2 text-xl">{city}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}