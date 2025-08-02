import React, { useEffect, useState } from 'react';
import { useStrikeRate } from '../store/StrickRate';
import StrikeRateRowCard from '../components/StrikeRateRowCard';
import UpdateStrikeData from '../components/UpdateStrikeData';
import AddStrikeRate from '../components/AddStrikeRate';
import { useParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function StrikeRateTable() {
  const { data, deleteStrikeRate, updateStrikeRate, createStrikeRate,getStrikeRate } = useStrikeRate();
  const { location } = useParams();

  const [editRow, setEditRow] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const [addRow, setAddRow] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  // Handlers
  const handleEdit = (row) => {
    setEditRow(row);
    setEditId(row._id);
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      deleteStrikeRate(location, id);
    }
  };

  const handleSave = async () => {
    await updateStrikeRate(location, editRow, editId);
    setIsUpdate(false);
  };

  const handleAdd = async () => {
    await createStrikeRate(location, addRow);
    setIsAdd(false);
  };
  useEffect(()=>{
    getStrikeRate(location)
  },[])
 
  if (isAdd) {
    return (
      <AddStrikeRate
        data={addRow}
        onChangeData={setAddRow}
        handelAdd={handleAdd}
        handelCancel={() => setIsAdd(false)}
      />
    );
  }

  if (isUpdate) {
    return (
      <UpdateStrikeData
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
        <h2 className="text-lg font-semibold">Strike Rate Data of {location}</h2>
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
          <div className="w-24">Grade</div>
          <div className="w-32">TDC</div>
          <div className="w-32">Operation</div>
          <div className="w-24">Strike Rate</div>
          <div className="w-32">Additional Rate</div>
          <div className="w-32">Sec1 Min-Max</div>
          <div className="w-32">Sec2 Min-Max</div>
          <div className="w-32">Steel Spec</div>
          <div className="w-32">Steel Type</div>
          <div className="w-32">Operation Seq</div>
          <div className="w-24">Actions</div>
        </div>

        {/* Data Rows */}
        {data?.length > 0 ? (
          data.map((row) => (
            <StrikeRateRowCard
              key={row._id}
              strikeRateRow={row}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="px-4 py-4 text-gray-500">No strike rate data available.</div>
        )}
      </div>
    </div>
  );
}

export default StrikeRateTable;
