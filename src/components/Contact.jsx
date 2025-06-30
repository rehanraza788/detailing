import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-700 mb-2">
          Contact Us
        </h1>
        <hr className="w-36 m-auto border-2 border-gray-400" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Company Message */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Thank You for Visiting Metal Works Detailing Solutions
          </h2>
          <p className="text-gray-700 mb-2">
            We hope your visit to our website has been of value. We truly
            appreciate your effort in learning about our steel detailing
            services.
          </p>
          <p className="text-gray-700 mb-2">
            Please browse through our site to learn more about us and feel free
            to make any suggestions or inquiries. We look forward to assisting
            you in all your steel detailing projects.
          </p>
          <p className="text-gray-700">
            If you need a quote, have questions, or need assistance, please do
            not hesitate to contact us. We are eager to hear from you!
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-8">
          {/* Head Office */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Head Office
            </h3>
            <p className="text-gray-700 mb-2">
              Arsalan Detailing Services
              <br />
              New Delhi, India
              <br />
              Ph no. 9199486786
            </p>
            <div className="flex items-center gap-2 text-blue-700">
              <MdEmail />
              <span>info@arsalandetailing.com</span>
            </div>
          </div>
          {/* Branch */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Branch</h3>
            <p className="text-gray-700">
              Arsalan Detailing Services
              <br />
              Ranchi, Jharkhand, India
              <br />
              Ph no. 9871088166
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
