import React from 'react';

function AddQueueTime({ data, onChangeData, handelAdd, handelCancel }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeData({ ...data, [name]: value });
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-6xl mx-auto mt-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add Queue Time Entry</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="siteId" value={data.siteId || ''} onChange={handleChange} placeholder="Site ID" className="border p-2 rounded" />
        <input name="operation" value={data.operation || ''} onChange={handleChange} placeholder="Operation" className="border p-2 rounded" />
        <input name="tdc" value={data.tdc || ''} onChange={handleChange} placeholder="TDC" className="border p-2 rounded" />
        <input name="grade" value={data.grade || ''} onChange={handleChange} placeholder="Grade" className="border p-2 rounded" />
        <input name="maxQueueTime" value={data.maxQueueTime || ''} onChange={handleChange} placeholder="Max Queue Time" type="number" className="border p-2 rounded" />
        <input name="minQueueTime" value={data.minQueueTime || ''} onChange={handleChange} placeholder="Min Queue Time" type="number" className="border p-2 rounded" />
        <input name="steelSpec" value={data.steelSpec || ''} onChange={handleChange} placeholder="Steel Spec" className="border p-2 rounded" />
        <input name="steelType" value={data.steelType || ''} onChange={handleChange} placeholder="Steel Type" className="border p-2 rounded" />
        <input name="operationSeq" value={data.operationSeq || ''} onChange={handleChange} placeholder="Operation Seq" type="number" className="border p-2 rounded" />
        <input name="scenarioId" value={data.scenarioId || ''} onChange={handleChange} placeholder="Scenario ID" type="number" className="border p-2 rounded" />
        <input name="sysTargetId" value={data.sysTargetId || ''} onChange={handleChange} placeholder="Sys Target ID" type="number" className="border p-2 rounded" />
        <input name="sysAuthId" value={data.sysAuthId || ''} onChange={handleChange} placeholder="Sys Auth ID" className="border p-2 rounded" />
        <input name="sysCreatedBy" value={data.sysCreatedBy || ''} onChange={handleChange} placeholder="Created By" className="border p-2 rounded" />
        <input name="sysEntState" value={data.sysEntState || ''} onChange={handleChange} placeholder="Entity State" className="border p-2 rounded" />
        <input name="sysLastModifiedBy" value={data.sysLastModifiedBy || ''} onChange={handleChange} placeholder="Last Modified By" className="border p-2 rounded" />
        <input name="sysNcType" value={data.sysNcType || ''} onChange={handleChange} placeholder="NC Type" className="border p-2 rounded" />
        <input name="sysErrCode" value={data.sysErrCode || ''} onChange={handleChange} placeholder="Error Code" className="border p-2 rounded" />
        <input name="sysErrSvrty" value={data.sysErrSvrty || ''} onChange={handleChange} placeholder="Error Severity" className="border p-2 rounded" />
        <input name="sysFilter" value={data.sysFilter || ''} onChange={handleChange} placeholder="Filter" className="border p-2 rounded" />
        <input name="sysExceptionType" value={data.sysExceptionType || ''} onChange={handleChange} placeholder="Exception Type" className="border p-2 rounded" />
        <input name="udProcessGrp" value={data.udProcessGrp || ''} onChange={handleChange} placeholder="Process Group" className="border p-2 rounded" />
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button onClick={handelCancel} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">Cancel</button>
        <button onClick={handelAdd} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add</button>
      </div>
    </div>
  );
}

export default AddQueueTime;
