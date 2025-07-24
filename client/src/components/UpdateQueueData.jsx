import React from 'react';

function UpdateQueueData({ data, onChangedata, handelSave, handelCancel }) {
  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangedata({ ...data, [name]: value });
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Update Queue Time</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="siteId"
          value={data.siteId || ''}
          onChange={handleChange}
          placeholder="Site ID"
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
          name="grade"
          value={data.grade || ''}
          onChange={handleChange}
          placeholder="Grade"
          className="border p-2 rounded"
        />
        <input
          name="steelSpec"
          value={data.steelSpec || ''}
          onChange={handleChange}
          placeholder="Steel Spec"
          className="border p-2 rounded"
        />
        <input
          name="steelType"
          value={data.steelType || ''}
          onChange={handleChange}
          placeholder="Steel Type"
          className="border p-2 rounded"
        />
        <input
          name="maxQueueTime"
          type="number"
          value={data.maxQueueTime ?? ''}
          onChange={handleChange}
          placeholder="Max Queue Time"
          className="border p-2 rounded"
        />
        <input
          name="minQueueTime"
          type="number"
          value={data.minQueueTime ?? ''}
          onChange={handleChange}
          placeholder="Min Queue Time"
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

export default UpdateQueueData;
