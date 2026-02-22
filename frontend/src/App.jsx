import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar";
import Shop from "./components/shop/shop";
import Home from "./components/home/home";
import Footer from "./components/footer";
import Contact from "./components/contact/contact";
import Cart from "./components/shop/cart/cart";
import ShoppingCart from "./components/home/shoppingCart";
import CartProduct from "./components/shop/cart/cartProduct";
import ProductComparison from "./components/shop/cart/productComparison ";
import Checkout from "./components/shop/cart/checkout";
import OrderSuccess from "./components/shop/cart/orderSuccess";
import Register from "./components/home/register";
import Login from "./components/home/login";
import Auth from "./components/home/auth";

// const Home = () => {
//   return <div className="pt-24 p-10">Home Page</div>;
// };

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Navbar setCartOpen={setCartOpen} />
      <ShoppingCart isOpen={cartOpen} setIsOpen={setCartOpen} />
      {/* <CartProduct/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/cart/:productName"
          element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
        />

        <Route
          path="/cart"
          element={<CartProduct cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/productComparison" element={<ProductComparison />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;