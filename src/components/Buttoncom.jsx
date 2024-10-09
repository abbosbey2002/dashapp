import React from "react";

const Buttoncom = ({
  text,
  onClick,
  icon,
  type = "button",
  variant = "white",
  className = "",
}) => {
  const baseStyles =
    "px-4 py-2 flex content-center justify-center items-center gap-2 rounded-lg font-bold text-sm transition-all duration-300 focus:outline-none";
  const variants = {
    border: "border border-[#C4C9D0] text-[#233357]",
    white: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-300",
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
    borderblue: "border border-blue-500 ",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  );
};

export default Buttoncom;
