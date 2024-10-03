import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="bg-white w-64 p-4 border-r">
      <ul className="space-y-4">
        {/* Dropdown Menyu */}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span>Документы</span>
            </span>
            <span>
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 15a1 1 0 001-1V7a1 1 0 10-2 0v7a1 1 0 001 1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </span>
          </button>

          {/* Submenu ichida NavLink ishlatamiz */}
          {isOpen && (
            <ul className="pl-6 mt-2 space-y-2 list-disc">
              <li>
                <NavLink
                  to="/all"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Все <span className="text-red-500">(15)</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/in-work"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  В работе
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/postponed"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Отложенные
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/completed"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Завершенные
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/drafts"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Черновики
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/attention-required"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Требуют внимания
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/processing-required"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                  }
                >
                  Требуют обработки
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/processed"
                  className={({ isActive }) =>
                    isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
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
  );
}

export default Sidebar;
