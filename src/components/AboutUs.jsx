import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <>
      {/* image div */}
      <div className="about-img">
        <img src="/public/images/image-3.jpg" alt="image" />
      </div>
      {/* ABOUT COMPANY HEADING */}
      <div>
        <h1 className="text-center font-bold mt-3 text-2xl text-gray-600">
          Welcome to Our Detailing Services
        </h1>
      </div>

      {/* ABOUT COMPANY HEADING */}
      <div className="  ">
        <div className="flex justify-center flex-wrap mt-4 gap-3">
          <div className="border-2 border-green-500 w-1/2  p-3 text-gray-700 font-bold">
            <p>
              Arsalan Detailing Services provides industry leading steel
              detailing services. ADS is an innovative Structural Steel
              Detailing company committed to providing quality steel detailing
              services to the commercial and industrial industry.
            </p>
            <br />
            <p>
              Initiated the Structural Steel Detailing, our directors and
              principal engineers, have worked in professional Structural Steel
              Detailing and Fabrication sector for reputed companies and have
              been successful in multiple projects with aggressive schedules.
            </p>
            <br />
            <p>
              Now with their vast experience to use & channelizing their talent,
              they have decided to start their own venture in steel detailing
              field by constructing new compelling technological foundation,
              Arsalan Detailing Services.
            </p>
            <br />
            <p>
              The company focuses on its Clients across the globe & strives to
              match their exact needs & expectations, gaining reputation for
              their common sense solutions to structural steel detailing using
              3D modelling software's
            </p>
          </div>
          <div className="border-2 border-green-500 w-96 ">
            <img
              src="/public/images/steeldetailing.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-center flex-wrap mt-4  gap-3">
          <div className="border-2 border-green-500 w-1/2 h-80 p-3 text-gray-700 font-bold">
            <p>
              Arsalan Detailing Services provides industry leading steel
              detailing services. ADS is an innovative Structural Steel
              Detailing company committed to providing quality steel detailing
              services to the commercial and industrial industry.
            </p>
            <br />
            <p>
              Initiated the Structural Steel Detailing, our directors and
              principal engineers, have worked in professional Structural Steel
              Detailing and Fabrication sector for reputed companies and have
              been successful in multiple projects with aggressive schedules.
            </p>
            <br />
            <p>
              Now with their vast experience to use & channelizing their talent,
              they have decided to start their own venture in steel detailing
              field by constructing new compelling technological foundation,
              Arsalan Detailing Services.
            </p>
            <br />
            <p>
              The company focuses on its Clients across the globe & strives to
              match their exact needs & expectations, gaining reputation for
              their common sense solutions to structural steel detailing using
              3D modelling software's
            </p>
          </div>
          <div className="border-2 border-green-500 w-96 h-80">
            <img
              src="/public/images/mission.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default AboutUs;
