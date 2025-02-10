import React from "react";

const Samples = () => {
  const samples = [
    { heading: "1(R0)" },
    { heading: "2(R0) " },
    { heading: "102(R0)" },
    { heading: "102(R0)" },
    { heading: "102(R0)" },
    { heading: "102(R0)" },
    { heading: "102(R0)" },
    { heading: "115(R0)" },
    { heading: "126(R0)" },
    { heading: "133(R0)" },
    { heading: "163(R0)" },
    { heading: "245(R0) " },
    { heading: "245(R0) " },
    { heading: "245(R0) " },
    { heading: "245(R0) " }
  ];

  return (
    <div>
      {/* heading */}
      <div>
        <h1 className="text-red-600 font-bold text-2xl text-center p-5">
          SAMPLES
        </h1>
      </div>
      {/* list of samples */}
      <div className=" w-full flex flex-wrap justify-center gap-2">
        {/* sample-1  */}
        <div className=" w-[600px] mb-6 ">
          <h1 className="text-xl text-red-500 font-bold mt-1 ml-3">
            Sample - 1
          </h1>
          {samples.map((sample, index) => {
            return (
              <>
                <div
                  className="border-[1px] border-gray-300  w-[90%] h-12 mt-2 m-auto items-center font-bold text-[16px] flex justify-start gap-52 "
                  key={index}
                >
                  <h1 className="ml-5 text-gray-600 ">{sample.heading} </h1>
                  <button className="text-blue-800 "> Download</button>
                </div>
              </>
            );
          })}
        </div>
        {/* sample-2  */}
        <div className=" w-[600px] h-screen ">
          <h1 className="text-xl text-red-500 font-bold mt-1 ml-3">
            Sample - 2
          </h1>
          {samples.map((sample, index) => {
            return (
              <div
                className="border-[1px] border-gray-300  w-[90%] h-12 mt-2 m-auto items-center font-bold text-[16px] flex justify-start gap-52 "
                key={index}
              >
                <h1 className="ml-5 text-gray-600">{sample.heading} </h1>
                <button className="text-blue-800 "> Download</button>
              </div>
            );
          })}
        </div>
        {/* sample -3  */}
        {/* <div className="w-[600px] h-screen ">
          <h1 className="text-xl text-red-500 font-bold mt-1 ml-3">
            Sample - 3
          </h1>
          {samples.map((sample, index) => {
            return (
              <div
                className="border-[1px] border-gray-300  w-[90%] h-12 mt-2 m-auto items-center font-bold text-[16px] flex justify-start gap-52 "
                key={index}
              >
                <h1 className="ml-5 text-gray-600">{sample.heading} </h1>
                <button className="text-blue-800 "> Download</button>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Samples;
