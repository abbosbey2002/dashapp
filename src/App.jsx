import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DocumentList from "./page/DocumentList";
import CreateDocument from "./page/CreateDocument";
import CreateRoute from "./page/CreateRoute";
import RouteList from "./page/RouteList";
import EmployeeList from "./page/EmployeeList";
import LoginModal from "./components/LoginModal";
import MobileSidebar from "./components/MobileSidebar";
import { login as apiLogin } from "./services/api";

import {createDocument} from "./services/api";
import {getUserInfo} from "./services/api"

import { ToastContainer } from 'react-toastify';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [user, SetUser] = useState({});


useEffect(() => {
    const fetchUserInfo = async () => {
        try {
            const savedToken = localStorage.getItem('token');

            if (savedToken && savedToken.length > 5) {
                setToken(savedToken);

                const user = await getUserInfo();
                SetUser(user);
                setShowModal(false);

            } else {
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error fetching user info:', error);
            setShowModal(true);
        }
    };

    fetchUserInfo();

}, []);


  const handleLogin = async () => {
    try {
      const data = await apiLogin(login, password);
      setToken(data.token);
      SetUser(data.user);
      localStorage.setItem("token", data.token);
      setShowModal(false);
      setError("");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
       <ToastContainer />
      <Navbar isOpen={isOpen} user={user} toggleMenu={toggleMenu} />
      <div className="flex flex-1">
        <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <MobileSidebar isOpen={isOpen} toggleMenu={toggleMenu} />
        <main className="flex-1 md:p-6 pt-6 bg-gray-100 overflow-y-scroll max-h-[93vh]">
          <Routes>
            <Route
              path="/"
              element={<DocumentList />}
             
            />
            <Route
              path="create"
              element={<CreateDocument />}
            />
            <Route
              path="directory"
              element={<RouteList />}
            />
            <Route
              path="directory/create"
              element={<CreateRoute />}

            />
            <Route
              path="employees"
              element={<EmployeeList />}
            />
          </Routes>
        </main>
      </div>
      {showModal && (
        <LoginModal
          username={login}
          password={password}
          setLogin={setLogin}
          setPassword={setPassword}
          onSubmit={handleLogin}
          error={error}
        />
      )}
    </div>
  );
};

export default App;
