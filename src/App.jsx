import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DocumentList from "./components/DocumentList";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Navbar  isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="flex flex-1">
        <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <main className="flex-1 p-6 bg-gray-100 overflow-scroll">
        <Routes>
            <Route path="/" element={<DocumentList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
