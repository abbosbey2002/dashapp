import React, { useState } from "react";
import logo from "../assets/img/logo.svg";
import Mask from "../assets/img/Mask.svg";
import Logout from "../assets/img/li_log-out.svg";
import notify from "../assets/img/notify.svg";
import MobileSidebar from "./MobileSidebar"; // Import MobileSidebar
import FiMenu from "../assets/img/menu.svg";
import fix from "../assets/img/fix.svg";
import NotificationModal from "./NotificationModal";
import { data } from "autoprefixer";

function Navbar({ isOpen, toggleMenu, className, user }) {


  const [isModalVisible, setModalVisible] = useState(false);



  return (
    <nav className={`bg-white shadow-md px-8 py-3 flex justify-between items-center`}>
      {/* Logo qismi */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-40" />
      </div>

      {/* Mobile sidebar */}
      {/* <MobileSidebar /> */}
      {/* Mobile sidebar */}

      {/* O'ng tomondagi qism */}
      <div className="flex items-center space-x-6 hidden md:flex">
        {/* Qidiruv qutisi (faqat katta ekranlar uchun) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск"
            className="border md:w-96 border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm bg-gray-100 placeholder-gray-500 focus:outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.414-1.414l5.386 5.387a1 1 0 11-1.414 1.414l-5.386-5.387zM8 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {/* Bildirishnoma belgisi */}
        <div className="relative md:flex hidden"
        onMouseEnter={() => setModalVisible(true)}
        onMouseLeave={() => setModalVisible(false)}
        >
          <a
            className="rounded-full inline-block p-2 bg-gray-100 hover:bg-gray-200"
            href=""
          >
            <img src={notify} alt="notify" className="w-7 h-7" />
          </a>
          <NotificationModal isVisible={isModalVisible} />
        </div>

        {/* Foydalanuvchi ma'lumotlari */}
        <div className="flex items-center space-x-3">
          <img
            src={Mask}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <h4 className="text-sm font-semibold">{user.first_name} {user.last_name}</h4>
            <span className="text-gray-500 text-sm">Администратор</span>
          </div>
        </div>

        {/* Chiqish tugmasi */}
        <div>
          <a
            className="rounded-xl inline-block p-2 bg-gray-100 hover:bg-gray-200"
            href=""
          >
            <img src={Logout} alt="logout" className="w-6" />
          </a>
        </div>
      </div>
      <button className="text-3xl p-2 md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <img src={fix} alt="close" />
          ) : (
            <img src={FiMenu} alt="menu" />
          )}
        </button>
    </nav>
  );
}

export default Navbar;
