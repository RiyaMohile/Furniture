import React, { useEffect, useState } from "react";
import FeaturesBar from "../featuresBar";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState("bank");

    const [billingDetails, setBillingDetails] = useState({
        firstName: "",
        lastName: "",
        company: "",
        country: "India",
        address: "",
        city: "",
        province: "",
        zip: "",
        phone: "",
        email: "",
        notes: ""
    });

    // Fetch cart
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    navigate("/auth"); // if not logged in redirect
                    return;
                }

                const res = await fetch("http://localhost:5000/api/cart", {
                    headers: {
                        Authorization: token
                    }
                });

                if (!res.ok) {
                    navigate("/auth");
                    return;
                }

                const data = await res.json();
                setCartItems(data);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };

        fetchCart();
    }, [navigate]);

    const total = Array.isArray(cartItems)
        ? cartItems.reduce((acc, item) => {
            if (!item.product) return acc;
            return acc + item.product.price * item.quantity;
        }, 0)
        : 0;

    const handleChange = (e) => {
        setBillingDetails({
            ...billingDetails,
            [e.target.name]: e.target.value
        });
    };

    const handlePlaceOrder = async () => {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                navigate("/auth");
                return;
            }

            const res = await fetch("http://localhost:5000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({
                    billingDetails,
                    paymentMethod
                })
            });

            if (!res.ok) {
                navigate("/auth");
                return;
            }

            navigate("/order-success");
        } catch (error) {
            console.error("Order error:", error);
        }
    };

    return (
        <div>
            <div className="min-h-screen py-15 ">
                <div className="relative h-80 flex items-center justify-center">
                    <img
                        src="/photos/shop/banner.png"
                        alt="shop banner"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-white/60"></div>

                    <div className="relative text-center">
                        <div className="px-40">
                            <img src="photos/logo.png" alt="" className="h-20 w-20" />
                        </div>
                        <h1 className="text-5xl font-semibold text-black mb-2">
                            Checkout
                        </h1>
                        <p className="text-sm flex px-30 items-center gap-2">
                            <span className="font-semibold text-lg">Home</span>
                            <ChevronRight size={20} />
                            <span className="text-lg">Checkout</span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-20 mt-20 px-35">

                    {/* LEFT SIDE — BILLING FORM */}
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Billing details</h2>

                        <form className="space-y-6 text-sm">

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-2 font-semibold">First Name</label>
                                    <input
                                        name="firstName"
                                        onChange={handleChange}
                                        className="w-[180px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-semibold">Last Name</label>
                                    <input
                                        name="lastName"
                                        onChange={handleChange}
                                        className="w-[180px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Company Name (Optional)</label>
                                <input
                                    name="company"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Country / Region</label>
                                <select
                                    name="country"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3 bg-white"
                                >
                                    <option>India</option>
                                    <option>Sri Lanka</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Street address</label>
                                <input
                                    name="address"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Town / City</label>
                                <input
                                    name="city"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Province</label>
                                <input
                                    name="province"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">ZIP code</label>
                                <input
                                    name="zip"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Phone</label>
                                <input
                                    name="phone"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold">Email address</label>
                                <input
                                    name="email"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                            <div>
                                <input
                                    name="notes"
                                    placeholder="Additional information"
                                    onChange={handleChange}
                                    className="w-[490px] h-[70px] border border-2 mt-8 border-gray-300 rounded-lg px-4 py-3"
                                />
                            </div>

                        </form>
                    </div>

                    {/* RIGHT SIDE — ORDER SUMMARY */}
                    <div>
                        <div className="space-y-6 text-sm px-8">

                            <div className="flex justify-between pt-10">
                                <span className="font-semibold text-2xl">Product</span>
                                <span className="font-semibold text-2xl">Subtotal</span>
                            </div>

                            {cartItems.filter(item => item.product).map(item => (
                                <div key={item._id} className="flex justify-between text-gray-600">
                                    <div className="text-xl">
                                        {item.product.title}
                                        <span className="text-black  font-bold"> × {item.quantity}</span>
                                    </div>
                                    <span>
                                        Rs. {(item.product.price * item.quantity).toLocaleString()}
                                    </span>
                                </div>
                            ))}

                            <div className="flex justify-between">
                                <span className="font-semibold text-xl tracking-widest">Subtotal</span>
                                <span>Rs. {total.toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between font-semibold">
                                <span className="tracking-widest text-xl">Total</span>
                                <span className="text-[#B88E2F] font-bold text-2xl">
                                    Rs. {total.toLocaleString()}
                                </span>
                            </div>

                            {/* PAYMENT METHODS */}
                            <div className="space-y-4 pt-6 border-t border-gray-300">

                                <label className="flex items-start gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        checked={paymentMethod === "bank"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="mt-2"
                                    />
                                    <div>
                                        <p className="font-medium text-lg">
                                            Direct Bank Transfer
                                        </p>

                                        {paymentMethod === "bank" && (
                                            <p className="text-gray-400 mt-2 leading-relaxed text-lg">
                                                Make your payment directly to our bank account.
                                                Please use your Order ID as the payment reference.
                                                Your order will not be shipped until the funds
                                                have cleared in our account.
                                            </p>
                                        )}
                                    </div>
                                </label>

                                <label className="flex items-center gap-3">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === "cod"}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span className="font-semibold text-gray-400 text-lg">
                                        Cash On Delivery
                                    </span>
                                </label>

                            </div>

                            <p className="leading-relaxed text-lg">
                                Your personal data will be used to support your
                                experience throughout this website, to manage access
                                to your account, and for other purposes described in our
                                privacy policy.
                            </p>

                            <div className="px-20">
                                <button
                                    onClick={handlePlaceOrder}
                                    className="w-[250px] text-lg border border-black py-3 rounded-lg hover:bg-black hover:text-white transition"
                                >
                                    Place order
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

export default Checkout;