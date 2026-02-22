import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../service/api"; 

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

const handleRegister = async () => {
  try {
    const { data } = await API.post("/auth/register", form);

    alert(data.message || "Registered successfully!");
    navigate("/login");

  } catch (error) {
    alert(error.response?.data?.message || "Registration failed");
  }
};

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl font-bold">Register</h1>

            <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
            <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />

            <button onClick={handleRegister} className="bg-black text-white px-6 py-2">
                Register
            </button>
        </div>
    );
};

export default Register;