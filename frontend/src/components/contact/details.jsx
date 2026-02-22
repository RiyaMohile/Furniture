import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Details = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* ===== Heading ===== */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          Get In Touch With Us
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
          For More Information About Our Product & Services, Please Feel Free
          To Drop Us An Email. Our Staff Always Be There To Help You Out.
          Do Not Hesitate!
        </p>
      </div>

      {/* ===== Content Section ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* ================= LEFT INFO ================= */}
        <div className="space-y-10">

          {/* Address */}
          <div className="flex gap-4">
            <MapPin className="text-black mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-gray-600 text-sm leading-6">
                236 5th SE Avenue, New York NY10000,
                United States
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-4">
            <Phone className="text-black mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">
                Mobile: +(84) 546-6789
              </p>
              <p className="text-gray-600 text-sm">
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          {/* Working Time */}
          <div className="flex gap-4">
            <Clock className="text-black mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Working Time</h4>
              <p className="text-gray-600 text-sm">
                Monday–Friday: 9:00 – 22:00
              </p>
              <p className="text-gray-600 text-sm">
                Saturday–Sunday: 9:00 – 21:00
              </p>
            </div>
          </div>

        </div>

        {/* ================= RIGHT FORM ================= */}
        <div>
          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="w-full border border-gray-300 rounded-md p-3 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Email address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="w-full border border-gray-300 rounded-md p-3 outline-none"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is an optional"
                className="w-full border border-gray-300 rounded-md p-3 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Hi! I'd like to ask about"
                className="w-full border border-gray-300 rounded-md p-3 outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-600 text-white px-8 py-3 rounded-md hover:bg-yellow-700 transition"
            >
              Submit
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};

export default  Details;