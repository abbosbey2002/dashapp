import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// SVG rasmlar importi
import FiMenu from "../assets/img/menu.svg";
import fix from "../assets/img/fix.svg";
// import docIcon from "../assets/img/documents.svg";
// import employeesIcon from "../assets/img/employees.svg";
// import routesIcon from "../assets/img/routes.svg";

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger icon for opening the menu */}
      <button className="text-3xl p-2" onClick={toggleMenu}>
        {isOpen ? (
          <img src={fix} alt="close" />
        ) : (
          <img src={FiMenu} alt="menu" />
        )}
      </button>

      {/* Sidebar for mobile view */}
      <div
        className={`fixed inset-0 bg-white z-50 p-6 transition-transform translate-y-20 transform ${
          isOpen ? "translate-x-25" : "-translate-x-full"
        }`}
      >

        <nav className="mt-4 space-y-4">
          {/* Documents dropdown */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-blue-600 font-bold">
              {/* <img src={docIcon} alt="Documents" className="w-5 h-5" /> */}
              <span>Документы</span>
            </div>

            <NavLink
              to="/all"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold flex justify-between items-center"
                  : "text-gray-600 flex justify-between items-center"
              }
              onClick={toggleMenu}
            >
              Все <span className="text-red-500">(15)</span>
            </NavLink>

            <NavLink
              to="/in-work"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              В работе
            </NavLink>

            <NavLink
              to="/postponed"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              Отложенные
            </NavLink>

            <NavLink
              to="/completed"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              Завершенные
            </NavLink>

            <NavLink
              to="/drafts"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              Черновики
            </NavLink>

            <NavLink
              to="/attention-required"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              Требуют внимания
            </NavLink>

            <NavLink
              to="/processing-required"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : "text-gray-600"
              }
              onClick={toggleMenu}
            >
              Требуют обработки
            </NavLink>

            <NavLink
              to="/processed"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-bold flex justify-between items-center"
                  : "text-gray-600 flex justify-between items-center"
              }
              onClick={toggleMenu}
            >
              Обработанные <span className="text-red-500">(5)</span>
            </NavLink>
          </div>

          <hr className="my-4" />

          {/* Additional links */}
          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold flex items-center space-x-2"
                : "text-gray-600 flex items-center space-x-2"
            }
            onClick={toggleMenu}
          >
            {/* <img src={employeesIcon} alt="Employees" className="w-5 h-5" /> */}
            <span>Сотрудники</span>
          </NavLink>

          <NavLink
            to="/routes"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold flex items-center space-x-2"
                : "text-gray-600 flex items-center space-x-2"
            }
            onClick={toggleMenu}
          >
            {/* <img src={routesIcon} alt="Routes" className="w-5 h-5" /> */}
            <span>Маршруты</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default MobileSidebar;
