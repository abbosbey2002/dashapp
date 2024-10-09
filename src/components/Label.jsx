import React from "react";

const Label = ({ text, htmlFor }) => {
  return (
    <label className="font-bold text-sm text-[#556476] mb-2" htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
