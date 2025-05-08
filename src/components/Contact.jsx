import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      {/* heading for contact */}
      <div>
        <h1 className="text-center text-4xl font-semibold mt-7 mb-2 text-gray-600">
          Contact
        </h1>
        <hr className=" w-36 m-auto border-2 border-gray-500" />
      </div>
      {/* contact Information */}
      <div className="w-full  sm:mt-24 sm:mb-20 flex  justify-center flex-wrap gap-10 mb-5  ">
        {/* Company details */}
        <div className=" w-[700px] h-full">
          <h2 className="p-2 text-3xl">
            THANK YOU FOR VISITING MILD S SOLUTIONS
          </h2>
          <p className="p-2 text-[15px] font-semibold">
            We hope your visit to our website has been of value. We truely
            appreciate your effort in learning about our steel detailing
            services. If you haven not done so yet, please browse through our
            site to learn more about us and feel free to make any suggestions or
            inquiries. We look forward to assisting you in all your steel
            detailing projects. If you are in need of a quote on a project, have
            any other questions, or need assistance, please do not hesitate to
            contact us. We are eager to hear from you!
          </p>
        </div>
        {/* head Office Details */}
        <div className=" w-72 h-full p-3 ">
          <h1 className="text-xl">Head Office</h1>
          <div>
            <p className="pt-5 text-[16px] text-red-800">
              Arsalan Detailing Services <br /> New Delhi, India <br /> Ph no.
              9199486786
            </p>
            <span className="flex items-center gap-2 text-[16px] text-red-800">
              <MdEmail />
              info@arsalandetailing.com
            </span>
          </div>
        </div>
        {/* Branch Details */}
        <div className=" w-72 h-full p-3">
          <h1 className="text-xl">Branches</h1>
          <p className="pt-5 text-[16px] text-red-800">
            Arsalan Detailing Services <br /> Ranchi ,Jharkhand,India <br /> Ph
            no. 9871088166
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
