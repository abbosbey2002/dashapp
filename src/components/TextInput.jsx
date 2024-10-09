import React from "react";
import PencilSimpleLine from "../assets/img/PencilSimpleLine.svg";
import Label from "./Label";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  icon = PencilSimpleLine,
  type = "text",
}) => {
  return (
    <div className="mb-4 w-full">
      <Label text={label} />
      <div className="flex border border-gray-300 p-3 max-h-10 text-sm rounded-md">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="outline-none w-full" // right padding qo'shildi
        />
        {icon !== "none" && (
          <img
            src={icon}
            alt="edit"
            className="text-gray-400" // ikonkani inputning o'ng tomoniga joylashtirish
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
