import React from "react";
import filterIcon from "../assets/img/filter-list.svg";
import search from "../assets/img/search2.svg";

function FilterDocumentBar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-md">
      {/* Filter button */}
      <button className="flex items-center gap-1 border border-gray-100 hover:bg-gray-200 text-gray-700 font-normal font-semibold py-2 px-4 rounded-l-lg">
        {/* icon */}
        Фильтр
        <img src={filterIcon} alt="filter icon" className="w-5" />
      </button>

      {/* Search input */}
      <div className="flex items-center relative flex-grow mx-4">
        <input
          type="text"
          placeholder="Поиск"
          className="w-full border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {/* icon */}
        <img
          src={search}
          alt="search icon"
          className="absolute right-3 text-gray-400"
        />
      </div>
    </div>
  );
}

export default FilterDocumentBar;
