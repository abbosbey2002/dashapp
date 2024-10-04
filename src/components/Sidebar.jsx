import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FiMenu from "../assets/img/menu.svg";
import fix from "../assets/img/fix.svg";
import FileText from "../assets/img/FileText.png";
import IdentificationBadge from "../assets/img/IdentificationBadge.svg";
import VectorThree from "../assets/img/VectorThree.svg";

function Sidebar({ isOpen, toggleMenu }) {
  const [isDocuemntOpen, setIsDocumentOpen] = useState(false);

  const toggleDocument = () => {
    setIsDocumentOpen(!isDocuemntOpen);
  };

  return (
    <div>
      <aside
        className={`fixed inset-0 md:translate-y-0 translate-y-20 bg-white z-50 p-4 transition-transform transform md:static md:translate-x-0 ${
          isOpen ? "translate-x-0 w-2/3" : "-translate-x-full"
        } md:w-64 md:border-r md:block md:p-4`}
      >
        <ul className="mt-4 space-y-4">
          <li>
            <button
              onClick={toggleDocument}
              className="flex items-center justify-between w-full text-left bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              <span className="flex items-center space-x-2">
                <img src={FileText} alt="file text" />
                <span>Документы</span>
              </span>
            </button>

            {isDocuemntOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <NavLink
                    to="/document"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        <div className="flex items-center justify-between w-full">
                          Все
                          <span
                            id="documentCount"
                            className="text-red-500 ml-2"
                          >
                            (15)
                          </span>
                        </div>
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/in-work"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        В работе
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/postponed"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Отложенные
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/completed"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Завершенные
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/drafts"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Черновики
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/attention-required"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Требуют внимания
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/processing-required"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Требуют обработки
                      </>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/processed"
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={
                            isActive
                              ? "w-2.5 h-2.5 rounded-full bg-blue-500 mr-2"
                              : "w-2.5 h-2.5 rounded-full bg-gray-400 mr-2"
                          }
                        ></span>
                        Обработанные
                      </>
                    )}
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          <li className="mt-8 space-x-1 flex items-center gap-2">
            {" "}
            <img src={IdentificationBadge} alt="Сотрудники image" /> Сотрудники
          </li>
          <NavLink
            to="route"
            className={({ isActive }) =>
              isActive
                ? "mt-8 flex items-center bg-blue-600 bg-blue-500 gap-2 text-white px-4 py-2 rounded-md"
                : "mt-8 flex items-center gap-2"
            }
          >
            {" "}
            <img src={VectorThree} alt="Маршруты image" /> Маршруты
          </NavLink>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
