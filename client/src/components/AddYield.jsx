import React from 'react';

function AddYield({ data, onChangeData, handelAdd, handelCancel }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeData({ ...data, [name]: value });
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Yield Entry</h2>
      
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
          placeholder="Yield"
          type="number"
          className="border p-2 rounded"
        />
        <input
          name="sysTargetId"
          value={data.sysTargetId || ''}
          onChange={handleChange}
          placeholder="Sys Target ID"
          type="number"
          className="border p-2 rounded"
        />
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button
          onClick={handelCancel}
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
        >
          Cancel
        </button>
        <button
          onClick={handelAdd}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddYield;
