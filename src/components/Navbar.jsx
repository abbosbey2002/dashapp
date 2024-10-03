import React from "react";
import logo from "../assets/img/logo.svg";
import Mask from "../assets/img/Mask.svg";
import Logout from "../assets/img/li_log-out.svg";
import notify from "../assets/img/notify.svg";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-full" />
        {/* <h1 className="font-bold text-lg">МИС.DOC</h1> */}
      </div>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Поиск"
          className="border rounded-lg px-3 py-2 text-sm"
        />
        <div>
          <a className="border rounded-full block h-full" href="">
            <img src={notify} alt="logout" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src={Mask}
            alt="User Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="hidden sm:block">
            <h4 className="text-sm font-semibold">Титов Артем</h4>
            <span className="text-gray-500 text-sm">Администратор</span>
          </div>
        </div>
        <div>
          <a className="border bg-slate-500 block h-full p-3" href="">
            <img src={Logout} alt="logout" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
