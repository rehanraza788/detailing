import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        {/* About */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-xl mb-3">About Us</h2>
          <p className="text-gray-400 text-sm">
            MetalsAxis Detailing Solutions provides industry leading steel detailing
            services.MetalsAxis Detailing Solutions is an innovative Structural Steel
            Detailing company committed to providing quality steel detailing
            services to the commercial and industrial industry.
          </p>
        </div>
        {/* Services */}
        <div className="flex-1 min-w-[180px]">
          <h2 className="font-bold text-xl mb-3">Our Services</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Structural Steel Detailing</li>
            <li>Miscellaneous Steel Detailing</li>
            <li>Pipe Rack Support Structure</li>
            <li>3D Modeling</li>
          </ul>
        </div>
        {/* Address */}
        <div className="flex-1 min-w-[220px]">
          <h2 className="font-bold text-xl mb-3">Address</h2>
          <p className="text-gray-400 text-sm">
            MetalsAxis Detailing Solutions
            <br />
            New Delhi, India
            <br />
            Ph no. xxxxxxxxxx
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} MetalsAxis Detailing Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
