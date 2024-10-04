import React, { useState } from "react";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import editIcon from "../assets/img/PlusSquare.svg";
import trashIcon from "../assets/img/Trash.svg";
import { NavLink } from "react-router-dom";

const RouteList = () => {
  const [routes, setRoutes] = useState([
    {
      id: 1,
      name: "Заказ новых реагентов",
      steps: [
        "Создаёт врач лаборатории",
        "Согласование с заведующей лаборатории",
        "Согласование логистом",
        "Подписывается директором",
        "Пересылается в бухгалтерию",
      ],
    },
    {
      id: 2,
      name: "Заказ новых реагентов",
      steps: [
        "Создаёт врач лаборатории",
        "Согласование с заведующей лаборатории",
        "Согласование логистом",
        "Подписывается директором",
        "Пересылается в бухгалтерию",
      ],
    },
  ]);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          Список маршрутов
        </h1>
        <div className="flex justify-between items-center mb-4">
          <NavLink
            to="create"
            className="bg-blue-500  text-white px-4 py-2 rounded-lg flex items-center"
          >
            <img src={PlusSquareblue} alt="Create Route" className="mr-2" />
            Создать маршрут
          </NavLink>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">
            Редактировать
          </button>
          <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg">
            Удалить
          </button>
        </div>
        <div className="text-gray-500">1 из 123</div>
      </div>

      {/* Маршрутлар рўйхати */}
      <div className="space-y-4">
        {routes.map((route) => (
          <div key={route.id} className="border border-gray-300 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="font-medium text-gray-900">{route.name}</span>
            </div>
            <div className="ml-6 space-y-1">
              <span className="text-gray-600">Путь маршрута:</span>
              <div className="flex flex-wrap space-x-2 mt-1">
                {route.steps.map((step, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm"
                  >
                    {index + 1}. {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Навигация */}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 border rounded-lg mr-2">{"<"}</button>
        <button className="px-4 py-2 border rounded-lg">{" > "}</button>
      </div>
    </div>
  );
};

export default RouteList;
