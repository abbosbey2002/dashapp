import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// SVG rasmlar importi
import FiMenu from "../assets/img/menu.svg";
import fix from "../assets/img/fix.svg";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import FileText from "../assets/img/FileText.png";
import FileTextBlack from "../assets/img/FileText_black.svg";
import IdentificationBadge from "../assets/img/IdentificationBadge.svg";
import VectorThree from "../assets/img/VectorThree.svg";
import VectorThree_white from "../assets/img/VectorThree_white.svg";
import IdentificationBadge_white from "../assets/img/IdentificationBadge_white.svg";
import MenuList from "./MenuList";
import logo from "../assets/img/logo.svg";

function MobileSidebar({isOpen, toggleMenu}) {

  if( !isOpen ){
    return null;
  }

 
  return (
    <div className="md:hidden fixed inset-0 w-full transition-all z-50 h-full">
      <div className="">
        <nav
          className={`bg-white absolute z-50 w-full h-20 shadow-md px-8 py-3 flex justify-between items-center`}
        >
          {/* Logo qismi */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-40" />
          </div>

          <button onClick={toggleMenu} className="text-3xl p-2  md:hidden">
            {isOpen ? (
              <img className="" src={fix} alt="close" />
            ) : (
              <img src={FiMenu} alt="menu" />
            )}
          </button>
        </nav>
      </div>

      <div className="relative w-full top-20  h-full">
        <MenuList className="bg-white z-50 px-2 pt-3 absolute translate-x-ful md:translate-x-0   transition-all right-0  h-full w-1/2" />
      </div>
      <div onClick={toggleMenu} className="bg-black opacity-80 fixed inset-0 w-full h-full"></div>
    </div>
  );
}

export default MobileSidebar;
