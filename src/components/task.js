import React, { useState } from 'react';

function Task({ task, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedDate, setEditedDate] = useState(task.dueDate || '');

  const handleSave = () => {
    onEdit(task.id, editedText, editedDate);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded mb-2 bg-white shadow-sm">
      {isEditing ? (
        <div className="flex flex-col md:flex-row md:items-center flex-grow">
          <input
            type="text"
            className="border p-2 mr-2 rounded w-full md:w-1/2 mb-2 md:mb-0"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <input
            type="date"
            className="border p-2 mr-2 rounded"
            value={editedDate}
            onChange={(e) => setEditedDate(e.target.value)}
          />
        </div>
      ) : (
        <div
          className={`flex-grow cursor-pointer ${
            task.completed ? 'line-through text-gray-400' : ''
          }`}
          onClick={() => onToggle(task.id)}
        >
          <div>{task.text}</div>
          {task.dueDate && (
            <div className="text-sm text-gray-500">Due: {task.dueDate}</div>
          )}
        </div>
      )}

      <div className="flex mt-2 md:mt-0">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-3 py-1 rounded mr-2"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
