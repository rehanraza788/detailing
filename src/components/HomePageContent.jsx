import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";
import { LuBolt } from "react-icons/lu";
import { MdConveyorBelt } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

const HomePageContent = () => {
  return (
    <>
      {/* Company Details */}
      <div className=" w-full ">
        <h1 className="font-bold mt-7 mb-10 text-center text-gray-600 xl:text-3xl sm:text-xl md:text-[50px]">
          Welcome to Detailing Services
        </h1>
      </div>

      {/* content */}

      <div className=" flex justify-center flex-wrap ">
        <div className=" h-full w-[700px]  p-6 text-gray-500">
          <span>
            Arsalan Detailing Services provides industry leading steel detailing
            services. ADS is an innovative Structural Steel Detailing company
            committed to providing quality steel detailing services to the
            commercial and industrial industry.
          </span>
          <br />
          <br />
          <span>
            Initiated the Structural Steel Detailing, our directors and
            principal engineers, have worked in professional Structural Steel
            Detailing and Fabrication sector for reputed companies and have been
            successful in multiple projects with aggressive schedules.
          </span>
          <br />
          <br />
          <span>
            Initiated the Structural Steel Detailing, our directors and
            principal engineers, have worked in professional Structural Steel
            Detailing and Fabrication sector for reputed companies and have been
            successful in multiple projects with aggressive schedules.
          </span>
        </div>
        {/* image */}
        <div className="border detailing-Image h-full w-[700px]">
          {/* <span>for image</span> */}
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/050/784/265/small/oil-refinery-working-at-sunset-industrial-background-photo.jpg"
            alt=""
            className="h-96"
          />
        </div>
      </div>

      {/* OUR SERVICES */}
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-600 p-4">
            -: OUR SERVICES :-
          </h1>

          <div className=" mx-48 flex flex-wrap justify-center gap-4 p-5 ">
            {/* box -1  */}
            <div className="border-2 border-gray-600 w-[450px] h-64 flex rounded-sm ">
              <div className="w-48 h-full">
                <AiOutlineCalculator className="text-8xl mt-20 ml-4" />
              </div>
              <div className="w-full  h-full ">
                <h1 className="font-bold text-gray-700 text-xl text-center mt-5">
                  Estimations
                </h1>
                <p className="p-1 text-gray-600">
                  Every job is estimations accurately based on specific man hour
                  cast and item method.There is no guess work is our estimation
                </p>
                <br />
                <button className="text-white border-2 border-black p-1 ml-3 bg-black">
                  Read More
                </button>
              </div>
            </div>
            {/* box-2 */}
            <div className="border-2 border-gray-600 w-[450px] h-64 flex">
              <div className="w-48 h-full">
                <RiFileList3Line className="text-8xl mt-20 ml-4" />
              </div>
              <div className="w-full  h-full">
                <h1 className="font-bold text-gray-700 text-xl text-center mt-5">
                  Advance Bill of Material
                </h1>
                <p className="p-1 text-gray-600">
                  Every job is estimations accurately based on specific man hour
                  cast and item method.There is no guess work is our estimation
                </p>
                <br />
                <button className="text-white border-2 border-black p-1 ml-3 bg-black">
                  Read More
                </button>
              </div>
            </div>

            {/* box-3 */}

            <div className="border-2 border-gray-600 w-[450px] h-64 flex">
              <div className="w-48 h-full">
                <LuBolt className="text-8xl mt-20 ml-4" />
              </div>
              <div className="w-full  h-full">
                <h1 className="font-bold text-gray-700 text-xl text-center mt-5">
                  Bolt Lists
                </h1>
                <p className="p-1 text-gray-600">
                  Every job is estimations accurately based on specific man hour
                  cast and item method.There is no guess work is our estimation
                </p>
                <br />
                <button className="text-white border-2 border-black p-1 ml-3 bg-black">
                  Read More
                </button>
              </div>
            </div>
            {/* box-4 */}

            <div className="border-2 border-gray-600 w-[450px] h-64 flex">
              <div className="w-48 h-full">
                <MdConveyorBelt className="text-8xl mt-20 ml-4" />
              </div>
              <div className="w-full  h-full">
                <h1 className="font-bold text-gray-700 text-xl text-center mt-5">
                  Conveyor Structures
                </h1>
                <p className="p-1 text-gray-600">
                  Every job is estimations accurately based on specific man hour
                  cast and item method.There is no guess work is our estimation
                </p>
                <br />
                <button className="text-white border-2 border-black p-1 ml-3 bg-black">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR PROJECTS */}

      <div>
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-600 p-4">
            -:OUR PROJECT :-
          </h1>

          <div className=" mx-36 flex flex-wrap justify-center gap-1 p-5 ">
            {/* box -1  */}
            <div className="0 w-[520px] h-80 relative">
              {/* Image */}
              <img
                src="/public/images/COMMERCIAL BUILDING.jpg"
                alt="High Rise Building"
                className="w-full h-full object-cover"
              />

              {/* Heading on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold bg-black bg-opacity-50 mt-60">
                  COMMERCIAL BUILDING
                </h1>
              </div>
            </div>
            {/* box-2 */}
            <div className=" w-[520px] h-80 relative">
              {/* Image */}
              <img
                src="/public/images/HIGH RISE BUILDING.jpg"
                alt="High Rise Building"
                className="w-full h-full object-cover"
              />

              {/* Heading on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-black text-2xl font-bold bg-white bg-opacity-50 mt-60">
                  MULTISTORY & HIGH RISE BUILDING
                </h1>
              </div>
            </div>
            {/* box-3 */}
            <div className=" w-[520px] h-80 relative">
              {/* Image */}
              <img
                src="/public/images/HIGH RISE BUILDING.jpg"
                alt="High Rise Building"
                className="w-full h-full object-cover"
              />

              {/* Heading on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-black text-2xl font-bold bg-white bg-opacity-50 mt-60">
                  MULTISTORY & HIGH RISE BUILDING
                </h1>
              </div>
            </div>
            {/* box-4 */}
            <div className=" w-[520px] h-80 relative">
              {/* Image */}
              <img
                src="/public/images/HIGH RISE BUILDING.jpg"
                alt="High Rise Building"
                className="w-full h-full object-cover"
              />

              {/* Heading on Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-black text-2xl font-bold bg-white bg-opacity-50 mt-60">
                  MULTISTORY & HIGH RISE BUILDING
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageContent;
