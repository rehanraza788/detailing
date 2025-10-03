import React from "react";

const CommercialBuildings = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
          alt="Commercial Buildings"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Commercial Buildings
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Modern Office Complexes & Commercial Spaces
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We specialize in designing commercial structures that combine
          functionality and aesthetic appeal. From office towers to retail
          spaces, our projects ensure durability, sustainability, and a modern
          look that aligns with business needs.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Office Complexes",
              desc: "Flexible, modern layouts optimized for productivity and collaboration."
            },
            {
              title: "Retail Spaces",
              desc: "Attractive commercial spaces that enhance customer experience."
            },
            {
              title: "Sustainable Design",
              desc: "Eco-friendly materials and energy-efficient solutions for long-term savings."
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
          Want to Build a Modern Commercial Space?
        </h3>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default CommercialBuildings;
