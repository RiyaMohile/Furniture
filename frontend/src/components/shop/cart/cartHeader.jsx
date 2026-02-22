import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";
import React from "react";

const CartHeader = () => {
  const {productName}=useParams();
  return (
    <div className="pt-24">
      <div className="bg-[#F9F1E7] py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center text-sm text-gray-600">
          <span className="cursor-pointer hover:text-black">
            Home
          </span>
          <ChevronRight size={20} className="mx-3 " />
          <span className="cursor-pointer hover:text-black">
            Shop
          </span>
          <ChevronRight size={20} className="mx-3 " />
          <div className="h-8 w-px bg-gray-400 mx-6"></div>
          <span className="text-black text-2xl">
            {productName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;