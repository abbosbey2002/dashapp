import React, { useState } from "react";
import Label from "./Label";
import Buttoncom from "./Buttoncom";
import TextInput from "./TextInput";
import FileUpload from "./FileUpload";

const Postpone = ({ handleEditClick }) => {
  const uploadFile = () => {};

  return (
    <div className="fixed inset-0 overflow-auto py-3  bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max:h-full overflow-auto md:w-[600px]">
        {/* data */}

        <div className="flex flex-col md:flex-row gap-3">
          <TextInput text="20.03.2024" type="date" icon="none" label="Date" />
          <TextInput text="20.03.2024" type="time" icon="none" label="Date" />
        </div>

        {/* data */}
        <div className="flex flex-col gap-2 my-3">
          <div>
            <Label text={"Комментарий"} /> <span>(Необязательно)</span>
          </div>
          <textarea
            rows={12}
            name="comment"
            className="outline-none rounded-md p-3 border"
            placeholder="Введите"
            id=""
          ></textarea>
        </div>
        <FileUpload />
        <div className="mt-4 flex flex-col gap-2">
          <Buttoncom
            onClick={handleEditClick}
            variant="primary"
            className={"w-full"}
            text={"Отложить документ"}
          />

          <Buttoncom
            onClick={handleEditClick}
            variant="borderblue"
            className={"w-full"}
            text={"Отложить документ"}
          />

          <div className="mt-1 flex flex-col md:flex-row gap-2">
          <Buttoncom
            onClick={handleEditClick}
            variant="border"
            className={"w-full"}
            text={"Отложить документ"}
          />
          <Buttoncom
            onClick={handleEditClick}
            variant="border"
            className={"w-full"}
            text={"Отложить документ"}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpone;