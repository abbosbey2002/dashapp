import React from 'react';

const Buttoncom = ({ text, onClick, type = 'button', variant = 'white', className = '' }) => {

  const baseStyles = 'px-4 py-2 rounded font-bold transition-all duration-300 focus:outline-none';
  const variants = {
    white : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-300',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };  

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttoncom;
