import React, { useEffect, useState } from "react";
import FilterDocumentBar from "../components/FilterDocumentBar";
import CaretCircleDown from "../assets/img/CaretCircleDown.svg";
import FileText from "../assets/img/FileText.png";
import { NavLink, Outlet } from "react-router-dom";
import CreateItem from "../components/CreateItem";
import Pagination from "../components/Pagination";
import Buttonsmall from "../components/Buttonsmall";
import EditDocument from "../components/EditDocument";
import Suspend from "../components/action/Suspend";
import Listaction from "../components/Listaction";
import { getDocumentList, getUserByid } from "../services/api";
import { format } from "date-fns";
import UserTableItem from "../components/UserTableItem";
import SingleDepartament from "../components/SingleDepartament";

function Processing() {
  const [documents, setDocuments] = useState([]);

  const getdocuments = async () => {
    let data = {
      status_id: 4,
    };
    console.log(data, "data");
    let response = await getDocumentList(data);

    setDocuments(response);
    setFilteredDocuments(response);
    console.log("list doc  = ", response);
    return response;
  };

  useEffect(() => {
    getdocuments();
  }, []);

  const formatDate = (date) => {
    return format(new Date(date), "dd MMMM yyyy");
  };

  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFilterChange = (filters) => {
    console;
    setFilteredDocuments(
      documents.filter((doc) => {
        return (
          (!filters.status || doc.status === filters.status) &&
          (!filters.sender ||
            doc.sender.toLowerCase().includes(filters.sender.toLowerCase())) &&
          (!filters.recipient ||
            doc.recipient
              .toLowerCase()
              .includes(filters.recipient.toLowerCase())) &&
          (!filters.date || doc.date === filters.date)
        );
      })
    );
  };

  const handleSearchChange = (query) => {
    setFilteredDocuments(
      documents.filter((doc) => {
        return doc.name.toLowerCase().includes(query.toLowerCase());
      })
    );
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

  // edit open
  const handleDocumentClick = (doc) => {
    setSelectedDocument(doc);
    setModalOpen(true);
  };

  const [isPostponeModalOpen, setPostponeModalOpen] = useState(false);

  const openPostponeModal = () => setPostponeModalOpen(true);
  const closePostponeModal = () => setPostponeModalOpen(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center mb-4">
        <h2 className="font-semibold text-[#040F1F] text-2xl  md:text-3xl">
          Список документов
        </h2>
        <CreateItem text="Создать документ" to="Create" icon={FileText} />
      </div>

      <FilterDocumentBar
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
      />

      <Listaction />

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-50">
            <tr className="bg-gray-100">
              <th className="p-3 text-left text-sm font-semibold text-gray-600">
                <input type="checkbox" className="h-5  w-5" />
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
            {filteredDocuments.map((doc, index) => (
              <tr
                key={index}
                className="bg-white border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3">
                  <input type="checkbox" className="h-5  w-5" />
                </td>
                <td className="p-3 text-sm text-gray-700 underline cursor-pointer">
                  <UserTableItem userId={doc.from_user_id} />
                </td>
                <td
                  onClick={() => handleDocumentClick(doc)}
                  className="p-3 text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  {doc.name}
                </td>
                <td className="p-3 text-sm flex items-center text-gray-700">
                  <img
                    src={CaretCircleDown}
                    alt="CaretCircleDown"
                    className="w-4 h-4 mr-2"
                  />
                  <span className="underline cursor-pointer">
                    <SingleDepartament departamentId={doc.to_departament_id} />
                  </span>
                </td>
                <td
                  className={`p-3 text-sm font-medium ${
                    doc.status_id === "В работе"
                      ? "text-blue-600"
                      : doc.status_id === "Отложено"
                      ? "text-yellow-500"
                      : doc.status_id === "Архив"
                      ? "text-gray-500"
                      : doc.status_id === "Черновик"
                      ? "text-red-500"
                      : ""
                  }`}
                >
                  {doc.status_id}
                </td>
                <td className="p-3 text-sm text-gray-700">
                  {formatDate(doc.date_create)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedDocument && (
        <EditDocument
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          DocId={selectedDocument.document_id}
          openPostponeModal={openPostponeModal}
        />
      )}

      <Suspend isOpen={isPostponeModalOpen} />
    </div>
  );
}

export default Processing;
