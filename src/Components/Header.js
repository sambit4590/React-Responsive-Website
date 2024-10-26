import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-blue-400 p-4">
      <div className="max-w-[1240px] py-[20px] flex justify-between mx-auto items-center">
        {/* Logo */}
        <div className="font-bold text-3xl">
          <Link to="/home">LOGO</Link>
        </div>

        {/* Toggle Button for Small Screens */}
        <div className="md:hidden z-50">
          {toggle ? (
            <IoClose
              onClick={() => setToggle(!toggle)}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setToggle(!toggle)}
              className="text-3xl cursor-pointer"
            />
          )}
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex text-xl font-semibold gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Responsive Menu Overlay for Small Screens */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-blue-300 text-black flex flex-col justify-center items-center space-y-8 text-2xl font-semibold transition-transform duration-300 ease-in-out ${
            toggle ? "translate-x-0" : "translate-x-full"
          } md:hidden z-40`}
        >
          <li>
            <Link onClick={() => setToggle(false)} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} to="/resources">
              Resources
            </Link>
          </li>
          <li>
            <Link onClick={() => setToggle(false)} to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
