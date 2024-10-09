import React from 'react';

import vekorright from "../assets/img/vekorright.svg";
import Vectorleft from "../assets/img/Vectorleft.svg";

function Pagination() {
  return (
    <div className="flex justify-between gap-2 items-center mt-4">
      <span className='text-[13px]'>1 из 123</span>
      <button className="bg-white border w-[30px] h-[30px] flex items-center justify-center rounded-md"><img src={Vectorleft} alt="vektor" /></button>
      <button className="bg-white border w-[30px] h-[30px] flex items-center justify-center rounded-md"><img src={vekorright} alt="vektor" /></button>
    </div>
  );
}

export default Pagination;
