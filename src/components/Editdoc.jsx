import React from "react";
import Buttoncom from "./Buttoncom";
import { NavLink } from "react-router-dom";
import FileArrowDown from "../assets/img/FileArrowDown.svg";
import PencilSimpleLine from "../assets/img/PencilSimpleLine.svg";
import FileText from "../assets/img/FileText.png";

const Editdoc = ({
  handleComment,
  handlePostpone,
  document,
  handeleSubcribe,
}) => {
  return (
    <div className="fixed inset-0 overflow-auto py-3 h-200px  bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6  rounded-lg shadow-lg w-[90%] overflow-scroll md:w-[600px]">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-2xl text-[#040F1F] font-semibold">
            № 15 {document.title}
          </h2>
        </div>
        <p className="text-lg font-normal text-gray-600 mb-4">
          {document.date}
        </p>

        <label className="block text-sm font-medium text-gray-700">
          Текст
          <textarea
            placeholder="Какой-то текст"
            className="mt-1 block w-full p-2 rounded-md border-gray-300 border outline-none shadow-sm  focus:ring-indigo-500 sm:text-sm"
            rows="3"
            value={document.content}
          />
        </label>

        <button className="my-4 text-sm text-[#2F80ED] flex gap-1 font-semibold">
          <img src={PencilSimpleLine} alt="edit" /> Редактировать
        </button>

        <div>
          <p className="text-[13px] font-bold text-[#556476]">
            Статус маршрута
          </p>
          <div className="flex flex-col gap-2 mt-3">
            <div className="border border-dashed p-2 rounded-sm flex gap-2">
              <div className="border w-10 h-10 rounded-full flex items-center text-[#2F80ED] text-sm font-bold justify-center">
                01
              </div>
              <div>
                <p className="font-extralight text-sm">Отправил:</p>
                <p className="font-semibold text-sm">
                  Иванов Иван Иванович 21.03.2024
                </p>
              </div>
            </div>
            <div className="border border-dashed p-2 rounded-sm  gap-2">
              <p className="font-extralight flex text-sm">Комментарий:</p>
              <p className="font-semibold text-sm">Какой-то текст</p>
            </div>
          </div>
        </div>

        <div className="my-3">
          <p className="text-[13px] font-bold text-[#556476]">
            Прикрепленный документ
          </p>

          <NavLink className="my-4 text-sm text-[#2F80ED] flex gap-1 font-semibold">
            <img src={FileArrowDown} alt="Скачать документ" /> Скачать документ{" "}
            {""}
          </NavLink>

          <div className="border border-dashed p-2 rounded-sm flex text-sm bg-gray-100 gap-2">
            Заявка на закупку.docx
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <Buttoncom
            icon={FileText}
            variant="primary"
            className={"w-full"}
            text={"Подписать"}
            onClick={() => handeleSubcribe(2)}
          />
          <Buttoncom
            variant="primary"
            className={"w-full"}
            text={"Соглосовать"}
            onClick={() => handeleSubcribe(1)}
          />
          <Buttoncom
            variant=""
            className={
              "w-full border-2 border-blue-600 text-blue-600 font-medium"
            }
            text={"исполнение"}
            onClick={() => handeleSubcribe(3)}
          />
          <Buttoncom
            variant=""
            className={
              "w-full border-2 border-blue-600 text-blue-600 font-medium"
            }
            text={"отклонение"}
            onClick={() => handeleSubcribe(5)}
          />
          <div className="flex flex-col md:flex-row gap-2">
            <Buttoncom
              variant=""
              onClick={handlePostpone}
              className="w-full border-2 cursor-pointer font-medium"
              text={"Отложить до"}
            />
            <Buttoncom
              variant=""
              onClick={handleComment}
              className="w-full border-2 font-medium"
              text={"Комментарий"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editdoc;
