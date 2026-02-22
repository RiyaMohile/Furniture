import React, { useState, useRef, useEffect } from "react";
import { Heart, Search, User, ShoppingCart } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ setCartOpen }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUserClick = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
      return;
    }

    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setShowDropdown(false);
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-16 py-5 z-50 bg-white">

      {/* Logo */}
      <div className="flex items-center">
        <img src="photos/logo.png" alt="" className="h-17 w-15" />
        <h1 className="text-4xl font-bold">Furniro</h1>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex gap-20 font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? "font-bold text-lg" : "hover:text-gray-500 transition"
            }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop" className={({ isActive }) =>
              isActive ? "font-bold text-lg" : "hover:text-gray-500 transition"
            }>
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? "font-bold text-lg" : "hover:text-gray-500 transition"
            }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="flex gap-10 items-center relative">

        {/* USER ICON */}
        <div ref={dropdownRef} className="relative">
          <User
            size={24}
            className="cursor-pointer"
            onClick={handleUserClick}
          />

          {showDropdown && user && (
            <div className="absolute right-0 mt-4 w-60 bg-white shadow-lg rounded-xl p-5 border">

              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-gray-500 text-sm mb-4">{user.email}</p>

              <button
                onClick={handleLogout}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Logout
              </button>

            </div>
          )}
        </div>

        <Search size={24} className="cursor-pointer" />
        <Heart size={24} className="cursor-pointer" />

        <ShoppingCart
          size={24}
          className="cursor-pointer"
          onClick={() => setCartOpen(true)}
        />

      </div>
    </nav>
  );
};

export default Navbar;