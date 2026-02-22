import React, { useEffect, useState } from "react";
import { ChevronRight, Trash2 } from "lucide-react";
import FeaturesBar from "../featuresBar";
import { useNavigate } from "react-router-dom";
import API from "../../service/api"; 

const CartProduct = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    // Fetch Cart Items
const fetchCart = async () => {
  try {
    const { data } = await API.get("/cart");
    setCartItems(data);
  } catch (error) {
    console.error("Error fetching cart:", error.response?.data);
  }
};

    useEffect(() => {
        fetchCart();
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please login first");
            navigate("/auth");
        }
    }, []);

    // Update Quantity
const updateQuantity = async (id, qty) => {
  if (qty < 1) return;

  await API.put(`/cart/${id}`, { quantity: qty });
  fetchCart();
};

    // Delete Item
const deleteItem = async (id) => {
  await API.delete(`/cart/${id}`);
  fetchCart();
};

    // Safe Subtotal Calculation
    const subtotal = cartItems.reduce((acc, item) => {
        if (!item.product) return acc;
        return acc + item.product.price * item.quantity;
    }, 0);

    return (
        <div>
            <div className="min-h-screen py-15">

                {/* Banner */}
                <div className="relative h-80 flex items-center justify-center">
                    <img
                        src="/photos/shop/banner.png"
                        alt="shop banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/60"></div>

                    <div className="relative text-center">
                        <h1 className="text-6xl font-semibold text-black mb-2">
                            Cart
                        </h1>
                        <p className="text-sm flex justify-center items-center gap-2">
                            <span className="font-semibold text-lg">Home</span>
                            <ChevronRight size={20} />
                            <span className="text-lg">Cart</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-10 pt-3 px-20">

                    {/* LEFT SIDE - CART TABLE */}
                    <div className="col-span-2 bg-white p-6 rounded">

                        {/* Table Header */}
                        <div className="grid grid-cols-5 bg-[#F9F1E7] p-4 text-sm font-semibold text-gray-700 rounded">
                            <p className="col-span-2">Product</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Subtotal</p>
                        </div>

                        {/* Cart Rows */}
                        {cartItems
                            .filter(item => item.product)
                            .map(item => (
                                <div
                                    key={item._id}
                                    className="grid grid-cols-5 items-center p-6 text-sm text-gray-600"
                                >
                                    {/* Product Image + Name */}
                                    <div className="col-span-2 flex items-center gap-4">
                                        <img
                                            src={item.product.src}
                                            alt="product"
                                            className="w-20 h-20 bg-[#F9F1E7] p-2 rounded"
                                        />
                                        <p>{item.product.title}</p>
                                    </div>

                                    {/* Price */}
                                    <p>Rs. {item.product.price.toLocaleString()}</p>

                                    {/* Quantity */}
                                    <div>
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) =>
                                                updateQuantity(item._id, Number(e.target.value))
                                            }
                                            className="w-12 h-8 border text-center rounded"
                                        />
                                    </div>

                                    {/* Subtotal + Delete */}
                                    <div className="flex items-center gap-4">
                                        <p>
                                            Rs. {(item.product.price * item.quantity).toLocaleString()}
                                        </p>
                                        <Trash2
                                            size={18}
                                            className="text-yellow-600 cursor-pointer"
                                            onClick={() => deleteItem(item._id)}
                                        />
                                    </div>
                                </div>
                            ))}

                        {cartItems.length === 0 && (
                            <p className="p-6 text-gray-500">Your cart is empty</p>
                        )}
                    </div>

                    {/* RIGHT SIDE - CART TOTALS */}
                    <div className="py-6">

                        <div className="bg-[#F9F1E7] pt-3 rounded py-7">
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                Cart Totals
                            </h2>

                            <div className="flex justify-between mb-6 px-10 text-sm font-semibold">
                                <p>Subtotal</p>
                                <p className="text-gray-400">
                                    Rs. {subtotal.toLocaleString()}
                                </p>
                            </div>

                            <div className="flex justify-between mb-6 px-10 text-sm font-semibold">
                                <p>Total</p>
                                <p className="text-yellow-600">
                                    Rs. {subtotal.toLocaleString()}
                                </p>
                            </div>

                            <div className="text-center">
                                <button
                                    onClick={() => {
                                        const token = localStorage.getItem("token");

                                        if (!token) {
                                            navigate("/auth");
                                        } else {
                                            navigate("/checkout");
                                        }
                                    }}
                                    className="border border-black px-8 py-2 rounded-lg hover:bg-black hover:text-white transition"
                                >
                                    Check Out
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <FeaturesBar />
        </div>
    );
};

export default CartProduct;