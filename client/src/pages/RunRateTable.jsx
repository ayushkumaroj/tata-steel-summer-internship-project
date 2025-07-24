import React, { useEffect, useState } from 'react';
import { useRunRate } from '../store/RunRate';
import RunRateRowCard from '../components/RunRateRowCard';
import UpdateRunRate from '../components/UpdateRunRate';
import AddRunRate from '../components/AddRunRate';
import { useParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function RunRateTable() {
  const { data, deleteRunRate, updateRunRate, createRunRate,getRunRate } = useRunRate();
  const { location } = useParams();

  const [editRow, setEditRow] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const [addRow, setAddRow] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const handleEdit = (row) => {
    setEditRow(row);
    setEditId(row._id);
    setIsUpdate(true);
  };

  const handleSave = async () => {
    await updateRunRate(location, editRow, editId);
    setIsUpdate(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      await deleteRunRate(location, id);
    }
  };

  const handleAdd = async () => {
    await createRunRate(location, addRow);
    setIsAdd(false);
  };
  
  
  if (isAdd) {
    return (
      <AddRunRate
        data={addRow}
        onChangeData={setAddRow}
        handelAdd={handleAdd}
        handelCancel={() => setIsAdd(false)}
      />
    );
  }

  if (isUpdate) {
    return (
      <UpdateRunRate
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
        <h2 className="text-lg font-semibold">Run Rate Data of {location}</h2>
        <button
          onClick={() => setIsAdd(true)}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          <FiPlus /> Add New
        </button>
      </div>

      <div className="min-w-max border border-gray-300 rounded">
        {/* Header */}
        <div className="flex items-center bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
          <div className="w-24">Site ID</div>
          <div className="w-24">Grade</div>
          <div className="w-24">TDC</div>
          <div className="w-32">Operation</div>
          <div className="w-24">Quality Code</div>
          <div className="w-24">Steel Grade</div>
          <div className="w-24">Runrate</div>
          <div className="w-32">Cooldown Time</div>
          <div className="w-32">Sec1 Min - Max</div>
          <div className="w-32">Sec2 Min - Max</div>
          <div className="w-24">Steel Spec</div>
          <div className="w-24">Steel Type</div>
          <div className="w-24">Actions</div>
        </div>

        {/* Rows */}
        {data?.length > 0 ? (
          data.map((row) => (
            <RunRateRowCard
              key={row._id}
              runRateRow={row}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="px-4 py-4 text-gray-500">No run rate data found.</div>
        )}
      </div>
    </div>
  );
}

export default RunRateTable;
