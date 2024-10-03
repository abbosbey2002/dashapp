import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DocumentList from "./components/DocumentList";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
        <Routes>
            <Route path="/" element={<DocumentList />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
