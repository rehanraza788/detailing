import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <div className=" w-full bg-gray-700  flex  flex-wrap justify-center gap-3">
        <div className="w-96 h-80 ">
          <h1 className="font-bold text-gray-300 text-2xl mt-10 mb-3 ">
            ABOUT US
          </h1>
          <p className="text-gray-400">
            Arsalan Detailing Services provides industry leading steel detailing
            services. ADS is an innovative Structural Steel Detailing company
            committed to providing quality steel detailing services to the
            commercial and industrial industry.
          </p>
        </div>
        <div className="w-96  h-80 ">
          <h1 className="font-bold text-gray-300 text-2xl mt-10 mb-3 ml-3 ">
            QUICK LINKS
          </h1>
          <ul className="text-gray-400 text-l ml-3">
            <li>
              <NavLink to={"/"}>HOME</NavLink>
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
        </div>
        <div className="w-96 h-80 ">
          <h1 className="font-bold text-gray-300 text-2xl mt-10 mb-3 ml-3 ">
            ADDRESS
          </h1>
          <p className="text-gray-400 ml-3">
            Arsalan Detailing Services New Delhi, India Ph no. 9199486786
          </p>
          <br />
          <p className="text-gray-400 ml-3">
            Arsalan Detailing Services New Delhi, India Ph no. 9199486786
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
