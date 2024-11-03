import React, { useEffect, useState } from "react";
import Editdoc from "./Editdoc";
import Comment from "./Comment";
import Postpone from "./Postpone";
import { getDocumentById } from "../services/api";
import Subscribe from "./subscribe/Subscribe";

const EditDocument = ({ isOpen, onClose, DocId }) => {
  const [document, setDocument] = useState({});

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doct = await getDocumentById(DocId);
        setDocument(doct);
        console.log(doct);
      } catch (error) {
        console.error("Xatolik:", error.message);
      }
    };

    fetchDocument();
  }, [DocId]);

  const [activeModal, setActiveModal] = useState("edit"); // Faol modalni boshqarish uchun
  const [text, setText] = useState(document?.content || ""); // EditModal uchun

  const handleEditClick = () => {
    setActiveModal("edit");
  };

  const handleComment = () => {
    setActiveModal("comment");
  };

  const [answerId, setanswerId] = useState();

  const handlePostpone = () => {
    setActiveModal("postpone");
  };

  const handeleSubcribe = (id = null) => {
    setanswerId(id);
    setActiveModal("subscribe");
  };

  const clothe = () => {
    setActiveModal(null);
    console.log("world");
  };

  if (activeModal === "comment") {
    return (
      <Comment
        document={document}
        handleEditClick={handleEditClick}
        clothe={clothe}
      />
    );
  } else if (activeModal === "edit") {
    return (
      <Editdoc
        handleComment={handleComment}
        document={document}
        handlePostpone={handlePostpone}
        handeleSubcribe={handeleSubcribe}
      />
    );
  } else if ("subscribe" === activeModal) {
    return (
      <Subscribe
        handleEditClick={handleEditClick}
        docId={DocId}
        answerId={answerId}
      />
    );
  } else if ("postpone" === activeModal) {
    return <Postpone handleEditClick={handleEditClick} docId={DocId} />;
  }

  return <></>;
};

export default EditDocument;
