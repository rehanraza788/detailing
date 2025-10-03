import React from "react";

const IndustrialStructures = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="https://www.bnalprefabs.com/wp-content/uploads/2023/05/peb_2_1.jpg"
          alt="Industrial Structures"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Industrial Structures
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Engineering Robust Industrial Facilities
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We design and detail industrial structures with efficiency, safety,
          and sustainability in mind. From manufacturing plants to large-scale
          production facilities, our solutions ensure functionality, durability,
          and compliance with industry standards.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Manufacturing Plants",
              desc: "Custom-designed plants optimized for production flow and safety."
            },
            {
              title: "Warehouses & Storage",
              desc: "Efficient layout for storage, logistics, and material handling."
            },
            {
              title: "Industrial Safety",
              desc: "Structures designed with structural integrity and safety compliance."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">
          Want to Build a Modern Industrial Facility?
        </h3>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default IndustrialStructures;
