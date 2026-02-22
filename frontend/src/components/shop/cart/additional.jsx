import React, { useState } from "react";

const Additional = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="border-t border-gray-300 ">
      <div className="max-w-7xl mx-auto mt-20 ">

        {/* Tabs */}
        <div className="flex justify-center gap-16">
          <button
            onClick={() => setActiveTab("description")}
            className={`text-lg ${activeTab === "description"
                ? "text-black font-semibold"
                : "text-gray-400"
              }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("additional")}
            className={`text-lg ${activeTab === "additional"
                ? "text-black font-semibold"
                : "text-gray-400"
              }`}
          >
            Additional Information
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`text-lg ${activeTab === "reviews"
                ? "text-black font-semibold"
                : "text-gray-400"
              }`}
          >
            Reviews [5]
          </button>
        </div>

        {/* Description Content */}
        {activeTab === "description" && (
          <div className="mt-10 text-gray-500 leading-relaxed space-y-6 text-center max-w-4xl mx-auto">
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>

            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted hero
              with a well-balanced audio which boasts a clear midrange and extended
              highs for a sound that is both articulate and pronounced.
            </p>

            {/* Images */}
            <div className="flex gap-8 mt-10 justify-center">
              <div className="bg-[#F9F1E7] p-6 rounded-xl">
                <img
                  src="/photos/home/product1.png"
                  alt="sofa"
                  className="w-[450px] object-contain"
                />
              </div>

              <div className="bg-[#F9F1E7] p-6 rounded-xl">
                <img
                  src="/photos/home/product2.png"
                  alt="sofa"
                  className="w-[450px] object-contain"
                />
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        {activeTab === "additional" && (
          <div className="mt-10 text-gray-500 text-center">
            <p>Additional product details will go here.</p>
          </div>
        )}

        {/* Reviews */}
        {activeTab === "reviews" && (
          <div className="mt-10 text-gray-500 text-center">
            <p>Customer reviews section will go here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Additional;