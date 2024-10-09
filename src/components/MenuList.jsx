import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import FileText from "../assets/img/FileText.png";
import FileTextBlack from "../assets/img/FileText_black.svg";
import IdentificationBadge from "../assets/img/IdentificationBadge.svg";
import VectorThree from "../assets/img/VectorThree.svg";
import VectorThree_white from "../assets/img/VectorThree_white.svg";
import IdentificationBadge_white from "../assets/img/IdentificationBadge_white.svg";

function MenuList({className}) {
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  // Sidebar menyular arrayi
  const menuItems = [
    {
      name: "Документы",
      to: "/",
      icon: FileTextBlack,
      activeIcon: FileText,
      key: "documents",
      submenu: [
        { name: "Все", to: "/" },
        { name: "В работе", to: "/in-work" },
        { name: "Отложенные", to: "/postponed" },
        { name: "Отложенные", to: "/postponed" },
      ],
    },
    {
      name: "Сотрудники",
      to : "employees",
      icon: IdentificationBadge,
      activeIcon: IdentificationBadge_white,
      key: "employees",
      submenu: [
        { name: "Список сотрудников", to: "employees" },
        { name: "По отделам", to: "/employee/departments" },
      ],
    },
    {
      name: "Маршруты",
      to: "directory",
      icon: VectorThree,
      activeIcon: VectorThree_white,
      key: "routes",
      submenu: [
        { name: "Все маршруты", to: "/directory" },
        { name: "Пользовательские маршруты", to: "/routes/custom" },
      ],
    },
  ];

  useEffect(() => {
    menuItems.forEach((menuItem) => {
      const isActive = menuItem.submenu.some(
        (subItem) => location.pathname === subItem.to
      );
      if (isActive) {
        setOpenSubmenus((prev) => ({
          ...prev,
          [menuItem.key]: true,
        }));
      }
    });
  }, [location.pathname]);

  const toggleSubmenu = (key) => {
    setOpenSubmenus({
      documents: false,
      employees: false,
      routes: false,
      [key]: true,
    });
  };

  return (
    <ul className={className}>
      {menuItems.map((menuItem) => (
        <li key={menuItem.key}>
          <NavLink
          to={menuItem.to}
            onClick={() => toggleSubmenu(menuItem.key)}
            className={({ isActive }) =>
              openSubmenus[menuItem.key]
                ? "px-4 py-2 flex items-center gap-2 rounded-md bg-blue-500 text-white"
                : "px-4 py-2 flex items-center gap-2 rounded-md bg-white hover:bg-gray-200"
            }
          >
            <span className="flex items-center space-x-2">
              <img
                src={
                  openSubmenus[menuItem.key]
                    ? menuItem.activeIcon
                    : menuItem.icon
                }
                alt={`${menuItem.name} Icon`}
                className="h-6 w-6"
              />
              <span>{menuItem.name}</span>
            </span>
          </NavLink>

          {openSubmenus[menuItem.key] && (
            <ul className="pl-6 mt-2 space-y-2">
              {menuItem.submenu.map((subItem, index) => (
                <li key={index}>
                  <NavLink
                    to={subItem.to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-600 font-bold flex items-center"
                        : "text-gray-600 flex items-center"
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive ? "bg-blue-500" : "bg-gray-400"
                          } mr-2`}
                        ></span>
                        {subItem.name}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default MenuList;
