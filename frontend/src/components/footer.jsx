import React from "react";

const Footer = () => {
  return (
    <footer className=" border-t border-gray-300 border-bold text-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo & Address */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Funiro.</h2>
            <p className="text-gray-500 leading-7 text-sm">
              400 University Drive Suite 200 Coral <br />
              Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-6">Links</h3>
            <ul className="space-y-4 text-black font-medium">
              <li className="cursor-pointer hover:text-gray-600">Home</li>
              <li className="cursor-pointer hover:text-gray-600">Shop</li>
              <li className="cursor-pointer hover:text-gray-600">About</li>
              <li className="cursor-pointer hover:text-gray-600">Contact</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-6">Help</h3>
            <ul className="space-y-4 text-black font-medium">
              <li className="cursor-pointer hover:text-gray-600">
                Payment Options
              </li>
              <li className="cursor-pointer hover:text-gray-600">Returns</li>
              <li className="cursor-pointer hover:text-gray-600">
                Privacy Policies
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-6">Newsletter</h3>

            <div className="flex items-center border-b border-black max-w-xs">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-transparent outline-none text-sm py-2 w-full"
              />
              <button className="text-black text-sm font-semibold ml-3 hover:text-gray-600">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-16 pt-6 text-sm text-gray-600">
          2023 furino. All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;