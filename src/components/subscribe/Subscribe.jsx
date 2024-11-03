import React, { useState } from "react";
import Label from "../Label";
import Buttoncom from "../Buttoncom";
import TextInput from "../TextInput";
import FileUpload from "../FileUpload";
import { comment } from "postcss";
import { updateDocumentAnswer } from "../../services/api";

const Subscribe = ({ handleEditClick, docId, answerId }) => {

  const answers = [
    {
      id: 1,
      name: "согласован",
    },
    {
      id: 2,
      name: "подписан",
    },
    {
      id: 3,
      name: "исполнил",
    },
    {
      id: 4,
      name: "отложил",
    },
    {
      id: 5,
      name: "отклонён",
    },
  ];

  const getAnswerById = (id) => {
    return answers.find(answer => answer.id === id);
  };
  
  // Masalan, id = 3 bo'lgan elementni olish
  const answer = getAnswerById(answerId);

  const [error, setError] = useState("");

  const [data, setData] = useState({
    answer_id: answerId,
    comment: "",
  });
  console.log("doc id", docId);
  const commentChange = (e) => {
    setData({
      ...data,
      comment: e.target.value,
    });
  };

  const sendform = async () => {
    let res = await updateDocumentAnswer(docId, data);
    console.log("response ", res);

    if (res.status === "error") {
      setError(res.error);
    } else {
      console.log(res);
      handleEditClick();
    }
  };

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
            value={data.comment}
            onChange={commentChange}
          ></textarea>
        </div>
        <div className="mt-4">
          <Buttoncom
            onClick={sendform}
            variant="primary"
            className={"w-full"}
            text={`${answer.name} документа`}
          />
          <p className="text-red-500 m-2 text-center">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
