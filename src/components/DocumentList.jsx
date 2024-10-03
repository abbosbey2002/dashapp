import React from 'react';

function DocumentList() {
  const documents = [
    { sender: "Иванов К.Л.", title: "Купить лабораторное оборудование", recipient: "Бухгалтерия", status: "В работе", date: "21.03.2024" },
    { sender: "Сафронов М.Н.", title: "Бухгалтерский баланс за III квартал", recipient: "Бухгалтерия", status: "Отложено", date: "12.03.2024" },
    // Boshqa hujjatlarni ham qo'shing
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Список документов</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Создать документ</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-2">Отправитель</th>
              <th className="p-2">Название</th>
              <th className="p-2">На кого отправлен</th>
              <th className="p-2">Статус</th>
              <th className="p-2">Дата</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="text-gray-800 border-b">
                <td className="p-2">{doc.sender}</td>
                <td className="p-2">{doc.title}</td>
                <td className="p-2">{doc.recipient}</td>
                <td className="p-2">{doc.status}</td>
                <td className="p-2">{doc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentList;
