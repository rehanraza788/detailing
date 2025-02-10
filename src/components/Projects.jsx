import React from "react";
import "./style.css";
const Projects = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl  mt-8 mb-4 text-center text-gray-600 ">
          Welcome to Detailing Services
        </h1>
      </div>
      <div className=" w-screen h-96 flex flex-wrap justify-center gap-2">
        <div className="border-2 border-gray-300 w-[40%] h-[85%] flex">
          {/* for  image  */}
          <div className="w-1/2 h-full  ">
            <img
              src="/public/images/multistorey.jpg"
              className="w-full h-full "
              alt="image"
            />
          </div>
          <div className="w-1/2 h-full  ">
            <h1 className="text-center font-bold mt-2 p-2 text-xl text-orange-600">
              COMMERCIAL
            </h1>
            <p className="p-3 text-gray-700">
              Arsalan Detailing Services deals with steel structures of all
              types, shapes and sizes that typically range from 50 to 5000 tons.
              The company follows customized fabrication standards and project
              scopes, maintaining the guidelines set by the AISC, NISD and OSHA
              to produce structures of the future.
            </p>
          </div>
        </div>
        {/* for image  */}
        <div className="border-2 border-gray-300 w-[40%] h-[85%] flex">
          <div className="w-1/2 h-full  ">
            <img
              src="/public/images/commercial.jpg"
              className="w-full h-full "
              alt="image"
            />
          </div>
          <div className="w-1/2 h-full ">
            <h1 className="text-center font-bold mt-2 p-2 text-xl text-orange-600">
              INDUSTRIAL
            </h1>
            <p className="p-3 text-gray-700">
              Arsalan Detailing Services deals with steel structures of all
              types, shapes and sizes that typically range from 50 to 5000 tons.
              The company follows customized fabrication standards and project
              scopes, maintaining the guidelines set by the AISC, NISD and OSHA
              to produce structures of the future.
            </p>
          </div>
        </div>
      </div>
      {/* TYPE OF PROJECTS COVERED BY US */}
      <div className="ml-36 flex flex-col gap-2">
        <h1 className="font-semibold text-xl text-red-500">
          TYPE OF PROJECTS COVERED BY US
        </h1>
        <h2 className="text-xl mb-4">
          As one of the top notch Steel Detailing Service providers, we cover
          the following types of projects:
        </h2>
      </div>
      {/* for list */}
      <div className=" w-full h-56 flex justify-center flex-wrap gap-3">
        <div className=" w-96 h-full">
          <ul className="list">
            <li>Commercial Building</li>
            <li>Multistory & High Risk Building</li>
            <li>School & College Buildings</li>
            <li>Hospital</li>
            <li>Churches</li>
            <li>Stadium</li>
          </ul>
        </div>
        <div className=" w-96 h-full">
          <ul className="list">
            <li>Airports</li>
            <li>Staircase, Handrails & Misc. steel</li>
            <li>Cable Gantries</li>
            <li>Gantry TOwers & Transfer House</li>
            <li>Pipe Rack Support</li>
          </ul>
        </div>
        <div className=" w-96 h-full">
          <ul className="list">
            <li>Pre-Engineering Buildings</li>
            <li>Warehouses</li>
            <li>Refinery</li>
            <li>Bridges</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
