import React from 'react';

function Pagination() {
  return (
    <div className="flex justify-between items-center mt-4">
      <button className="bg-gray-200 px-4 py-2 rounded-md">&lt;</button>
      <span>1 из 123</span>
      <button className="bg-gray-200 px-4 py-2 rounded-md">&gt;</button>
    </div>
  );
}

export default Pagination;
