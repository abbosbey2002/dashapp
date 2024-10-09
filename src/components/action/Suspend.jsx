import React from "react";

function Suspend({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px]">
        <h2 className="text-xl font-semibold mb-4">Отложить документ</h2>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Дата</label>
              <input
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="2024-03-20"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">Время</label>
              <input
                type="time"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                defaultValue="17:42"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Комментарий</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows="3"
              placeholder="Введите комментарий"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Отложить документ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Suspend;
