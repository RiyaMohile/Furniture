import React from "react";
import ShopHeader from "./banner";
import Products from "../home/products";
import FeaturesBar from "./featuresBar";

const Shop = () => {
  return (
    <div className="pt-24">  {/* space for fixed navbar */}
      <ShopHeader />
      <Products />
      <FeaturesBar />


      {/* Later you can add product grid here */}
      {/* <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-2xl font-semibold">Products Coming Soon...</h2>
      </div> */}
    </div>
  );
};

export default Shop;