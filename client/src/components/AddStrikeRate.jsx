import React from 'react';

function AddStrikeRate({ data, onChangeData, handelAdd, handelCancel }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeData({ ...data, [name]: value });
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-4xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Strike Rate Entry</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="grade" value={data.grade || ''} onChange={handleChange} placeholder="Grade" className="border p-2 rounded" />
        <input name="tdc" value={data.tdc || ''} onChange={handleChange} placeholder="TDC" className="border p-2 rounded" />
        <input name="operation" value={data.operation || ''} onChange={handleChange} placeholder="Operation" className="border p-2 rounded" />
        <input name="strikerate" value={data.strikerate || ''} onChange={handleChange} placeholder="Strike Rate" type="number" className="border p-2 rounded" />
        <input name="additionalStrikerate" value={data.additionalStrikerate || ''} onChange={handleChange} placeholder="Additional Strike Rate" type="number" className="border p-2 rounded" />
        <input name="sec1Min" value={data.sec1Min || ''} onChange={handleChange} placeholder="Sec1 Min" type="number" className="border p-2 rounded" />
        <input name="sec1Max" value={data.sec1Max || ''} onChange={handleChange} placeholder="Sec1 Max" type="number" className="border p-2 rounded" />
        <input name="sec2Min" value={data.sec2Min || ''} onChange={handleChange} placeholder="Sec2 Min" type="number" className="border p-2 rounded" />
        <input name="sec2Max" value={data.sec2Max || ''} onChange={handleChange} placeholder="Sec2 Max" type="number" className="border p-2 rounded" />
        <input name="steelSpec" value={data.steelSpec || ''} onChange={handleChange} placeholder="Steel Spec" className="border p-2 rounded" />
        <input name="steelType" value={data.steelType || ''} onChange={handleChange} placeholder="Steel Type" className="border p-2 rounded" />
        <input name="operationSeq" value={data.operationSeq || ''} onChange={handleChange} placeholder="Operation Seq" type="number" className="border p-2 rounded" />
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button onClick={handelCancel} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
        <button onClick={handelAdd} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add</button>
      </div>
    </div>
  );
}

export default AddStrikeRate;
