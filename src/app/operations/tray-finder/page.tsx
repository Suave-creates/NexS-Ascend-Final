'use client';

import { useState, useEffect } from 'react';

export default function TrayFinderPage() {
  const [trayId, setTrayId] = useState<string>('');
  const [history, setHistory] = useState<
    Array<{ location: number; locationName: string; timestamp: string }>
  >([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (/^[A-Za-z]{2}\d{5}$/.test(trayId)) {
      fetchHistory(trayId);
    } else {
      setHistory([]);
      setError('');
    }
  }, [trayId]);

  const fetchHistory = async (id: string) => {
    setError('');
    setHistory([]);
    try {
      const res = await fetch(
        `/api/operations/tray-finder?trayId=${encodeURIComponent(id)}`
      );
      if (!res.ok) {
        if (res.status === 400) {
          setError('Please provide a tray ID.');
        } else if (res.status === 404) {
          setError('Tray not found.');
        } else {
          setError('Failed to fetch tray history.');
        }
        return;
      }
      const json = await res.json();
      setHistory(json.history || []);
    } catch (e) {
      setError('Network error.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-3xl font-bold text-[#1f295c] mb-8">
        TRAY FINDER
      </h1>
      <div className="max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Scan or enter Tray ID (CT00000)..."
          value={trayId}
          onChange={(e) => setTrayId(e.target.value.toUpperCase())}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-[#1f295c]"
        />
      </div>
      {error && (
        <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-700 font-medium">{error}</p>
        </div>
      )}
      {!error && history.length > 0 && (
        <div className="max-w-xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-black">Last 5 Locations</h2>
          <ul className="list-disc list-inside text-black space-y-2">
            {history.map((item, idx) => (
              <li key={idx}>
                <strong>Location:</strong> {item.locationName} ({item.location}) &nbsp;|&nbsp;
                <strong>At:</strong> {new Date(item.timestamp).toLocaleString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
