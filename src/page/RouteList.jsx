import React, { useState } from "react";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import editIcon from "../assets/img/PlusSquare.svg";
import remove from "../assets/img/remove.svg";
import { NavLink } from "react-router-dom";
import FilterDocumentBar from "../components/FilterDocumentBar";
import CreateItem from "../components/CreateItem";
import Listaction from "../components/Listaction";
import Buttonsmall from "../components/Buttonsmall";
import PencilSimpleLinedark from "../assets/img/PencilSimpleLinedark.svg";

import Pagination from "../components/Pagination";

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
    <div className="bg-white rounded-lg shadow-md sm:p-6">
      <div className="flex flex-col md:flex-row justify-between  gap-3 md:items-center px-4 sm:px-0 mb-4">
        <h2 className="font-semibold mt-3 text-2xl">Список маршрутов</h2>
        <CreateItem text="Создать документ" to="Create" />
      </div>
    <div className="px-4 md:px-0">
      <FilterDocumentBar />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Buttonsmall icon={PencilSimpleLinedark} text={"Редактировать"} />
          <Buttonsmall icon={remove} text="Удалить" />
        </div>
        <Pagination />
      </div>
    </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border-b">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 mr-7 w-5 text-blue-600"
                />
                Название маршрута
              </th>
            </tr>
          </thead>
          <tbody>
            {routes.map((route, index) => (
              <tr className="flex flex-col" key={route.id}>
                <td className="flex items-center gap-3 p-4 border border-t-0">
                  <input
                    id={`item${route.id}`}
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label
                    for={`item${route.id}`}
                    className="font-medium text-gray-900 md:p-4"
                  >
                    {route.name}
                  </label>
                </td>
                <td className="sm:border-2 p-4">
                  <span className="text-gray-600">Путь маршрута:</span>
                  <div className="flex flex-col flex-wrap sm:flex-row justify-start gap-2 ps-2 mt-1">
                    {route.steps.map((step, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 w-full sm:w-auto text-gray-700 rounded-2xl px-3 py-1 text-sm"
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
