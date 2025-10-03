import React from "react";

const EducationalFacilities = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div
        className="h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Educational Facilities
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Innovative Learning Environments
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We create modern, safe, and functionally designed educational spaces
          for the future. From primary schools to university campuses, our focus
          is on flexibility, sustainability, and user-centered architecture
          tailored for both students and educators.
        </p>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Smart Classrooms",
              desc: "Designed for digital learning with acoustic balance and ergonomic layouts."
            },
            {
              title: "Sports & Activity Zones",
              desc: "Multipurpose auditoriums, sports halls, and recreational spaces."
            },
            {
              title: "Laboratories & Libraries",
              desc: "Advanced research and learning hubs with safety and efficiency in mind."
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

      {/* CTA */}
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-4">
          Want to Build a Future-Ready Educational Space?
        </h3>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default EducationalFacilities;
