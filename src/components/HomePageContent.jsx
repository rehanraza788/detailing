import React from "react";

const services = [
  {
    img: "/public/images/structure.jpg",
    title: "Structural Steel Detailing"
  },
  {
    img: "/public/images/structure.jpg",
    title: "Miscellaneous steel Detailing"
  },

  {
    img: "/public/images/structure.jpg",
    title: "Pipe Rake Support Structure "
  },
  {
    img: "/public/images/structure.jpg",
    title: "Advance Bill of Material (ABM)"
  }
  // Add more services as needed
];

const projects = [
  {
    img: "/public/images/COMMERCIAL BUILDING.jpg",
    title: "COMMERCIAL BUILDING",
    textColor: "text-white",
    bgColor: "bg-black bg-opacity-30"
  },
  {
    img: "/public/images/MULTISTORY.png",
    title: "MULTISTORY & HIGH RISE BUILDING",
    textColor: "text-white",
    bgColor: "bg-black bg-opacity-30"
  },
  {
    img: "/public/images/school.png",
    title: "SCHOOL AND COLLEGE BUILDINGS",
    textColor: "text-white",
    bgColor: "bg-black bg-opacity-30"
  },
  {
    img: "/public/images/hospital.png",
    title: "Industrial Steel Structure",
    textColor: "text-white",
    bgColor: "bg-black bg-opacity-30"
  }
];

const HomePageContent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Company Details */}
      <section className="py-12 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-700 mb-4">
          Welcome to MetalWorks Detailing Solutions
        </h1>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg">
          MetalWorks Detailing Solutions provides industry-leading steel
          detailing services. MDS is an innovative structural steel detailing
          company committed to delivering high-quality services for both
          structural and miscellaneous steel detailing.
        </p>
      </section>

      {/* Image and About */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 mb-16">
        <div className="flex-1 max-w-xl">
          <img
            src="/public/images/snap_001.png"
            alt="Industrial"
            className="rounded-lg shadow-lg w-full h-80 object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />
        </div>
        <div className="max-w-xl text-gray-600 text-lg"></div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-10 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
          OUR SERVICES
        </h2>
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow hover:shadow-lg transition w-80 p-6 flex flex-col items-center text-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-24 h-24 object-cover rounded mb-4"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/96?text=No+Image";
                }}
              />
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="py-10">
        <h2 className="text-center text-3xl font-bold text-gray-700 mb-8">
          OUR PROJECTS
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative w-80 h-60 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-fill"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/320x240?text=Image+Not+Found";
                }}
              />
              <div
                className={`absolute inset-0 flex items-end justify-center ${project.bgColor}`}
              >
                <h3
                  className={`w-full text-center ${project.textColor} text-xl font-bold py-3`}
                >
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePageContent;
