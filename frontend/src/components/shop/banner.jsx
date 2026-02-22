import React from "react";
import { SlidersHorizontal, LayoutGrid, List, ChevronRight } from "lucide-react";

const ShopHeader = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
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
            Shop
          </h1>
          <p className="text-sm flex px-12 items-center gap-2">
            <span className="font-semibold text-lg">Home</span>
            <ChevronRight size={20} className="font-semibold" />
            <span className="font-normal text-lg">Shop</span>
          </p>
        </div>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="bg-[#F9F1E7] py-5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

          {/* Left Section */}
          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-2 cursor-pointer">
              <SlidersHorizontal size={18} />
              <span>Filter</span>
            </div>

            <LayoutGrid size={18} className="cursor-pointer" />
            <List size={18} className="cursor-pointer" />

            <div className="h-6 w-px bg-gray-400"></div>

            <p className="text-gray-700">
              Showing 1–16 of 32 results
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6 text-sm">

            <div className="flex items-center gap-3">
              <span>Show</span>
              <input
                type="number"
                defaultValue="16"
                className="w-14 h-10 text-center border border-gray-300 bg-white outline-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <span>Sort by</span>
              <select className="h-10 px-4 border border-gray-300 bg-white outline-none">
                <option>Default</option>
                <option>Price</option>
                <option>Newest</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;