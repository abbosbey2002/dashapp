import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DocumentList from "./page/DocumentList";
import CreateDocument from "./page/CreateDocument";
import CreateRoute from "./page/CreateRoute";
import RouteList from "./page/RouteList";
import EmployeeList from "./page/EmployeeList";
import LoginModal from "./components/LoginModal";
import MobileSidebar from "./components/MobileSidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Auth holati uchun holat
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState(""); // Login input holati
  const [password, setPassword] = useState(""); // Parol input holati
  const [error, setError] = useState(""); // Xatolik holati
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowModal(true);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    // Statik foydalanuvchi ma'lumotlarini taqqoslash
    const validUsername = "User123";
    const validPassword = "6587995";
    console.log(username, password);

    if (username === validUsername && password === validPassword) {
      // Agar login va parol to'g'ri bo'lsa
      localStorage.setItem("token", "fje874bfyr834bf843t534fbhuev834gr");
      setIsAuthenticated(true);
      setShowModal(false);
      setError("");
      navigate("/");
    } else {
      setError("Неправильное логин или пароль.ароль.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="flex flex-1">
        <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <main className="flex-1 md:p-6 pt-6 bg-gray-100 overflow-scroll">
          <Routes>
            <Route path="" element={<DocumentList />} />
            <Route path="create" element={<CreateDocument />} />
            <Route path="directory" element={<RouteList />} />
            <Route path="directory/create" element={<CreateRoute />} />
            <Route path="employees" element={<EmployeeList />} />
          </Routes>
        </main>
      </div>
      {showModal && (
        <LoginModal
          username={username}
          password={password}
          onUsernameChange={setUsername}
          onPasswordChange={setPassword}
          onSubmit={handleLogin}
          error={error}
        />
      )}
    </div>
  );
}

export default App;
