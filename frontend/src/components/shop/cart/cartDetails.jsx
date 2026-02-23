import React, { useEffect, useState, useMemo } from "react";
import { Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import productsData from "../../data/productsData";
import API from "../../../service/api"; 

const CartDetails = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);


 useEffect(() => {
  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${productName}`);
      setProduct(data);
      setMainImage(data.src);
    } catch (error) {
      console.log("Product not found");
    }
  };

  fetchProduct();
  window.scrollTo(0, 0);
}, [productName]);


const handleCart = async () => {
  try {
    await API.post("/cart/add", {
      productId: product._id,
      quantity
    });

    navigate("/cart");
  } catch (error) {
    console.error("Error adding to cart:", error.response?.data);
  }
};
  const handleComparison = () => {
    navigate("/productComparison");
  };


  const images = useMemo(() => {
    const otherProducts = productsData.filter(
      (item) => item.slug !== productName
    );

    const shuffled = [...otherProducts].sort(() => 0.5 - Math.random());
    const randomImages = shuffled.slice(0, 3).map((item) => item.src);

    return product?.src ? [product.src, ...randomImages] : randomImages;
  }, [productName, product]);

  if (!product) return <div className="p-20 text-xl">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto pt-10 flex gap-16">

      {/* LEFT SECTION */}
      <div className="flex gap-6 py-40 pt-1">

        {/* Thumbnails */}
        <div className="flex flex-col gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="bg-[#F9F1E7] p-3 rounded-lg cursor-pointer"
              onClick={() => setMainImage(img)}
            >
              <img
                src={img}
                alt="thumbnail"
                className="w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Main Image */}
        <div className="bg-[#F9F1E7] p-8 rounded-lg px-0 mx-4">
          <img
            src={mainImage}
            alt="main product"
            className="w-[400px] h-[400px] object-contain mt-3"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex-1">
        <h1 className="text-4xl font-semibold">{product.title}</h1>

        <p className="text-gray-400 text-xl mt-2">
          ₹ {product?.price?.toLocaleString()}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex text-yellow-500">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-2">
            5 Customer Review
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-4 leading-relaxed">
          {product.description}
        </p>

        {/* Size */}
        <div className="mt-6">
          <p className="text-gray-500 mb-2">Size</p>
          <div className="flex gap-3">
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">
              L
            </button>
            <button className="bg-gray-100 px-4 py-2 rounded">XL</button>
            <button className="bg-gray-100 px-4 py-2 rounded">XS</button>
          </div>
        </div>

        {/* Color */}
        <div className="mt-6">
          <p className="text-gray-500 mb-2">Color</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full cursor-pointer"></div>
            <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
            <div className="w-8 h-8 bg-yellow-700 rounded-full cursor-pointer"></div>
          </div>
        </div>

        {/* Quantity + Buttons */}
        <div className="flex gap-4 mt-8">

          <div className="flex items-center border rounded-lg px-4 py-2 gap-6">
            <button
              onClick={() =>
                setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
              }
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button
            className="border rounded-lg px-8 py-3 hover:bg-black hover:text-white transition"
            onClick={handleCart}
          >
            Add To Cart
          </button>

          <button
            className="border rounded-lg px-8 py-3 hover:bg-black hover:text-white transition"
            onClick={handleComparison}
          >
            + Compare
          </button>
        </div>

        {/* Extra Info */}
        <div className="mt-10 border-t border-gray-200 pt-6 max-w-md">

          <div className="flex text-gray-400 text-sm mb-3">
            <span className="w-24">SKU</span>
            <span className="mx-2">:</span>
            <span>SS001</span>
          </div>

          <div className="flex text-gray-400 text-sm mb-3">
            <span className="w-24">Category</span>
            <span className="mx-2">:</span>
            <span>Sofas</span>
          </div>

          <div className="flex text-gray-400 text-sm mb-3">
            <span className="w-24">Tags</span>
            <span className="mx-2">:</span>
            <span>Sofa, Chair, Home, Shop</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartDetails;