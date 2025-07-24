import React from 'react';

function UpdateRunRate({ data, onChangedata, handelSave, handelCancel }) {
  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangedata({ ...data, [name]: value });
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Update Run Rate</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="siteId"
          value={data.siteId || ''}
          onChange={handleChange}
          placeholder="Site ID"
          className="border p-2 rounded"
        />
        <input
          name="grade"
          value={data.grade || ''}
          onChange={handleChange}
          placeholder="Grade"
          className="border p-2 rounded"
        />
        <input
          name="tdc"
          value={data.tdc || ''}
          onChange={handleChange}
          placeholder="TDC"
          className="border p-2 rounded"
        />
        <input
          name="operation"
          value={data.operation || ''}
          onChange={handleChange}
          placeholder="Operation"
          className="border p-2 rounded"
        />
        <input
          name="qualityCode"
          value={data.qualityCode || ''}
          onChange={handleChange}
          placeholder="Quality Code"
          className="border p-2 rounded"
        />
        <input
          name="steelGrade"
          value={data.steelGrade || ''}
          onChange={handleChange}
          placeholder="Steel Grade"
          className="border p-2 rounded"
        />
        <input
          name="runrate"
          value={data.runrate || ''}
          onChange={handleChange}
          placeholder="Run Rate"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="cooldownTime"
          value={data.cooldownTime || ''}
          onChange={handleChange}
          placeholder="Cooldown Time"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="sec1Min"
          value={data.sec1Min || ''}
          onChange={handleChange}
          placeholder="Sec1 Min"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="sec1Max"
          value={data.sec1Max || ''}
          onChange={handleChange}
          placeholder="Sec1 Max"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="sec2Min"
          value={data.sec2Min || ''}
          onChange={handleChange}
          placeholder="Sec2 Min"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="sec2Max"
          value={data.sec2Max || ''}
          onChange={handleChange}
          placeholder="Sec2 Max"
          type="number"
          className="border p-2 rounded"
        />
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={handelSave}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save
        </button>
        <button
          onClick={handelCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default UpdateRunRate;
