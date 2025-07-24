import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function StrikeRateRowCard({ strikeRateRow, onEdit, onDelete }) {
  return (
    <div className="flex items-center border-b border-gray-200 px-4 py-2 text-sm text-gray-700 overflow-x-auto">
      <div className="w-24">{strikeRateRow.grade}</div>
      <div className="w-32">{strikeRateRow.tdc}</div>
      <div className="w-32">{strikeRateRow.operation}</div>
      <div className="w-24">{strikeRateRow.strikerate}</div>
      <div className="w-32">{strikeRateRow.additionalStrikerate ?? '-'}</div>
      <div className="w-32">
        {strikeRateRow.sec1Min ?? '-'} - {strikeRateRow.sec1Max ?? '-'}
      </div>
      <div className="w-32">
        {strikeRateRow.sec2Min ?? '-'} - {strikeRateRow.sec2Max ?? '-'}
      </div>
      <div className="w-32">{strikeRateRow.steelSpec || '-'}</div>
      <div className="w-32">{strikeRateRow.steelType || '-'}</div>
      <div className="w-32">{strikeRateRow.operationSeq ?? '-'}</div>

      <div className="flex gap-2 ml-auto pr-2">
        <button
          onClick={() => onEdit?.(strikeRateRow)}
          className="text-blue-600 hover:text-blue-800"
          title="Edit"
        >
          <FiEdit size={18} />
        </button>
        <button
          onClick={() => onDelete?.(strikeRateRow._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default StrikeRateRowCard;
