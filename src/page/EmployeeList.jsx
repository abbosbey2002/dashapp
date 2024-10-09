import React, { useState } from "react";
import CreateItem from "../components/CreateItem";
import FilterDocumentBar from "../components/FilterDocumentBar";
import Listaction from "../components/Listaction";
import Buttonsmall from "../components/Buttonsmall";
import Pagination from "../components/Pagination";
import PencilSimpleLinedark from "../assets/img/PencilSimpleLinedark.svg";
import remove from "../assets/img/remove.svg";



const EmployeeList = () => {
  // Xodimlar uchun namunaviy ma'lumotlar
  const employees = [
    {
      id: 1,
      name: "Иванов К.Л.",
      email: "Ivanov@doc.ru",
      position: "Нейрохирург",
    },
    {
      id: 2,
      name: "Сафронов М.Н.",
      email: "safronov@doc.ru",
      position: "Хирург",
    },
    {
      id: 3,
      name: "Петров А.В.",
      email: "petrov@doc.ru",
      position: "Терапевт",
    },
    {
      id: 4,
      name: "Кузнецов Р.О.",
      email: "kuznetsov@doc.ru",
      position: "Кардиолог",
    },
    {
      id: 5,
      name: "Сидоров И.П.",
      email: "sidorov@doc.ru",
      position: "Офтальмолог",
    },
  ];

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Xodimni tanlash yoki tanlamaslikni boshqarish
  const toggleEmployeeSelection = (id) => {
    if (selectedEmployees.includes(id)) {
      setSelectedEmployees(
        selectedEmployees.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedEmployees([...selectedEmployees, id]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center mb-4">
        <h2 className="font-semibold text-[#040F1F] text-2xl  md:text-3xl">
          Список сотрудников
        </h2>
        {/* <CreateItem text="Добавить сотрудника" to="Create" /> */}
      </div>

      <FilterDocumentBar />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Buttonsmall icon={remove} text={"Удалить"} />
        </div>
        <Pagination />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" className="h-5  w-5" />
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                ФИО
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Почта
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Должность
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={employee.id}
                className="bg-white border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3">
                  <input
                  className="h-5 w-5"
                    type="checkbox"
                    checked={selectedEmployees.includes(employee.id)}
                    onChange={() => toggleEmployeeSelection(employee.id)}
                  />
                </td>
                <td className="p-3 text-sm text-gray-700 underline cursor-pointer">
                  {employee.name}
                </td>
                <td className="p-3 text-sm text-gray-700 hover:underline cursor-pointer">
                  {employee.email}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {employee.position}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
