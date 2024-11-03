import React, { useEffect, useState } from "react";
import removesvg from "../assets/img/remove.svg";
import PlusSquare from "../assets/img/PlusSquare.svg";
import trash from "../assets/img/Trash.svg";
import HourglassHigh from "../assets/img/HourglassHigh.svg";
import ArrowCircleLeft from "../assets/img/ArrowCircleLeft.svg";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import VectorThreebluesmall from "../assets/img/VectorThreebluesmall.svg";
import FileUpload from "../components/FileUpload";
import TextInput from "../components/TextInput"; // TextInput componentini import qilish
import { NavLink, useParams } from "react-router-dom";

import CaretCircleDown from "../assets/img/CaretCircleDown.svg";
import UploadFile from "../components/UploadFile";
import {
  applyTemplateToDocument,
  getDocumentById,
  getTemplates,
  updateDocument,
} from "../services/api";
import SingleDepartament from "../components/SingleDepartament";

function CreateDocument() {
  const { id } = useParams();

  const [document, setDocument] = useState();
  const [templates, setTemplates] = useState([]);

  const [ways, setWays] = useState([]);

  const getdocument = async () => {
    let res = await getDocumentById(id);
    
    setDocument(res);
    setWays(res.way);

    setFormData((prevState) => ({
      ...prevState,
      name: res.name,
      comment: res.comment,
      content: res.content,
    }));
  };

  const geTemplates = async () => {
    let temp = await getTemplates();
    setTemplates(temp);
  };

  useEffect(() => {
    geTemplates();
    getdocument();
    console.log("templates =", document);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    comment: "",
    content: "",
    priority_id: 2,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updateDocument(id, formData);

    console.log("Form data submitted:", res);
  };

  let templatesOpen = true;

  const choosethemplate = async (template) => {
    const res = await applyTemplateToDocument(id, template);
    console.log(res);
  };

  const clothethemplate = () => {};

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="flex items-center gap-2 text-2xl md:text-3xl  font-semibold mb-6 text-[#040F1F]">
        <NavLink to="/">
          <img src={ArrowCircleLeft} alt="" />
        </NavLink>
        Создание документа
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Sender and Title */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
          <TextInput
            label="Название документа"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Введите"
            className="border border-gray-300 placeholder-gray-700 rounded-lg px-4 py-2 w-full"
          />
        </div>

        {/* Comment */}
        <TextInput
          label="Комментарий"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          placeholder="Введите"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full"
        />

        {/* Steps */}
        <div className="mb-4">
          <label className="block text-gray-500 font-extralight mb-2">
            Маршрут документа для согласования или подписи
          </label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 border w-[40px] h-[40px] flex justify-center items-center rounded-lg font-bold">
                01
              </span>
              <div className="border flex content-center gap-2 border-gray-300 rounded-lg px-4 py-3 flex-1">
                <img src={CaretCircleDown} alt="" />
                <span className="font-medium text-sm text-[#233357]">
                  Выбрать
                </span>
              </div>
              <button
                className="w-[40px] h-[40px] border flex justify-center items-center rounded-lg"
                type="button"
              >
                <img src={removesvg} className="img-responsive" alt="Image" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <button
              type="button"
              className="text-blue-600 flex items-center space-x-1"
            >
              <img src={PlusSquareblue} alt="" /> <span>Добавить этап</span>
            </button>
            <button
              type="button"
              className="text-blue-600 flex items-center space-x-1"
            >
              <img src={VectorThreebluesmall} alt="" />{" "}
              <span>Выбрать шаблон</span>
            </button>
            <button
              type="button"
              className="text-blue-600 flex relative items-center space-x-1"
              onClick={choosethemplate}
            >
              <img src={VectorThreebluesmall} alt="Icon" />{" "}
              <span>Выбрать шаблон</span>
              {templatesOpen && (
                <div className="absolute border rounded-md shadow-md -translate-x-9 sm:-translate-x-0 p-2 w-64 bg-white text-base text-[#233357] font-medium -bottom-2 translate-y-full">
                  {templates.map((template) => (
                    <div
                      key={template.id}
                      onClick={() => choosethemplate(template.id)}
                      className="rounded-md hover:bg-blue-100 px-3 transition-all transition-transform py-2"
                    >
                      {template.name}
                    </div>
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
        {ways.length > 0 && (
          <div className="mb-4">
            <label className="block text-gray-500 font-extralight mb-2">
              Маршрут шаблон
            </label>
            <div className="space-y-2">
              {ways.map((template, index) => (
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600 border w-[40px] h-[40px] flex justify-center items-center rounded-lg font-bold">
                  {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="border flex content-center gap-2 border-gray-300 rounded-lg px-4 py-3 flex-1">
                    <img src={CaretCircleDown} alt="" />
                    <span className="font-medium text-sm text-[#233357]">
                      <SingleDepartament departamentId={template.to_departament_id} />
                    </span>
                  </div>
                  <button
                    className="w-[40px] h-[40px] border flex justify-center items-center rounded-lg"
                    type="button"
                  >
                    <img
                      src={removesvg}
                      className="img-responsive"
                      alt="Image"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Text */}
        <div className="mb-4">
          <label className="block text-gray-500 font-medium mb-2">Текст</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Введите содержание"
            className="border border-gray-300 outline-none rounded-lg px-4 py-2 w-full h-32"
          />
        </div>

        {/* File attachment */}
        <FileUpload />

        {/* Priority */}
        <UploadFile
          handleInputChange={handleInputChange}
          value={formData.priority}
        />

        {/* Buttons */}
        <div className="flex flex-col md:flex-row-reverse gap-3 space-y-2 md:space-y-0 md:space-x-2">
          <button
            type="submit"
            className="bg-blue-500 flex items-center gap-1 text-white px-4 py-2 rounded-md w-full md:w-auto hover:bg-blue-700 transition"
          >
            <img src={PlusSquare} alt="" />
            <span className="text-white">Создать</span>
          </button>
          <button
            type="button"
            className="border-2 flex items-center gap-1 border-blue-500 border-spacing-4  px-4 py-2 rounded-lg w-full md:w-auto transition"
          >
            <img src={trash} alt="" />
            <span className="text-blue-950">Удалить</span>
          </button>
          <button
            type="button"
            className="flex items-center gap-1 border-2 border-blue-500 bg-white px-4 py-2 rounded-lg w-full md:w-auto transition"
          >
            <img src={HourglassHigh} alt="" />
            <span className="text-blue-950">Отложить</span>
          </button>
          <button
            type="button"
            className="bg-white text-gray-900 border-2 border-blue-500 px-4 py-2 rounded-lg w-full md:w-auto transition"
          >
            В черновик
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateDocument;
