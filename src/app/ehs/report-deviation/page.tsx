'use client';

import { useState, useEffect } from 'react';

interface EHSDeviation {
  id: number;
  month: string;
  date: string;
  timeOfRound: string;
  location: string;
  responsibleDepartment: string;
  remarks: string;
  observations: string;
  photographBefore?: string;
  controlMeasures: string;
  photographAfter?: string;
  pendingDays: number;
  categorization: string;
  remarksByDepartment?: string;
  complianceStatus: string;
  createdAt: string;
  updatedAt: string;
}

const DEPARTMENTS = [
  'Lens lab', 'Tint lab', 'MEI Maintenance', 'Utility', 'Packing & Dispatch',
  'OMT', 'Fitting & QC', 'Project', 'Metal Frame', 'Admin', 'Bulk',
  'Security', 'ASRS Maintenance', 'Metal Frame Maintenance', 'MEI', 'JIT'
];

const REMARKS_OPTIONS = ['Unsafe Act', 'Unsafe Condition', 'Near Miss', 'Hazard Spotting'];
const CATEGORIZATION_OPTIONS = ['Red', 'Orange', 'Yellow'];
const COMPLIANCE_STATUS_OPTIONS = ['Open', 'Closed'];

export default function EHSReportDeviationPage() {
  const [deviations, setDeviations] = useState<EHSDeviation[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingDeviation, setEditingDeviation] = useState<EHSDeviation | null>(null);
  
  // Login form
  const [loginForm, setLoginForm] = useState({ employeeCode: '', password: '' });
  
  // Date filters
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // New deviation form
  const [newDeviation, setNewDeviation] = useState({
    month: '',
    date: '',
    timeOfRound: '',
    location: '',
    responsibleDepartment: '',
    remarks: '',
    observations: '',
    photographBefore: '',
    controlMeasures: '',
    photographAfter: '',
    categorization: 'Yellow',
    remarksByDepartment: '',
    complianceStatus: 'Open'
  });

  useEffect(() => {
    const savedToken = localStorage.getItem('ehsToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
    fetchDeviations();
  }, []);

  const fetchDeviations = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('start', startDate);
      if (endDate) params.append('end', endDate);

      const response = await fetch(`/api/ehs/deviations?${params}`);
      const data = await response.json();
      // Map remarksByDept to remarksByDepartment for UI consistency
      const normalized = Array.isArray(data)
        ? data.map((d) => ({
            ...d,
            remarksByDepartment: d.remarksByDept ?? '', // add this line
          }))
        : [];
      setDeviations(normalized);
    } catch (error) {
      console.error('Failed to fetch deviations:', error);
      setDeviations([]);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/ehs-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });
      
      const data = await response.json();
      if (response.ok) {
        setToken(data.token);
        setIsAuthenticated(true);
        localStorage.setItem('ehsToken', data.token);
        setShowLoginModal(false);
        setLoginForm({ employeeCode: '', password: '' });
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('ehsToken');
  };

  const handleFileUpload = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('photo', file);
    
    const response = await fetch('/api/ehs/uploadPhoto', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    return data.url;
  };

  const handleCreateDeviation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return;
    
    try {
      const response = await fetch('/api/ehs/deviations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newDeviation),
      });
      
      if (response.ok) {
        setShowCreateModal(false);
        setNewDeviation({
          month: '',
          date: '',
          timeOfRound: '',
          location: '',
          responsibleDepartment: '',
          remarks: '',
          observations: '',
          photographBefore: '',
          controlMeasures: '',
          photographAfter: '',
          categorization: 'Yellow',
          remarksByDepartment: '',
          complianceStatus: 'Open'
        });
        fetchDeviations();
      } else {
        alert('Failed to create deviation');
      }
    } catch (error) {
      alert('Failed to create deviation');
    }
  };

  const handleUpdateDeviation = async (id: number, data: Partial<EHSDeviation>) => {
    try {
      const url = isAuthenticated 
        ? `/api/ehs/deviation/${id}`
        : `/api/ehs/deviation/${id}/public-edit`;
      
      const method = isAuthenticated ? 'PUT' : 'PATCH';
      const headers: any = { 'Content-Type': 'application/json' };
      
      if (isAuthenticated) {
        headers['Authorization'] = `Bearer ${token}`;
      }
      
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        fetchDeviations();
        setEditingDeviation(null);
      } else {
        alert('Failed to update deviation');
      }
    } catch (error) {
      alert('Failed to update deviation');
    }
  };

  const handleDeleteDeviation = async (id: number) => {
    if (!isAuthenticated || !confirm('Are you sure you want to delete this deviation?')) return;
    
    try {
      const response = await fetch(`/api/ehs/deviation/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        fetchDeviations();
      } else {
        alert('Failed to delete deviation');
      }
    } catch (error) {
      alert('Failed to delete deviation');
    }
  };

  const handleExportPDF = async () => {
    try {
      const params = new URLSearchParams();
      if (startDate) params.append('startDate', startDate);
      if (endDate) params.append('endDate', endDate);
      
      const response = await fetch(`/api/ehs/exportPDF?${params}`);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ehs-deviations-${startDate || 'all'}-${endDate || 'all'}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      alert('Failed to export PDF');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#1f295c]">EHS Deviation Reporting</h1>
          <div className="flex gap-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-[#1f295c] text-white rounded hover:bg-opacity-90"
                >
                  Create Deviation
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 bg-[#1f295c] text-white rounded hover:bg-opacity-90"
              >
                EHS Officer Login
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="flex gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-black"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 text-black"
              />
            </div>
            <button
              onClick={fetchDeviations}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Filter
            </button>
            <button
              onClick={handleExportPDF}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Export PDF
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Month</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Time of Round</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Location</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Responsible Department</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Remarks</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Observations</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Photo (Before)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Control Measures</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Photo (After)</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Pending Days</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Categorization</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Dept Remarks</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-[#1f295c] uppercase border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={15} className="px-4 py-8 text-center text-black border border-gray-300">
                    Loading...
                  </td>
                </tr>
              ) : deviations.length === 0 ? (
                <tr>
                  <td colSpan={15} className="px-4 py-8 text-center text-black border border-gray-300">
                    No deviations found
                  </td>
                </tr>
              ) : (
                deviations.map((deviation) => (
                  <tr key={deviation.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.month}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{new Date(deviation.date).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.timeOfRound}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.location}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.responsibleDepartment}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.remarks}</td>
                    <td className="px-4 py-3 text-sm max-w-xs truncate text-black border border-gray-300">{deviation.observations}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">
                      {deviation.photographBefore ? (
                        <img src={deviation.photographBefore} alt="Before" className="w-16 h-16 object-cover rounded" />
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm max-w-xs truncate text-black border border-gray-300">{deviation.controlMeasures}</td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">
                      {deviation.photographAfter ? (
                        <img src={deviation.photographAfter} alt="After" className="w-16 h-16 object-cover rounded" />
                      ) : (
                        'N/A'
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-black border border-gray-300">{deviation.pendingDays}</td>
                    <td className="px-4 py-3 text-sm border border-gray-300">
                      <span className={`px-2 py-1 rounded text-xs ${
                        deviation.categorization === 'Red' ? 'bg-red-100 text-black' :
                        deviation.categorization === 'Orange' ? 'bg-orange-100 text-black' :
                        'bg-yellow-100 text-black'
                      }`}>
                        {deviation.categorization}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm max-w-xs truncate text-black border border-gray-300">{deviation.remarksByDepartment || 'N/A'}</td>
                    <td className="px-4 py-3 text-sm border border-gray-300">
                      <span className={`px-2 py-1 rounded text-xs ${
                        deviation.complianceStatus === 'Closed' ? 'bg-green-100 text-black' : 'bg-red-100 text-black'
                      }`}>
                        {deviation.complianceStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border border-gray-300">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setEditingDeviation(deviation)}
                          className="text-black hover:underline text-xs"
                        >
                          Edit
                        </button>
                        {isAuthenticated && (
                          <button
                            onClick={() => handleDeleteDeviation(deviation.id)}
                            className="text-black hover:underline text-xs"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-xl font-bold mb-4 text-[#1f295c]">EHS Officer Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black mb-1">
                    Employee Code
                  </label>
                  <input
                    type="text"
                    value={loginForm.employeeCode}
                    onChange={(e) => setLoginForm({ ...loginForm, employeeCode: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-black mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#1f295c] text-white rounded hover:bg-opacity-90"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Create Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg w-full max-w-4xl m-4 max-h-screen overflow-y-auto">
              <h2 className="text-xl font-bold mb-4 text-[#1f295c]">Create New Deviation</h2>
              <form onSubmit={handleCreateDeviation} className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Month</label>
                  <select
                    value={newDeviation.month}
                    onChange={(e) => setNewDeviation({ ...newDeviation, month: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select Month</option>
                    {[
                      'January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'December'
                    ].map(month => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Date</label>
                  <input
                    type="date"
                    value={newDeviation.date}
                    onChange={(e) => setNewDeviation({ ...newDeviation, date: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Time of Round</label>
                  <input
                    type="text"
                    value={newDeviation.timeOfRound}
                    onChange={(e) => setNewDeviation({ ...newDeviation, timeOfRound: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Location</label>
                  <input
                    type="text"
                    value={newDeviation.location}
                    onChange={(e) => setNewDeviation({ ...newDeviation, location: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Responsible Department</label>
                  <select
                    value={newDeviation.responsibleDepartment}
                    onChange={(e) => setNewDeviation({ ...newDeviation, responsibleDepartment: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select Department</option>
                    {DEPARTMENTS.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Remarks</label>
                  <select
                    value={newDeviation.remarks}
                    onChange={(e) => setNewDeviation({ ...newDeviation, remarks: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    required
                  >
                    <option value="">Select Remarks</option>
                    {REMARKS_OPTIONS.map(remark => (
                      <option key={remark} value={remark}>{remark}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-black mb-1">Observations</label>
                  <textarea
                    value={newDeviation.observations}
                    onChange={(e) => setNewDeviation({ ...newDeviation, observations: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Photograph (Before)</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const url = await handleFileUpload(file);
                        setNewDeviation({ ...newDeviation, photographBefore: url });
                      }
                    }}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Categorization</label>
                  <select
                    value={newDeviation.categorization}
                    onChange={(e) => setNewDeviation({ ...newDeviation, categorization: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                  >
                    {CATEGORIZATION_OPTIONS.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-black mb-1">Control Measures</label>
                  <textarea
                    value={newDeviation.controlMeasures}
                    onChange={(e) => setNewDeviation({ ...newDeviation, controlMeasures: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                    rows={3}
                    required
                  />
                </div>
                <div className="col-span-2 flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#1f295c] text-white rounded hover:bg-opacity-90"
                  >
                    Create Deviation
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Edit Modal */}
        {editingDeviation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl m-4 max-h-screen overflow-y-auto">
              <h2 className="text-xl font-bold mb-4 text-[#1f295c]">
                {isAuthenticated ? 'Edit Deviation' : 'Update Deviation (Limited)'}
              </h2>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const data: any = {};
                
                if (isAuthenticated) {
                  // EHS officers can edit all fields
                  data.month = formData.get('month');
                  data.date = formData.get('date');
                  data.timeOfRound = formData.get('timeOfRound');
                  data.location = formData.get('location');
                  data.responsibleDepartment = formData.get('responsibleDepartment');
                  data.remarks = formData.get('remarks');
                  data.observations = formData.get('observations');
                  data.photographBefore = editingDeviation.photographBefore;
                  data.controlMeasures = formData.get('controlMeasures');
                  data.categorization = formData.get('categorization');
                } else {
                  // Anonymous users can only edit specific fields
                  data.remarksByDepartment = formData.get('remarksByDepartment');
                  data.complianceStatus = formData.get('complianceStatus');
                  if (editingDeviation.photographAfter) {
                    data.photographAfter = editingDeviation.photographAfter;
                  }
                }
                
                handleUpdateDeviation(editingDeviation.id, data);
              }}>
                {isAuthenticated ? (
                  // Full form for EHS officers
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Month</label>
                      <input
                        name="month"
                        type="text"
                        defaultValue={editingDeviation.month}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Date</label>
                      <input
                        name="date"
                        type="date"
                        defaultValue={editingDeviation.date.split('T')[0]}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Time of Round</label>
                      <input
                        name="timeOfRound"
                        type="text"
                        defaultValue={editingDeviation.timeOfRound}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Location</label>
                      <input
                        name="location"
                        type="text"
                        defaultValue={editingDeviation.location}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Responsible Department</label>
                      <select
                        name="responsibleDepartment"
                        defaultValue={editingDeviation.responsibleDepartment}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      >
                        {DEPARTMENTS.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Remarks</label>
                      <select
                        name="remarks"
                        defaultValue={editingDeviation.remarks}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        required
                      >
                        {REMARKS_OPTIONS.map(remark => (
                          <option key={remark} value={remark}>{remark}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-black mb-1">Observations</label>
                      <textarea
                        name="observations"
                        defaultValue={editingDeviation.observations}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-black mb-1">Control Measures</label>
                      <textarea
                        name="controlMeasures"
                        defaultValue={editingDeviation.controlMeasures}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Categorization</label>
                      <select
                        name="categorization"
                        defaultValue={editingDeviation.categorization}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                      >
                        {CATEGORIZATION_OPTIONS.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ) : (
                  // Limited form for anonymous users
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Photograph (After)</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const url = await handleFileUpload(file);
                            setEditingDeviation({ ...editingDeviation, photographAfter: url });
                          }
                        }}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                      />
                      {editingDeviation.photographAfter && (
                        <img src={editingDeviation.photographAfter} alt="After" className="mt-2 w-32 h-32 object-cover rounded" />
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Remarks by Department</label>
                      <textarea
                        name="remarksByDepartment"
                        defaultValue={editingDeviation.remarksByDepartment || ''}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                        rows={3}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">Compliance Status</label>
                      <select
                        name="complianceStatus"
                        defaultValue={editingDeviation.complianceStatus}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-black"
                      >
                        {COMPLIANCE_STATUS_OPTIONS.map(status => (
                          <option key={status} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-4 mt-6">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-[#1f295c] text-white rounded hover:bg-opacity-90"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingDeviation(null)}
                    className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}