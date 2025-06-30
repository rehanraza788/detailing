import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Banner Image */}
      <div className="w-full max-h-96 overflow-hidden mb-8">
        <img
          src="/public/images/image-3.jpg"
          alt="About MetalWorks Detailing Solutions"
          className="w-full h-72 object-cover rounded-lg shadow"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/1200x400?text=Image+Not+Found";
          }}
        />
      </div>

      {/* Heading */}
      <h1 className="text-center font-bold text-3xl text-gray-700 mb-8">
        Welcome to MetalWorks Detailing Solutions
      </h1>

      {/* About Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow p-8">
        <div>
          {/* <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Who We Are
          </h2> */}
          <p className="text-gray-700 mb-4">
            MetalWorks Detailing Solutions provides industry leading steel
            detailing services. MDS is an innovative Structural Steel Detailing
            company committed to providing quality steel detailing services to
            the commercial and industrial industry.
          </p>
          {/* <p className="text-gray-700 mb-4">
            Our directors and principal engineers have worked in professional
            Structural Steel Detailing and Fabrication sector for reputed
            companies and have been successful in multiple projects with
            aggressive schedules.
          </p>
          <p className="text-gray-700 mb-4">
            With their vast experience and talent, they have started their own
            venture in steel detailing, constructing a new technological
            foundation: Arsalan Detailing Services.
          </p> */}
          <p className="text-gray-700">
            The company focuses on clients across the globe and strives to match
            their exact needs and expectations, gaining a reputation for common
            sense solutions to structural steel detailing using advanced 3D
            modelling software.
          </p>
        </div>
        <div>
          <img
            src="/public/images/snap_001.png"
            alt="Steel Detailing"
            className="w-full h-72 object-cover rounded-lg shadow"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl shadow p-8 mt-12">
        <div className="order-2 md:order-1">
          <img
            src="/public/images/mission.jpg"
            alt="Our Mission"
            className="w-full h-72 object-cover rounded-lg shadow"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">AIM</h2>
          <p className="text-gray-700 mb-4">
            Optimum utilization of resources to earn maximum returns for our
            valued customers by producing one of the best steel detailing works.
          </p>
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">VISION</h2>
          <p className="text-gray-700 mb-4">
            To build a world-class enterprise in professional steel detailing by
            providing quality and timely deliveries to our Clients and make this
            organization a great place to work
          </p>
          <h2 className="text-2xl font-semibold text-gray-600 mb-3">MISSION</h2>
          <p className="text-gray-700  mb-4">
            To be customer focused, globally competitive company in steel
            detailing & other chosen areas of professional 3D modeling &
            drafting, through quality, technology & innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
