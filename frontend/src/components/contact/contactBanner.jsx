import React from "react";
import { ChevronRight } from "lucide-react";

const ContactHeader = () => {
  return (
    <div>
      <div className="relative h-72 flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/photos/shop/banner.png"   // replace with your image path
          alt="shop banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* Text Content */}
        <div className="relative text-center ">
          <h1 className="text-6xl font-semibold text-black mb-2">
            Contact
          </h1>
          <p className="text-sm flex px-12 items-center gap-2">
            <span className="font-semibold text-lg">Home</span>
            <ChevronRight size={20} className="font-semibold" />
            <span className="font-normal text-lg">Contact</span>
          </p>
        </div>
      </div>


    </div>
  );
};

export default ContactHeader;