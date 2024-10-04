import React, { useState } from "react";
import removesvg from "../assets/img/remove.svg";
import PlusSquare from "../assets/img/PlusSquare.svg";
import trash from "../assets/img/Trash.svg";
import HourglassHigh from "../assets/img/HourglassHigh.svg";
import ArrowCircleLeft from "../assets/img/ArrowCircleLeft.svg";
import PlusSquareblue from "../assets/img/PlusSquareblue.png";
import VectorThreebluesmall from "../assets/img/VectorThreebluesmall.svg";
import FileUpload from "../components/FileUpload";
import TextInput from "../components/TextInput"; // TextInput componentini import qilish
import { NavLink } from "react-router-dom";

function CreateDocument() {
  const [formData, setFormData] = useState({
    sender: "",
    title: "",
    comment: "",
    step1: "",
    step2: "",
    text: "",
    priority: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="flex items-center gap-2 text-3xl font-semibold mb-6 text-[#040F1F]">
        <NavLink to="/document">
          <img src={ArrowCircleLeft} alt="" />
        </NavLink>
        Создание документа
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Sender and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            label="Кто создаёт документ"
            name="sender"
            value={formData.sender}
            onChange={handleInputChange}
            placeholder="Введите"
            className="border border-gray-400 placeholder-gray-700 rounded-lg px-4 py-2 w-full"
          />
          <TextInput
            label="Название документа"
            name="title"
            value={formData.title}
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
              <input
                type="text"
                name="step1"
                value={formData.step1}
                onChange={handleInputChange}
                placeholder="Выбрать"
                className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
              />
              <button
                className="w-[40px] h-[40px] border flex justify-center items-center rounded-lg"
                type="button"
              >
                <img src={removesvg} className="img-responsive" alt="Image" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-600 border w-[40px] h-[40px] flex justify-center items-center rounded-lg font-bold">
                02
              </span>
              <input
                type="text"
                name="step2"
                value={formData.step2}
                onChange={handleInputChange}
                placeholder="Выбрать"
                className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
              />
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
          </div>
        </div>

        {/* Text */}
        <div className="mb-4">
          <label className="block text-gray-500 font-medium mb-2">Текст</label>
          <textarea
            name="text"
            value={formData.text}
            onChange={handleInputChange}
            placeholder="Введите"
            className="border border-gray-300 outline-none rounded-lg px-4 py-2 w-full h-32"
          />
        </div>

        {/* File attachment */}
        <FileUpload />

        {/* Priority */}
        <div className="mb-4">
          <label className="block text-gray-500 font-medium mb-2">
            Приоритет документа
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleInputChange}
            className="border bg-white border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="">Выберите</option>
            <option value="Низкий">Низкий</option>
            <option value="Средний">Средний</option>
            <option value="Высокий">Высокий</option>
          </select>
        </div>

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
