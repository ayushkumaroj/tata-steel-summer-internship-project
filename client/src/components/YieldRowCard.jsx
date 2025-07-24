import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function YieldRowCard({ yieldRow, onEdit, onDelete }) {
  return (
    <div className="flex items-center border-b border-gray-200 px-4 py-2 text-sm text-gray-800 overflow-x-auto">
      <div className="w-24">{yieldRow.site}</div>
      <div className="w-32">{yieldRow.operation}</div>
      <div className="w-24 text-center">{yieldRow.operationSeq ?? '-'}</div>
      <div className="w-24 text-center">{yieldRow.yield ?? '-'}</div>
      <div className="w-32 text-center">{yieldRow.sysTargetId ?? '-'}</div>
      <div className="w-32 text-center">{yieldRow.sysAuthId ?? '-'}</div>

      <div className="flex gap-3 ml-auto pr-2">
        <button
          onClick={() => onEdit?.(yieldRow)}
          className="text-blue-600 hover:text-blue-800"
          title="Edit"
        >
          <FiEdit size={18} />
        </button>
        <button
          onClick={() => onDelete?.(yieldRow._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default YieldRowCard;
