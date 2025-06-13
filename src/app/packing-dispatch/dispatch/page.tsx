"use client";

import { useState, useEffect, useRef } from 'react';

export default function DispatchPage() {
  const [scanId, setScanId]       = useState('');
  const [stationId, setStationId] = useState('');
  const [nexsId, setNexsId]       = useState('');
  const [message, setMessage]     = useState<string | null>(null);
  const [showDupModal, setShowDupModal] = useState(false);
  const [prevStation, setPrevStation]   = useState<string | null>(null);
  const [hourCount, setHourCount]       = useState(0);

  const PACKING_REGEX = /^SNXS\d{16}$/;
  const debounceRef   = useRef<NodeJS.Timeout | null>(null);

  // Fetch last-hour stats
  useEffect(() => {
    if (!stationId) return;
    const fetchCount = async () => {
      const res = await fetch(`/api/dispatch/stats?stationId=${stationId}`);
      if (res.ok) {
        const { count } = await res.json();
        setHourCount(count);
      }
    };
    fetchCount();
    const iv = setInterval(fetchCount, 45000);
    return () => clearInterval(iv);
  }, [stationId]);

  // Core scan handler
  const handleScan = async (id: string) => {
    if (PACKING_REGEX.test(id)) {
      setMessage('❌ Packing-format codes not allowed here.');
      setTimeout(() => setMessage(null), 2000);
      setScanId('');
      return;
    }
    if (!stationId.trim()) {
      setMessage('❌ Station ID cannot be empty.');
      setTimeout(() => setMessage(null), 2000);
      return;
    }
    if (!nexsId.trim()) {
      setMessage('❌ NexS ID cannot be empty.');
      setTimeout(() => setMessage(null), 2000);
      return;
    }

    const res  = await fetch('/api/dispatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ scanId: id, stationId, nexsId }),
    });
    const data = await res.json();

    if (res.ok) {
      if (data.isDuplicate) {
        setPrevStation(data.previousStation);
        setShowDupModal(true);
      } else {
        setMessage('✔️ Dispatch scan recorded.');
        setTimeout(() => setMessage(null), 2000);
      }
    } else {
      setMessage(`❌ ${data.error || 'Scan failed.'}`);
      setTimeout(() => setMessage(null), 2000);
    }

    setScanId('');
  };

  // Debounce effect: fire handleScan 1s after typing stops, ignore blank
  useEffect(() => {
    // Only trigger on non-empty scanId
    if (!scanId.trim()) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      handleScan(scanId.trim());
      debounceRef.current = null;
    }, 1500);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [scanId, stationId, nexsId]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/dispatch-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-black">
        {/* Last-hour stats */}
        {stationId && (
          <div className="absolute top-4 right-4 bg-gray-100 p-2 rounded shadow text-center">
            <div className="text-xs text-gray-600">Last 1 hr dispatches</div>
            <div className="text-xl font-bold">{hourCount}</div>
            <div className="text-xs text-gray-500">{stationId}</div>
          </div>
        )}

        <h2 className="text-xl font-semibold mb-4" style={{ color: '#1f295c' }}>
          Dispatch Scan
        </h2>

        {message && (
          <div
            className={`mb-4 text-center text-sm ${
              message.startsWith('✔️') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </div>
        )}

        <div className="space-y-4">
          <label className="block">
            <span>Scan ID</span>
            <input
              type="text"
              value={scanId}
              onChange={e => setScanId(e.target.value)}
              placeholder="Type or scan any code"
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
              {Array.from({ length: 20 }, (_, i) => {
                const code = i + 1 < 10 ? `DS0${i + 1}` : `DS${i + 1}`;
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

        {/* Duplicate modal */}
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
      </div>
    </div>
  );
}
