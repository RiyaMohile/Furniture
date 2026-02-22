import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../service/api"; 

const Auth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async () => {
  const endpoint = isLogin ? "/auth/login" : "/auth/register";

  try {
    const { data } = await API.post(endpoint, form);

    console.log("Response:", data);

    if (!isLogin) {
      alert("Registered successfully!");
      setIsLogin(true);
      return;
    }

    // Save token + user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/");

  } catch (error) {
    console.error("AUTH ERROR:", error.response?.data?.message);
    alert(error.response?.data?.message || "Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9F1E7]">

      <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-center mt-6 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-600 font-semibold cursor-pointer ml-2"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Auth;