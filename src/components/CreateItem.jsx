import { Navigate, NavLink, useNavigate } from "react-router-dom";
import PlusSquare from "../assets/img/PlusSquare.svg";
import { useState } from "react";
import { createDocument } from "../services/api";

function CreateItem({ text = "", to = "create", icon=PlusSquare }) {

  const navigate = useNavigate();

  const [documentId, setDocumentId] = useState(null);

    const fetchDocumentId = async () => {
      try {
        const response = await createDocument();
        console.log(response)
        navigate(`${to}/${response.document_id}`)
      } catch (error) {
        console.error("Error fetching document ID:", error);
      }
    };


  return (
    <>
      <NavLink
        onClick={fetchDocumentId}
        className="bg-blue-600 text-[15px] text-white px-4 py-3 flex items-center justify-center gap-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
      >
        <img src={icon} alt="document" /> {text}
      </NavLink>
    </>
  );
}

export default CreateItem;
