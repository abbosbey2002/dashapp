import React, { useEffect, useState } from "react";
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
import { deleteTemplate, getTemplates } from "../services/api";
import Way from "../components/Way";

const RouteList = () => {

  const [templates, setTemplates] = useState([]);

  const loadTeps = async () =>{
    let templs = await getTemplates();
    let reversedTempls = templs.reverse(); 
    setTemplates(reversedTempls);
  } 

  useEffect(()=>{
    loadTeps()
  },[])

  const [selectedTemplates, setSelectedTemplates] = useState([])

  const toggleTemplateSelection = (id) => {

    if (selectedTemplates.includes(id)) {
      setSelectedTemplates(
        selectedTemplates.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedTemplates([...selectedTemplates, id]);
    }
   
  };

  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      // Agar hammasi tanlangan bo'lsa, hammasini olib tashlaymiz
      setSelectedTemplates([]);
    } else {
      // Agar tanlanmagan bo'lsa, barcha xodimlarni qo'shamiz
      setSelectedTemplates(templates.map(item => item.id));
    }
    setSelectAll(!selectAll); // Hammasini belgilash state'ini yangilash
  };

  const removeThemplates = async () => {
    selectedTemplates.map((value, index, array) => {
      deleteTemplate(value);
    })
    
  }

  return (
    <div className="bg-white rounded-lg shadow-md sm:p-6">
      <div className="flex flex-col md:flex-row justify-between  gap-3 md:items-center px-4 sm:px-0 mb-4">
        <h2 className="font-semibold mt-3 text-2xl">Список маршрутов</h2>
        <CreateItem text="Создать маршрута" to="Create" />
      </div>
    <div className="px-4 md:px-0">
      <FilterDocumentBar  />
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Buttonsmall icon={PencilSimpleLinedark} text={"Редактировать"} />
          <Buttonsmall icon={remove} onClick={removeThemplates} text="Удалить" />
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
                  onChange={toggleSelectAll}
                  checked={selectAll}
                  className="form-checkbox h-5 mr-7 w-5 text-blue-600"
                />
                Название маршрута
              </th>
            </tr>
          </thead>
          <tbody>
            {templates.map((template, index) => (
              <tr className="flex flex-col" key={template.id}>
                <td className="flex items-center gap-3 p-4 border border-t-0">
                  <input
                    id={`item${template.id}`}
                    type="checkbox"
                    onChange={() => toggleTemplateSelection(template.id)}
                    checked={selectedTemplates.includes(template.id)}
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                  <label
                    for={`item${template.id}`}
                    className="font-medium text-gray-900 md:p-4"
                  >
                    {template.name}
                  </label>
                </td>
                <Way id={template.id} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RouteList;
