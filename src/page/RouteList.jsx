import React, { useState } from "react";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import editIcon from "../assets/img/PlusSquare.svg";
import trashIcon from "../assets/img/Trash.svg";
import { NavLink } from "react-router-dom";
import FilterDocumentBar from "../components/FilterDocumentBar";
import CreateItem from "../components/CreateItem";

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
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center mb-4">
        <h2 className="font-semibold text-2xl">Список документов</h2>
        <CreateItem text="Создать документ" to="Create" />
      </div>

      <FilterDocumentBar />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2 text-left border-b">
                Название маршрута
              </th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr className="flex flex-col" key={route.id}>
                  <td className="flex items-center gap-3 p-4 border-2">
                    <input
                    id={`item${route.id}`}
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label for={`item${route.id}`} className="font-medium text-gray-900 p-4">
                      {route.name}
                    </label>
                  </td>
                  <td className="border-2 p-4">
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
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteList;
