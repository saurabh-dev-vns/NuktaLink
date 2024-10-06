import React, { useState} from "react";
import { Link } from "react-router-dom";
import HandleDarkMode from "../DarkMode/HandleDarkMode";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className=" text-xl font-bold">
            <Link to="/">NuktaLink</Link>
          </div>

          {/* Hamburger Icon (only visible on mobile) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <ul
            className={`lg:flex space-x-4 ${isOpen ? "block" : "hidden"} lg:block`}
          >
            <li>
              <Link
                to="/"
                className="dark:text-gray-300 text-gray-900 hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="dark:text-gray-300 text-gray-900 hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="dark:text-gray-300 text-gray-900 hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          {/*Toggle to switch mode*/}
          <HandleDarkMode/>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
