import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        });

        const data = await res.json();
        alert(data.message);

        if (res.ok) navigate("/login");
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