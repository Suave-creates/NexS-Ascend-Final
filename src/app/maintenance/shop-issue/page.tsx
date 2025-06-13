'use client';
import React, { useState, useEffect } from 'react';

const DEPARTMENTS = [
  'BH-M-ASRS - ASRS',
  'BH-M-CNVYR - Conveyor',
  'BH-M-DISP - Dispatch',
  'BH-M-F&QC - Fitting & QC',
  'BH-M-MF - Metal Frame',
  'BH-M-L-ARC - ARC',
  'BH-M-L-H.C. - Hardcoating',
  'BH-M-L-Sur - Surfacing',
  'BH-M-MAIN - Maintenance Others',
  'BH-M-MEI - Edging',
  'BH-M-PACK - Packing',
  'BH-M-F&QC - QC',
  'BH-U-ELEC - Utilities - Electrical',
  'BH-U-MAIN - Utilities - ETP/STP',
  'BH-U-HVAC - Utilities - HVAC',
  'BH-U-COMP - Utilities - Compressor Unit',
  'BH-U-MAIN - Utilities - Others',
  'BH-U-WTP - Utilities - Water Treatment Plant',
].sort();

const CURRENCIES = [
  { label: '₹', value: 'INR' },
  { label: '€', value: 'EUR' },
  { label: '$', value: 'USD' },
];

export default function MaintenanceShopIssuePage() {
  const [pid, setPid] = useState('');
  const [partName, setPartName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('nos');
  const [rate, setRate] = useState(0);
  const [category, setCategory] = useState('R&M');
  const [destination, setDestination] = useState('');
  const [department, setDepartment] = useState(DEPARTMENTS[0]);
  const [currency, setCurrency] = useState('INR');
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setTotal(quantity * rate);
  }, [quantity, rate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const issuedAt = new Date().toISOString();
    const payload = {
      pid,
      partName,
      quantity,
      unit,
      rate,
      category,
      destination,
      department,
      total,
      currency,
      issuedAt,
    };

    try {
      const res = await fetch('/api/maintenance/shop-issue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setMessage('Issue logged successfully');
      // Clear form fields after successful log
      setPid('');
      setPartName('');
      setQuantity(0);
      setUnit('nos');
      setRate(0);
      setCategory('R&M');
      setDestination('');
      setDepartment(DEPARTMENTS[0]);
      setCurrency('INR');
      setTotal(0);
    } catch (err: any) {
      setMessage(err.message || 'Error logging issue');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-8">
      <div className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-left">
        <h1 className="text-2xl font-semibold mb-6 text-[#1f295c]">
          Maintenance: Shop Issue
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 text-black">

          {/* PID */}
          <div>
            <label htmlFor="pid" className="block mb-1 font-medium">PID</label>
            <input
              id="pid"
              type="text"
              value={pid}
              onChange={e => setPid(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Spare Part Name */}
          <div>
            <label htmlFor="partName" className="block mb-1 font-medium">Spare Part Name</label>
            <input
              id="partName"
              type="text"
              value={partName}
              onChange={e => setPartName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Quantity & Unit */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="quantity" className="block mb-1 font-medium">Quantity</label>
              <input
                id="quantity"
                type="number"
                min="0"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="unit" className="block mb-1 font-medium">Unit</label>
              <select
                id="unit"
                value={unit}
                onChange={e => setUnit(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="nos">nos</option>
                <option value="pcs">pcs</option>
                <option value="ltr">ltr</option>
                <option value="ea">ea</option>
                <option value="set">set</option>
                <option value="mtr">mtr</option>
                <option value="roll">roll</option>
                <option value="pack">pack</option>
                <option value="kg">kg</option>
              </select>
            </div>
          </div>

          {/* Rate & Category */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="rate" className="block mb-1 font-medium">Rate</label>
              <input
                id="rate"
                type="number"
                min="0"
                value={rate}
                onChange={e => setRate(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="category" className="block mb-1 font-medium">Category</label>
              <select
                id="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="R&M">R&M</option>
                <option value="FOC">FOC</option>
                <option value="Tool">Tool</option>
                <option value="Consumable">Consumable</option>
              </select>
            </div>
          </div>

          {/* Destination */}
          <div>
            <label htmlFor="destination" className="block mb-1 font-medium">
              Destination of Use / Machine
            </label>
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={e => setDestination(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block mb-1 font-medium">Department</label>
            <select
              id="department"
              value={department}
              onChange={e => setDepartment(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              {DEPARTMENTS.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Currency & Total */}
          <div className="flex space-x-4 items-end">
            <div className="w-24">
              <label htmlFor="currency" className="block mb-1 font-medium">Currency</label>
              <select
                id="currency"
                value={currency}
                onChange={e => setCurrency(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                {CURRENCIES.map(c => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block mb-1 font-medium">Total</label>
              <div className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100">
                {total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#1f295c] text-white font-medium rounded hover:bg-opacity-90 transition"
          >
            Log Issue
          </button>
        </form>

        {message && (
          <div
            style={{ background: 'rgba(212,237,218,0.3)' }}
            className="mt-4 px-6 py-3 rounded shadow-lg"
          >
            <p className="text-green-900 font-medium">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}