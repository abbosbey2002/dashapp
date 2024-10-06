import React, { useState } from "react";
import CreateItem from "../components/CreateItem";
import FilterDocumentBar from "../components/FilterDocumentBar";

const EmployeeList = () => {
  // Example data for employees
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
      name: "Сафронов М.Н.",
      email: "safronov@doc.ru",
      position: "Хирург",
    },
    {
      id: 4,
      name: "Сафронов М.Н.",
      email: "safronov@doc.ru",
      position: "Хирург",
    },
    {
      id: 5,
      name: "Сафронов М.Н.",
      email: "safronov@doc.ru",
      position: "Хирург",
    },
  ];

  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Handle selecting an employee
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
              <th className="px-4 py-2 border-b">ФИО</th>
              <th className="px-4 py-2 border-b">Почта</th>
              <th className="px-4 py-2 border-b">Должность</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className="bg-white border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-sm text-gray-700 underline cursor-pointer">
                  {employee.name}
                </td>
                <td className="p-3 text-sm text-blue-600 hover:underline cursor-pointer">
                  {employee.email}
                </td>
                <td className="p-3 text-sm flex items-center text-gray-700">
                  <span className="underline cursor-pointer">
                    {employee.position}
                  </span>
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
