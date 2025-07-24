import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

function QueueRowCard({ queueRow, onEdit, onDelete }) {
  return (
    <div className="flex items-center border-b border-gray-200 px-4 py-2 text-sm text-gray-800 overflow-x-auto">
      <div className="w-24">{queueRow.siteId}</div>
      <div className="w-24">{queueRow.operation}</div>
      <div className="w-24">{queueRow.tdc}</div>
      <div className="w-24">{queueRow.grade || '-'}</div>
      <div className="w-24">{queueRow.maxQueueTime ?? '-'}</div>
      <div className="w-24">{queueRow.minQueueTime ?? '-'}</div>
      <div className="w-24">{queueRow.steelSpec || '-'}</div>
      <div className="w-24">{queueRow.steelType || '-'}</div>
      <div className="w-24">{queueRow.operationSeq ?? '-'}</div>
      <div className="w-24">{queueRow.scenarioId ?? '-'}</div>
      <div className="w-24">{queueRow.sysTargetId ?? '-'}</div>
      <div className="w-32">{queueRow.sysAuthId || '-'}</div>
      <div className="w-24">{queueRow.sysSource}</div>
      <div className="w-32">{queueRow.sysCreatedBy || '-'}</div>
      <div className="w-32">{queueRow.sysCreationDate?.slice(0, 10) || '-'}</div>
      <div className="w-24">{queueRow.sysEntState}</div>
      <div className="w-32">{queueRow.sysLastModifiedBy || '-'}</div>
      <div className="w-32">{queueRow.sysLastModifiedDate?.slice(0, 10) || '-'}</div>
      <div className="w-24">{queueRow.sysNcType || '-'}</div>
      <div className="w-24">{queueRow.sysErrCode || '-'}</div>
      <div className="w-24">{queueRow.sysErrSvrty || '-'}</div>
      <div className="w-24">{queueRow.sysFilter || '-'}</div>
      <div className="w-32">{queueRow.sysExceptionType || '-'}</div>
      <div className="w-32">{queueRow.udProcessGrp || '-'}</div>

      <div className="flex gap-2 ml-auto pr-2">
        <button
          onClick={() => onEdit?.(queueRow)}
          className="text-blue-600 hover:text-blue-800"
          title="Edit"
        >
          <FiEdit size={18} />
        </button>
        <button
          onClick={() => onDelete?.(queueRow._id)}
          className="text-red-600 hover:text-red-800"
          title="Delete"
        >
          <FiTrash2 size={18} />
        </button>
      </div>
    </div>
  );
}

export default QueueRowCard;
