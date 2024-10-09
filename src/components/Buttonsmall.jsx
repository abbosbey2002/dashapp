import React from 'react';

const Buttonsmall = ({ text, onClick, type = 'button', icon, variant = 'white', className = '' }) => {

  const baseStyles = 'px-4 py-2 rounded flex gap-1 text-[13px] transition-all duration-300 focus:outline-none';
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
      {icon && <img src={icon} alt='icon' />}
      <span className='hidden md:inline-block'> {text}</span>
     
    </button>
  );
};

export default Buttonsmall;
