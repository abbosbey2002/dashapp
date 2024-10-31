import React, { useEffect, useState } from "react";
import Editdoc from "./Editdoc";
import Comment from "./Comment";
import Postpone from "./Postpone";

const EditDocument = ({ isOpen, onClose, document }) => {

  const [document, setDocument] = useState({})

  useEffect(()=>)


  const [activeModal, setActiveModal] = useState("edit"); // Faol modalni boshqarish uchun
  const [text, setText] = useState(document?.text || ""); // EditModal uchun

  const handleEditClick = () => {
    setActiveModal("edit");
  };

  const handleComment = () => {
    setActiveModal("comment");
  };

  

  const handlePostpone = () => {
    setActiveModal("postpone");
  }

  if (activeModal === "comment") {
    return <Comment handleEditClick={handleEditClick} />;
  } else if (activeModal === "edit") {
    return <Editdoc handleComment={handleComment} handlePostpone={handlePostpone} />;
  }else if("postpone" === activeModal){
    return <Postpone handleEditClick={handleEditClick} />
  }

  return <></>;
};

export default EditDocument;
