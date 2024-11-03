import React, { useState } from "react";
import Label from "./Label";
import Buttoncom from "./Buttoncom";
import TextInput from "./TextInput";
import FileUpload from "./FileUpload";
import { updateDocumentAnswer } from "../services/api";

const Postpone = ({ handleEditClick, docId }) => {
  console.log(docId);
  const uploadFile = () => {};

  const [data, setData] = useState({
    answer_id: 4,
    comment: "string",
    defer_date: "2024-08-02",
  });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [error, setError] = useState('')

  const delayDocument = async () => {
    let res = await updateDocumentAnswer(docId, data);
    console.log(res);
    if(res.status === 'error'){
      setError(res.error);
    }else{
      handleEditClick()
    }
  };

  return (
    <div className="fixed inset-0 overflow-auto py-3  bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max:h-full overflow-auto md:w-[600px]">
        {/* data */}

        <div className="flex flex-col md:flex-row gap-3">
          <TextInput
            text="20.03.2024"
            name="defer_date"
            onChange={handleChange}
            value={data.defer_date}
            type="date"
            icon="none"
            label="Date"
          />
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
            value={data.comment}
            onChange={handleChange}
            id=""
          ></textarea>
        </div>
        <FileUpload />
        <div className="mt-4 flex flex-col gap-2">
          <Buttoncom
            onClick={delayDocument}
            variant="primary"
            className={"w-full"}
            text={"Отложить документ"}
          />

          <Buttoncom
            onClick={handleEditClick}
            variant="white"
            className={"w-full"}
            text={"назад"}
          />
          <p className="text-red-500 text-center">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Postpone;
