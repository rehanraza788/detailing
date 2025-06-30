import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";

// Standardized ServiceCard component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-xl w-full max-w-xs">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-100 mb-4">
      <Icon className="text-4xl text-blue-600" />
    </div>
    <h2 className="font-semibold text-lg text-gray-800 mb-2 text-center">
      {title}
    </h2>
    <p className="text-gray-600 text-sm text-center mb-4">{description}</p>
    <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
      Read More
    </button>
  </div>
);

const services = [
  {
    icon: AiOutlineCalculator,
    title: "Estimations",
    description:
      "Every job is estimated accurately based on specific man hour cost and item method. There is no guess work in our estimation."
  },
  {
    icon: AiOutlineCalculator,
    title: "Detailing",
    description:
      "We provide precise detailing services for all structural projects, ensuring accuracy and efficiency."
  },
  {
    icon: AiOutlineCalculator,
    title: "Drafting",
    description:
      "Our drafting services deliver clear and comprehensive drawings for fabrication and construction."
  },
  {
    icon: AiOutlineCalculator,
    title: "Consulting",
    description:
      "Expert consulting to optimize your structural design and detailing processes."
  },
  {
    icon: AiOutlineCalculator,
    title: "Project Management",
    description:
      "Comprehensive project management to ensure timely and successful project delivery."
  }
];

const Services = () => {
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold text-gray-700 mb-8">
          OUR STRUCTURAL DRAFTING & DETAILING SERVICES
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
