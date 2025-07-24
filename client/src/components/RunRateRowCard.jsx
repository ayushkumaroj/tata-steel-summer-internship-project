import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function RunRateRowCard({ runRateRow, onEdit, onDelete }) {
  return (
    <div className="flex items-center border-b border-gray-200 px-4 py-2 text-sm text-gray-800 overflow-x-auto">
      <div className="w-24">{runRateRow.siteId}</div>
      <div className="w-24">{runRateRow.grade || '-'}</div>
      <div className="w-24">{runRateRow.tdc}</div>
      <div className="w-32">{runRateRow.operation}</div>
      <div className="w-32">{runRateRow.qualityCode}</div>
      <div className="w-32">{runRateRow.steelGrade || '-'}</div>
      <div className="w-24">{runRateRow.runrate}</div>
      <div className="w-24">{runRateRow.cooldownTime ?? '-'}</div>
      <div className="w-32">
        {runRateRow.sec1Min} - {runRateRow.sec1Max}
      </div>
      <div className="w-32">
        {runRateRow.sec2Min} - {runRateRow.sec2Max}
      </div>
      <div className="w-32">{runRateRow.steelSpec || '-'}</div>
      <div className="w-32">{runRateRow.steelType || '-'}</div>
      <div className="w-24">{runRateRow.operationSeq ?? '-'}</div>

      <div className="flex gap-2 ml-auto pr-2">
        <button
          onClick={() => onEdit?.(runRateRow)}
          className="text-blue-600 hover:text-blue-800"
          title="Edit"
        >
          <FiEdit size={18} />
        </button>
        <button
          onClick={() => onDelete?.(runRateRow._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default RunRateRowCard;
