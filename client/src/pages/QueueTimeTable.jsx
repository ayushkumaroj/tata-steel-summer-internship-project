import React, { useEffect, useState } from 'react';
import QueueRowCard from '../components/QueueRowCard';
import { useQueueTime } from '../store/QueueTime';
import { useParams } from 'react-router-dom';
import UpdateQueueData from '../components/UpdateQueueData';
import AddQueueTime from '../components/AddQueueTime';
import { FiPlus } from 'react-icons/fi';

function QueueTimeTable() {
  const { data, deleteQueueTime, updateQueueTime, createQueueTime,getQueueTime } = useQueueTime();
  const { location } = useParams();

  const [editRow, setEditRow] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const [addRow, setAddRow] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const handleEdit = (id) => {
    const found = data.find((item) => item._id === id);
    if (found) {
      setEditRow(found);
      setEditId(id);
      setIsUpdate(true);
    }
  };

  const handleSave = async () => {
    await updateQueueTime(location, editRow, editId);
    setIsUpdate(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      await deleteQueueTime(location, id);
    }
  };

  const handleAdd = async () => {
    await createQueueTime(location, addRow);
    setIsAdd(false);
  };



  if (isAdd) {
    return (
      <AddQueueTime
        data={addRow}
        onChangeData={setAddRow}
        handelAdd={handleAdd}
        handelCancel={() => setIsAdd(false)}
      />
    );
  }

  if (isUpdate) {
    return (
      <UpdateQueueData
        data={editRow}
        onChangedata={setEditRow}
        handelSave={handleSave}
        handelCancel={() => setIsUpdate(false)}
      />
    );
  }

  return (
    <div className="p-4 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Queue Time Data of {location}</h2>
        <button
          onClick={() => setIsAdd(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          <FiPlus /> Add New
        </button>
      </div>

      <div className="min-w-max border border-gray-300 rounded">
        {/* Header Row */}
        <div className="flex items-center bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
          <div className="w-24">Site ID</div>
          <div className="w-24">Operation</div>
          <div className="w-24">TDC</div>
          <div className="w-24">Grade</div>
          <div className="w-24">Max Time</div>
          <div className="w-24">Min Time</div>
          <div className="w-24">Steel Spec</div>
          <div className="w-24">Steel Type</div>
          <div className="w-24">Op Seq</div>
          <div className="w-24">Scenario ID</div>
          <div className="w-24">Target ID</div>
          <div className="w-32">Auth ID</div>
          <div className="w-24">Source</div>
          <div className="w-32">Created By</div>
          <div className="w-32">Created Date</div>
          <div className="w-24">State</div>
          <div className="w-32">Modified By</div>
          <div className="w-32">Modified Date</div>
          <div className="w-24">NC Type</div>
          <div className="w-24">Err Code</div>
          <div className="w-24">Err Severity</div>
          <div className="w-24">Filter</div>
          <div className="w-32">Exception</div>
          <div className="w-32">Process Group</div>
          <div className="w-24">Actions</div>
        </div>

        {/* Data Rows */}
        {data?.length > 0 ? (
          data.map((row) => (
            <QueueRowCard
              key={row._id}
              queueRow={row}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="px-4 py-4 text-gray-500">No data available.</div>
        )}
      </div>
    </div>
  );
}

export default QueueTimeTable;
