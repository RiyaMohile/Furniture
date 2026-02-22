import React from "react";
import { Trophy, BadgeCheck, Truck, Headphones } from "lucide-react";

const FeaturesBar = () => {
  return (
    <div className="bg-[#F9F1E7] py-15">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* High Quality */}
        <div className="flex items-start gap-4">
          <Trophy size={40} className="text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              High Quality
            </h3>
            <p className="text-sm text-gray-500">
              crafted from top materials
            </p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-start gap-4">
          <BadgeCheck size={40} className="text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Warranty Protection
            </h3>
            <p className="text-sm text-gray-500">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-start gap-4">
          <Truck size={40} className="text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              Free Shipping
            </h3>
            <p className="text-sm text-gray-500">
              Order over 150 $
            </p>
          </div>
        </div>

        {/* 24 / 7 Support */}
        <div className="flex items-start gap-4">
          <Headphones size={40} className="text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg text-gray-800">
              24 / 7 Support
            </h3>
            <p className="text-sm text-gray-500">
              Dedicated support
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturesBar;