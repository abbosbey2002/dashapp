import React, { useEffect, useState } from "react";
import filterIcon from "../assets/img/filter-list.svg";
import search from "../assets/img/search2.svg";
import { getDepartments } from "../services/api";

function FilterDocumentBar({ onFilterChange, onSearchChange, setData }) {
  const [departments, setDepartments] = useState([]);

  const [filter, setFilter] = useState({
    status: "",
    sender: "",
    recipient: "",
    date: "",
  });

 

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const datas = await getDepartments(); // Departamentlarni olish
        setDepartments(datas.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchDepartments(); // Funksiyani chaqirish
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value); // Tanlangan qiymatni state ga saqlash
  };

  const filterdata = () => {
    setData(selectedValue);
  };

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="flex items-center md:flex-row-reverse gap-3 justify-between bg-white py-3">
      <div className="flex flex-1 items-center border border-gray-200 rounded-lg  p-2">
        <input
          type="text"
          placeholder="Поиск"
          onChange={handleSearchInput}
          className="border-none focus:outline-none flex-1"
        />
        <img src={search} alt="search" className="" />
      </div>
      <div className="relative">
        <button
          className="flex items-center gap-1 relative border border-[#DFDFDF] hover:bg-gray-200 text-gray-700 font-extralight py-2 px-4 rounded-l-lg"
          onClick={() => setFilter((prev) => ({ ...prev, open: !prev.open }))}
        >
          <span className="hidden text-[#0C1116] text-[14px] md:inline-block">
            Фильтр
          </span>
          <img src={filterIcon} alt="filter icon" className="w-5" />
        </button>

        <div
          className={`absolute w-72 right-0 md:left-0 top-16 bg-white shadow-lg p-4 rounded-lg z-88 ${
            filter.open ? "" : "hidden"
          }`}
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              департаменту
            </label>
            <select
              name="status"
              onChange={handleSelectChange}
              className="border rounded-lg font-extralight  bg-white px-4 py-2 w-full"
            >
              <option value="">Все</option>
              {departments.map((department) => (
                <option
                  key={department.departament_id}
                  value={department.departament_id}
                >
                  {department.departament_name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              onClick={filterdata}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Фильтровать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDocumentBar;
