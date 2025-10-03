import React from "react";

const MultiStoryBuildings = () => {
  return (
    <div className="font-sans ">
      {/* Hero Section */}
      <div
        className="h-[60vh] flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80')"
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Multi-Story Buildings
        </h1>
      </div>

      {/* Description Section */}
      <div className="p-8 md:p-12 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          High-rise Residential & Commercial Towers
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We specialize in designing and detailing multi-story structures that
          are built for durability and efficiency. From residential skyscrapers
          to mixed-use developments, our solutions ensure safety,
          sustainability, and aesthetic excellence.
        </p>
      </div>
    </div>
  );
};

export default MultiStoryBuildings;
