import React from "react";
import "./style.css";

const projects = [
  {
    title: "COMMERCIAL",
    image: "/images/multistorey.jpg",
    description:
      "Arsalan Detailing Services deals with steel structures of all types, shapes and sizes that typically range from 50 to 5000 tons. The company follows customized fabrication standards and project scopes, maintaining the guidelines set by the AISC, NISD and OSHA to produce structures of the future."
  },
  {
    title: "INDUSTRIAL",
    image: "/public/images/commercial.jpg",
    description:
      "Arsalan Detailing Services deals with steel structures of all types, shapes and sizes that typically range from 50 to 5000 tons. The company follows customized fabrication standards and project scopes, maintaining the guidelines set by the AISC, NISD and OSHA to produce structures of the future."
  }
];

const projectTypes = [
  [
    "Commercial Building",
    "Multistory & High Risk Building",
    "School & College Buildings",
    "Hospital",
    "Churches",
    "Stadium"
  ],
  [
    "Airports",
    "Staircase, Handrails & Misc. steel",
    "Cable Gantries",
    "Gantry Towers & Transfer House",
    "Pipe Rack Support"
  ],
  ["Pre-Engineering Buildings", "Warehouses", "Refinery", "Bridges"]
];

const Projects = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Heading */}
      <h1 className="font-bold text-3xl text-center text-gray-700 mb-10">
        Our Projects
      </h1>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-4">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md flex flex-col md:flex-row overflow-hidden"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full md:w-1/2 h-64 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x400?text=Image+Not+Found";
              }}
            />
            <div className="flex-1 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-orange-600 mb-2 text-center md:text-left">
                {proj.title}
              </h2>
              <p className="text-gray-700">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Types */}
      <div className="max-w-4xl mx-auto mb-8 px-4">
        <h2 className="font-semibold text-2xl text-red-500 mb-2 text-center">
          Types of Projects Covered by Us
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          As one of the top notch Steel Detailing Service providers, we cover
          the following types of projects:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projectTypes.map((typeList, idx) => (
            <ul
              key={idx}
              className="list-disc list-inside bg-white rounded-lg shadow p-4 text-gray-700"
            >
              {typeList.map((type, i) => (
                <li key={i}>{type}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
