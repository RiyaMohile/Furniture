import React from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ isOpen, setIsOpen }) => {
  const cartItems = [
    {
      id: 1,
      name: "Asgaard sofa",
      price: 250000,
      quantity: 1,
      image: "/photos/home/product1.png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      price: 270000,
      quantity: 1,
      image: "/photos/home/product2.png",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();

  const handleCart = () => {
    setIsOpen(false);
    navigate("/cart");
  };
  const handleComparison = () => {
    setIsOpen(false);
    navigate("/productComparison");
  };
  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 flex flex-col h-full">

          {/* Header */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <X
              size={20}
              className="cursor-pointer "
              onClick={() => setIsOpen(false)}
            />
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto py-6 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-30  rounded-lg object-contain "
                />

                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {item.quantity} ×{" "}
                    <span className="text-yellow-600">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </p>
                </div>

                <X size={16} className="text-white rounded-lg cursor-pointer bg-gray-400 " />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className=" pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-medium">Subtotal</span>
              <span className="text-yellow-600 font-semibold">
                Rs. {subtotal.toLocaleString()}
              </span>
            </div>

            <div className="flex gap-3 border-t py-8 pt-6 pb-1 border-gray-300">
              <button
                onClick={handleCart}
                className="flex-1 border rounded-full py-2 text-sm hover:bg-black hover:text-white transition"
              >
                Cart
              </button>

              <button
                onClick={handleCheckout}
                className="flex-1 border rounded-full py-2 text-sm hover:bg-black hover:text-white transition"
              >
                Checkout
              </button>

              <button
                onClick={handleComparison}
                className="flex-1 border rounded-full py-2 text-sm hover:bg-black hover:text-white transition">
                Comparison
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;