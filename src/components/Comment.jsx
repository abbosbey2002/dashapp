import React from "react";
import Buttoncom from "./Buttoncom";
import { NavLink } from "react-router-dom";
import Label from "./Label";

const Comment = ({ handleEditClick }) => {
  return (
    <div className="fixed inset-0 overflow-auto py-3  bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max:h-full overflow-auto md:w-[600px]">
        <div className="flex flex-col gap-2">
            <Label text={"Комментарий"} />
          <textarea
            rows={12}
            name="comment"
            className="outline-none rounded-md p-3 border"
            placeholder="Введите"
            id=""
          ></textarea>
        </div>
        <div className="mt-4">
          <Buttoncom
            onClick={handleEditClick}
            variant="primary"
            className={"w-full"}
            text={"Оставить комментарий"}
          />
        </div>
      </div>
    </div>
  );
};

export default Comment;
