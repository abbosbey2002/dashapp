import { NavLink } from "react-router-dom";
import PlusSquare from "../assets/img/PlusSquare.svg";

function CreateTemplateButton({ text = "", to = "create", icon=PlusSquare }) {
  return (
    <>
      <NavLink
        to={to}
        className="bg-blue-600 text-[15px] text-white px-4 py-3 flex items-center justify-center gap-2 font-bold rounded-lg hover:bg-blue-700 transition-colors"
      >
        <img src={icon} alt="document" /> {text}
      </NavLink>
    </>
  );
}

export default CreateTemplateButton;