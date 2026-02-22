import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../service/api"; 

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleLogin = async () => {
  try {
    const { data } = await API.post("/auth/login", form);

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/");
  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Login</h1>

      <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />

      <button onClick={handleLogin} className="bg-black text-white px-6 py-2">
        Login
      </button>
    </div>
  );
};

export default Login;