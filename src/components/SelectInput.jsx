// SelectInput.js
import React from "react";
import Label from "./Label";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
}) => {
  return (
    <div className="md-4">
      <Label text={label} />
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border bg-white border-gray-300 text-[#0C1116] rounded-lg text-sm max-h-10 outline-none p-3 w-full"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
