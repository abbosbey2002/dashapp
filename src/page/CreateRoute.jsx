import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowCircleLeft from "../assets/img/ArrowCircleLeft.svg";
import trash from "../assets/img/Trash.svg";
import PlusSquare from "../assets/img/PlusSquare.svg";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import TextInput from "../components/TextInput";

function CreateRoute() {
  const [formData, setFormData] = useState({
    signingPosition: "",
    routeName: "",
    creator: "",
    position: "",
    department: "",
    approvalPosition: "",
    approvalDepartment: "",
    signingPosition: "",
    signingDepartment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="flex items-center gap-2 text-3xl font-semibold mb-6 text-[#040F1F]">
        <NavLink to="/route">
          <img src={ArrowCircleLeft} alt="" />
        </NavLink>
        Создание маршрута
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Название маршрута и Создаёт маршрут */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            label="Название маршрута"
            name="routeName"
            value={formData.routeName}
            onChange={handleInputChange}
            placeholder="Введите"
          />
          <TextInput
            label="Создаёт маршрут"
            name="creator"
            value={formData.creator}
            onChange={handleInputChange}
            placeholder="Введите"
          />
        </div>

        {/* Должность и Подразделение */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            label="Должность"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            placeholder="Введите"
          />
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Подразделение
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            >
              <option value="">Выберите список</option>
              <option value="Отдел 1">Отдел 1</option>
              <option value="Отдел 2">Отдел 2</option>
            </select>
          </div>
        </div>

        {/* Согласовывает маршрут */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Согласовывает маршрут
          </label>
          <select
            name="approvalPosition"
            value={formData.approvalPosition}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="">Выберите список</option>
            <option value="Согласователь 1">Согласователь 1</option>
            <option value="Согласователь 2">Согласователь 2</option>
          </select>
          <div className="flex items-center space-x-4 mt-2">
            <button
              type="button"
              className="text-blue-600 flex items-center space-x-1"
            >
              <img src={PlusSquareblue} alt="" /> <span>Добавить</span>
            </button>
          </div>
        </div>

        {/* Добавить - Должность и Подразделение */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            label="Должность"
            name="signingPosition"
            value={formData.signingPosition}
            onChange={handleInputChange}
            placeholder="Выберите список"
          />
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Подразделение
            </label>
            <select
              name="signingDepartment"
              value={formData.signingDepartment}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            >
              <option value="">Выберите список</option>
              <option value="Отдел 1">Отдел 1</option>
              <option value="Отдел 2">Отдел 2</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Подписывает маршрут
          </label>
          <select
            name="signingPosition"
            value={formData.signingPosition}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="">Выберите список</option>
            <option value="Подписывающий 1">Подписывающий 1</option>
            <option value="Подписывающий 2">Подписывающий 2</option>
            <option value="Подписывающий 3">Подписывающий 3</option>
          </select>

          {/* Добавить этап tugmasi */}
          <div className="flex items-center space-x-4 mt-2">
            <button
              type="button"
              className="text-blue-600 flex items-center space-x-1"
            >
              <img src={PlusSquareblue} alt="Plus Icon" />
              <span>Добавить</span>
            </button>
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-3 space-y-2 md:space-y-0 md:space-x-2">
          <button
            type="submit"
            className="bg-blue-500 flex items-center gap-1 text-white px-4 py-2 rounded-md w-full md:w-auto hover:bg-blue-700 transition"
          >
            <img src={PlusSquare} alt="" />
            <span className="text-white">Создать</span>
          </button>
          <button
            type="button"
            className="border-2 flex items-center gap-1 border-blue-500 border-spacing-4  px-4 py-2 rounded-lg w-full md:w-auto transition"
          >
            <img src={trash} alt="" />
            <span className="text-blue-950">Удалить</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateRoute;
