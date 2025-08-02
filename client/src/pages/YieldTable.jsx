import React, { useEffect, useState } from 'react';
import { useYield } from '../store/Yield';
import YieldRowCard from '../components/YieldRowCard';
import UpdateYieldData from '../components/UpdateYieldData';
import AddYield from '../components/AddYield';
import { useParams } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

function YieldTable() {
  const { data, deleteYield, updateYield, createYield,getYield } = useYield();
  const { location } = useParams();

  const [editRow, setEditRow] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);

  const [addRow, setAddRow] = useState({});
  const [isAdd, setIsAdd] = useState(false);

  const handleAdd = async () => {
    await createYield(location, addRow);
    setIsAdd(false);
  };

  const handleEdit = (row) => {
    setEditRow(row);
    setEditId(row._id);
    setIsUpdate(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      deleteYield(location, id);
    }
  };

  const handleSave = async () => {
    await updateYield(location, editId, editRow);
    setIsUpdate(false);
  };

  useEffect(()=>{
    getYield(location)
  },[])

  if (isAdd) {
    return (
      <AddYield
        data={addRow}
        onChangeData={setAddRow}
        handelAdd={handleAdd}
        handelCancel={() => setIsAdd(false)}
      />
    );
  }

  if (isUpdate) {
    return (
      <UpdateYieldData
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
        <h2 className="text-lg font-semibold">Yield Data of {location}</h2>
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
          <div className="w-32">Site</div>
          <div className="w-32">Operation</div>
          <div className="w-32">Operation Seq</div>
          <div className="w-32">Yield</div>
          <div className="w-32">Sys Target ID</div>
          <div className="w-24">Actions</div>
        </div>

        {/* Rows */}
        {data?.length > 0 ? (
          data.map((row) => (
            <YieldRowCard
              key={row._id}
              yieldRow={row}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="px-4 py-4 text-gray-500">No yield data available.</div>
        )}
      </div>
    </div>
  );
}

export default YieldTable;
