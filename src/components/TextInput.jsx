import React from 'react';
import PencilSimpleLine from "../assets/img/PencilSimpleLine.svg";


const TextInput = ({ label, name, value, onChange, placeholder, type = 'text' }) => {
  return (
    <div className="mb-4 relative">
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg outline-none px-4 py-2 w-full pr-10" // right padding qo'shildi
    />
      <img
        src={PencilSimpleLine}
        alt="edit"
        className="absolute right-3 top-10  text-gray-400" // ikonkani inputning o'ng tomoniga joylashtirish
      />
  </div>
  );
};

export default TextInput;
