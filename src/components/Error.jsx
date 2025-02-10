import React from "react";
import { NavLink } from "react-router";

const Error = () => {
  return (
    <div className="flex items-center justify-center my-1 bg-gray-100">
      <div className="text-center">
        {/* Error Emoji */}
        <div className="text-8xl mb-4">😕</div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-red-500">404</h1>

        {/* Error Message */}
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <NavLink
          to={"/"}
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 font-medium text-lg rounded-md shadow-md"
        >
          Go Back Home 🏠
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
