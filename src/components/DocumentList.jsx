import React, { useState } from "react";
import FilterDocumentBar from "./FilterDocumentBar";
import CaretCircleDown from "../assets/img/CaretCircleDown.svg";
import FileText from "../assets/img/FileText.png";

function DocumentList() {
  const [documents, setDocuments] = useState([
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
  ]);

  const [filteredDocuments, setFilteredDocuments] = useState(documents);

  const handleFilterChange = (filters) => {
    console.log("Filters applied: ", filters);
    setFilteredDocuments(documents.filter((doc) => {
      return (
        (!filters.status || doc.status === filters.status) &&
        (!filters.sender || doc.sender.toLowerCase().includes(filters.sender.toLowerCase())) &&
        (!filters.recipient || doc.recipient.toLowerCase().includes(filters.recipient.toLowerCase())) &&
        (!filters.date || doc.date === filters.date)
      );
    }));
  };

  const handleSearchChange = (query) => {
    console.log("Search query: ", query);
    setFilteredDocuments(documents.filter((doc) => {
      return (
        doc.sender.toLowerCase().includes(query.toLowerCase()) ||
        doc.title.toLowerCase().includes(query.toLowerCase()) ||
        doc.recipient.toLowerCase().includes(query.toLowerCase()) ||
        doc.status.toLowerCase().includes(query.toLowerCase())
      );
    }));
  };

  const handleAddDocument = () => {
    const newDocument = {
      sender: "Новый отправитель",
      title: "Новый документ",
      recipient: "Новый получатель",
      status: "Черновик",
      date: new Date().toLocaleDateString(),
    };
    setDocuments((prev) => [...prev, newDocument]);
    setFilteredDocuments((prev) => [...prev, newDocument]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-lg">Список документов</h2>
        <button
          onClick={handleAddDocument}
          className="bg-blue-600 text-white px-4 py-2 flex items-center gap-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <img src={FileText} alt="document" /> Создать документ
        </button>
      </div>

      <FilterDocumentBar onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" />
              </th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">Отправитель</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">Название</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">На кого отправлен</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">Статус</th>
              <th className="p-3 text-left text-sm font-semibold text-gray-600">Дата</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map((doc, index) => (
              <tr key={index} className="bg-white border-b last:border-b-0 hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 text-sm text-gray-700 underline cursor-pointer">{doc.sender}</td>
                <td className="p-3 text-sm text-blue-600 hover:underline cursor-pointer">{doc.title}</td>
                <td className="p-3 text-sm flex items-center text-gray-700">
                  <img src={CaretCircleDown} alt="CaretCircleDown" className="w-4 h-4 mr-2" />
                  <span className="underline cursor-pointer">{doc.recipient}</span>
                </td>
                <td className={`p-3 text-sm font-medium ${doc.status === "В работе" ? "text-blue-600" : doc.status === "Отложено" ? "text-yellow-500" : doc.status === "Архив" ? "text-gray-500" : doc.status === "Черновик" ? "text-red-500" : ""}`}>
                  {doc.status}
                </td>
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
