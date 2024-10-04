import React from "react";
import FilterDocumentBar from "./FilterDocumentBar";
import CaretCircleDown from "../assets/img/CaretCircleDown.svg";


function DocumentList() {
  const documents = [
    {
      sender: "Иванов К.Л.",
      title: "Купить лабораторное оборудование",
      recipient: "Бухгалтерия",
      status: "В работе",
      date: "21.03.2024",
    },
    {
      sender: "Сафронов М.Н.",
      title: "Бухгалтерский баланс за III квартал",
      recipient: "Бухгалтерия",
      status: "Отложено",
      date: "12.03.2024",
    },
    {
      sender: "Иванов А.В.",
      title: "Акт сверки взаиморасчетов с контрагентами",
      recipient: "Бухгалтерия",
      status: "В работе",
      date: "07.07.2024",
    },
    {
      sender: "Петров С.И.",
      title: "Расчет налоговых обязательств за полугодие",
      recipient: "Бухгалтерия",
      status: "Черновик",
      date: "19.09.2024",
    },
    {
      sender: "Кузнецов Р.О.",
      title: "Ведомость начисления заработной платы за сентябрь",
      recipient: "Архив",
      status: "Архив",
      date: "30.12.2024",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Список документов</h2>
      <FilterDocumentBar />
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th>
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Отправитель
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Название
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                На кого отправлен
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Статус
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                Дата
              </th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td>
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-sm underline text-gray-700">{doc.sender}</td>
                <td className="p-3 text-sm hover:underline cursor-pointer">
                  {doc.title}
                </td>
                <td className="flex gap-2 p-3 text-sm text-gray-700 underline"><img src={CaretCircleDown} alt="CaretCircleDown" /> {doc.recipient}</td>
                <td className="p-3 text-sm text-gray-700">{doc.status}</td>
                <td className="p-3 text-sm text-gray-700">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentList;
