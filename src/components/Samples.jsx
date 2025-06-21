import React from "react";

const samples = [
  { heading: "1(R0)" },
  { heading: "2(R0)" },
  { heading: "102(R0)" },
  { heading: "102(R0)" },
  { heading: "102(R0)" },
  { heading: "102(R0)" },
  { heading: "102(R0)" },
  { heading: "115(R0)" },
  { heading: "126(R0)" },
  { heading: "133(R0)" },
  { heading: "163(R0)" },
  { heading: "245(R0)" },
  { heading: "245(R0)" },
  { heading: "245(R0)" },
  { heading: "245(R0)" }
];

const SampleCard = ({ title, items }) => (
  <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mb-8">
    <h2 className="text-lg font-semibold text-red-600 mb-4">{title}</h2>
    <div className="space-y-3">
      {items.map((sample, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:shadow transition"
        >
          <span className="text-gray-700 font-medium">{sample.heading}</span>
          <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-semibold">
            Download
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Samples = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-10 tracking-wide">
        SAMPLES
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <SampleCard title="Sample - 1" items={samples} />
        <SampleCard title="Sample - 2" items={samples} />
      </div>
    </div>
  );
};

export default Samples;
