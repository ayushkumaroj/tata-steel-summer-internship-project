import React from 'react';

function UpdateStrikeData({ data, onChangedata, handelSave, handelCancel }) {
  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangedata({ ...data, [name]: value });
  };

  return (
    <div className="p-4 bg-white border rounded shadow max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Update Strike Rate</h2>

      <div className="grid grid-cols-2 gap-4">
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
          name="strikerate"
          value={data.strikerate || ''}
          onChange={handleChange}
          placeholder="Strike Rate"
          type="number"
          className="border p-2 rounded"
        />

        <input
          name="additionalStrikerate"
          value={data.additionalStrikerate || ''}
          onChange={handleChange}
          placeholder="Additional Strike Rate"
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
          name="operationSeq"
          value={data.operationSeq || ''}
          onChange={handleChange}
          placeholder="Operation Seq"
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

export default UpdateStrikeData;
