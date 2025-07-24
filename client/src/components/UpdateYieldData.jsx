import React from 'react';

function UpdateYieldData({ data, onChangedata, handelSave, handelCancel }) {
  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangedata({ ...data, [name]: value });
  };

  return (
    <div className="p-4 bg-white rounded shadow max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Update Yield Data</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="site"
          value={data.site || ''}
          onChange={handleChange}
          placeholder="Site"
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
          name="operationSeq"
          value={data.operationSeq || ''}
          onChange={handleChange}
          placeholder="Operation Seq"
          type="number"
          className="border p-2 rounded"
        />

        <input
          name="yield"
          value={data.yield || ''}
          onChange={handleChange}
          placeholder="Yield (%)"
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

export default UpdateYieldData;
