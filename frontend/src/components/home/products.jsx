import React from "react";
import { useNavigate } from "react-router-dom";
import { Share2, BarChart2, Heart } from "lucide-react";
import productsData from "../data/productsData";

const Products = () => {
  const navigate = useNavigate();

  // const products = [
  //   {
  //     src: "/photos/home/product1.png",
  //     title: "Syltherine",
  //     description: "Stylish cafe chair",
  //     price: "₹ 2,500,000",
  //     oldPrice: "₹ 3,500,000",
  //     badge: "New",
  //     badgeColor: "bg-pink-600",
  //   },
  //   {
  //     src: "/photos/home/product2.png",
  //     title: "Leviosa",
  //     description: "Stylish cafe chair",
  //     price: "₹ 2,500,000",
  //     oldPrice: "₹ 3,500,000",
  //     badge: "-30%",
  //     badgeColor: "bg-blue-600",
  //   },
  //   {
  //     src: "/photos/home/product3.png",
  //     title: "Lolito",
  //     description: "Luxury big sofa",
  //     price: "₹ 7,000,000",
  //     oldPrice: "",
  //     badge: "",
  //   },
  //   {
  //     src: "/photos/home/product4.png",
  //     title: "Respira",
  //     description: "Outdoor bar table",
  //     price: "₹ 500,000",
  //     oldPrice: "",
  //     badge: "New",
  //     badgeColor: "bg-pink-600",
  //   },
  // ];

  const goToCart = (slug) => {
    navigate(`/shop/cart/${slug}`);
  };

  return (
    <div className="py-16">
      <h1 className="font-bold text-3xl text-center">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 max-w-7xl mx-auto">

        {productsData.map((product, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={product.src}
                alt={product.title}
                className="object-cover w-full h-64"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center gap-5">

                {/* Add to Cart */}
                <button
                  onClick={() => goToCart(product.slug)}
                  className="bg-white text-yellow-600 font-semibold px-8 py-3 hover:bg-yellow-600 hover:text-white transition"
                >
                  Add to cart
                </button>

                {/* Bottom Options */}
                <div className="flex gap-6 text-white text-sm items-center">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                    <Share2 size={16} /> Share
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                    <BarChart2 size={16} /> Compare
                  </div>

                  <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
                    <Heart size={16} /> Like
                  </div>
                </div>

              </div>

              {/* Badge */}
              {product.badge && (
                <div
                  className={`absolute top-3 right-3 h-10 w-10 rounded-full text-white text-sm flex items-center justify-center ${product.badgeColor}`}
                >
                  {product.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="bg-gray-100 p-4">
              <h3 className="text-lg font-semibold">
                {product.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {product.description}
              </p>

              <p className="font-bold mt-2">
                {product.price}
                {product.oldPrice && (
                  <span className="text-gray-400 text-sm line-through ml-3">
                    {product.oldPrice}
                  </span>
                )}
              </p>
            </div>

          </div>
        ))}

      </div>

      {/* Show More Button */}
      <div className="flex justify-center items-center mt-10">
        <button className="border border-yellow-600 text-yellow-600 px-8 py-2 hover:bg-yellow-600 hover:text-white transition">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Products;