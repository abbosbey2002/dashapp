import React, { useState } from "react";
import filterIcon from "../assets/img/filter-list.svg";
import search from "../assets/img/search2.svg";

function FilterDocumentBar({ onFilterChange, onSearchChange }) {
  const [filter, setFilter] = useState({
    status: "",
    sender: "",
    recipient: "",
    date: "",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
    onFilterChange({ ...filter, [name]: value }); // Update filters on change
  };

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex items-center gap-3 justify-between bg-white p-4 rounded-md shadow-md">
      <div className="relative">
        <button
          className="flex items-center gap-1 relative border border-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-l-lg"
          onClick={() => setFilter((prev) => ({ ...prev, open: !prev.open }))}
        >
          Фильтр
          <img src={filterIcon} alt="filter icon" className="w-5" />
        </button>

        <div
          className={`absolute w-72 bg-white shadow-lg p-4 rounded-lg z-88 ${
            filter.open ? "" : "hidden"
          }`}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Статус</label>
            <select
              name="status"
              value={filter.status}
              onChange={handleFilterChange}
              className="border rounded-lg font-extralight  bg-white px-4 py-2 w-full"
            >
              <option value="">Выберите статус</option>
              <option value="В работе">В работе</option>
              <option value="Отложено">Отложено</option>
              <option value="Черновик">Черновик</option>
              <option value="Архив">Архив</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Отправитель
            </label>
            <select
              name="sender"
              value={filter.sender}
              onChange={handleFilterChange}
              className="border bg-white font-extralight rounded-lg px-4 py-2 w-full"
            >
              <option value="">Выберите отправителя</option>
              {/* Boshqa variantlar shu yerda */}
              <option value="sender1">Отправитель 1</option>
              <option value="sender2">Отправитель 2</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Дата создания
            </label>
            <input
              name="date"
              type="date"
              value={filter.date}
              onChange={handleFilterChange}
              className="border rounded-lg font-extralight  px-4 py-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              На кого отправлен
            </label>
            <input
              name="recipient"
              type="text"
              value={filter.recipient}
              onChange={handleFilterChange}
              className="border rounded-lg px-4 py-2 w-full"
            />
          </div>

          <div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Фильтровать
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center border border-gray-200 rounded-lg p-2">
        <input
          type="text"
          placeholder="Поиск"
          onChange={handleSearchInput}
          className="border-none focus:outline-none flex-1"
        />
        <img src={search} alt="search" className="" />
      </div>
    </div>
  );
}

export default FilterDocumentBar;
