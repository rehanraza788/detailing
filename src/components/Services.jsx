import React from "react";
import { AiOutlineCalculator } from "react-icons/ai";

const Services = () => {
  return (
    <div>
      {/* image div */}
      {/* <div className="about-img">
        <img src="/public/images/image-6.jpg" alt="image" />
      </div> */}
      <div>
        <h1 className="text-center text-3xl font-bold text-gray-600 p-4">
          OUR STRUCTURAL DRAFTING & DETAILING SERVICES
        </h1>
        <div className=" flex  flex-wrap justify-center gap-4 p-5">
          {/* services -1 */}

          <div className="border-2 border-gray-300 w-[600px] h-60 flex rounded-sm ">
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
          {/* services -2 */}

          <div className="border-2 border-gray-300 w-[600px] h-60 flex rounded-sm ">
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
          {/* services -3 */}

          <div className="border-2 border-gray-300 w-[600px] h-60 flex rounded-sm ">
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
          {/* services -4 */}

          <div className="border-2 border-gray-300 w-[600px] h-60 flex rounded-sm ">
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
          {/* services -5 */}

          <div className="border-2 border-gray-300 w-[600px] h-60 flex rounded-sm ">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
