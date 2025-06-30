import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import "./style.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Correctly toggles the menu state
  };

  return (
    <>
      {/* Navbar */}
      <nav className="h-20 w-full flex justify-between px-8 items-center sticky top-0 bg-white z-10">
        {/* Logo */}
        <div>
          <NavLink to={"/"}>
            <h1 className="font-bold text-5xl font-serif text-gray-600">MDS</h1>
          </NavLink>
        </div>

        {/* Links for larger screens */}
        <ul className="hidden sm:flex space-x-5 text-gray-700 text-lg font-medium">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/"}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>ABOUT US</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>SERVICES</NavLink>
          </li>
          <li>
            <NavLink to={"/project"}>PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to={"/samples"}>SAMPLES</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>CONTACT</NavLink>
          </li>
        </ul>

        {/* Hamburger Menu for smaller screens */}
        <div
          className="text-3xl text-black sm:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <TiThMenu />
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-20 left-0 w-full bg-white flex flex-col items-center space-y-5 py-5 text-black text-lg font-medium sm:hidden transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <li className="list-none">
            <NavLink to={"/"} onClick={() => setMenuOpen(false)}>
              HOME
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/about"} onClick={() => setMenuOpen(false)}>
              ABOUT US
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/service"} onClick={() => setMenuOpen(false)}>
              SERVICES
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/project"} onClick={() => setMenuOpen(false)}>
              PROJECTS
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/samples"} onClick={() => setMenuOpen(false)}>
              SAMPLES
            </NavLink>
          </li>
          <li className="list-none">
            <NavLink to={"/contacts"} onClick={() => setMenuOpen(false)}>
              CONTACT
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
