import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FiMenu from "../assets/img/menu.svg";
import fix from "../assets/img/fix.svg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger icon for mobile view */}
      <button className="text-3xl p-2 md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <img src={fix} alt="close" />
        ) : (
          <img src={FiMenu} alt="menu" />
        )}
      </button>

      {/* Sidebar (desktop and mobile version) */}
      <aside
        className={`fixed inset-0 bg-white z-50 p-4 transition-transform transform md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-64 md:border-r md:block md:p-4`}
      >
        {/* Close button for mobile version */}
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-lg font-bold">Меню</h2>
          <button className="text-2xl" onClick={toggleMenu}>
            <img src={fix} alt="close" />
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          <li>
            <button
              onClick={toggleMenu}
              className="flex items-center justify-between w-full text-left bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span>Документы</span>
              </span>
            </button>

            {isOpen && (
              <ul className="pl-6 mt-2 space-y-2 list-disc">
                <li>
                  <NavLink
                    to="/all"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Все <span className="text-red-500">(15)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/in-work"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    В работе
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/postponed"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Отложенные
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/completed"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Завершенные
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/drafts"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Черновики
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/attention-required"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Требуют внимания
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/processing-required"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Требуют обработки
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/processed"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : "text-gray-600"
                    }
                  >
                    Обработанные
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="mt-8">Сотрудники</li>
          <li>Маршруты</li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
