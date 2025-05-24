import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-blue-900 grad text-xl font-bold">EVENTRO</h2>
        </div>

        <ul className="hidden md:flex gap-10 font-medium text-blue-600 mt-1">
          <li>Home</li>
          <li>Explore</li>
          <li>My College</li>
        </ul>

        <div className="hidden md:flex gap-4">
          <button className="border-2 border-blue-600 text-blue-600 rounded-2xl px-4 py-2 hover:bg-blue-50">
            Login
          </button>
          <button className="border-2 border-blue-600 bg-blue-600 text-white rounded-2xl px-4 py-2 hover:bg-blue-700">
            Create Account
          </button>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;

