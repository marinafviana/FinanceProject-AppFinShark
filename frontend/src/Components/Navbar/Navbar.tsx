import React from "react";
import logo from "./logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        
        <div className="flex items-center space-x-20">
          <img src={logo} alt="Logo" />

          <div className="hidden font-bold lg:flex">
            <a href="#" className="text-black hover:text-blue-700">
              Dashboard
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-black">
          <button className="hover:text-blue-700">
            Login
          </button>

          <button className="px-8 py-3 font-bold rounded text-white bg-green-500 hover:opacity-70">
            Signup
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;