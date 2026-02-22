import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../../service/api";   

const OrderSuccess = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);

useEffect(() => {
  window.scrollTo(0, 0);

  const fetchLatestOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/auth");
        return;
      }

      const { data } = await API.get("/orders");

      if (data.length > 0) {
        setOrder(data[data.length - 1]);
      }

    } catch (error) {
      console.error("Error fetching order:", error.response?.data);
      navigate("/auth");
    }
  };

  fetchLatestOrder();
}, [navigate]);

    if (!order) {
        return (
            <div className="h-screen flex items-center justify-center text-xl">
                Loading Order...
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F1E7] text-center px-4">

            <h1 className="text-4xl font-bold text-green-600">
                🎉 Order Placed Successfully!
            </h1>

            <div className="mt-6 space-y-2">
                {order.items.map((item, index) => (
                    <p key={index} className="text-lg">
                        {item.product?.title} × {item.quantity}
                    </p>
                ))}

                <p className="text-xl font-semibold mt-4">
                    Total: Rs. {order.totalAmount.toLocaleString()}
                </p>
            </div>

            <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition"
            >
                Continue Shopping
            </button>

        </div>
    );
};

export default OrderSuccess;