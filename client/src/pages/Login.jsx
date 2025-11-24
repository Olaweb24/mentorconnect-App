import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const verified = query.get("verified"); // ?verified=true from email link

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // success/error messages

  // ⭐ New: Redirect if already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.role === "student") navigate("/student");
      else if (parsedUser.role === "mentor") navigate("/mentor");
    }
  }, [navigate]);

  useEffect(() => {
    if (verified === "true") {
      setMessage("Email verified successfully! You can now log in.");
    }
  }, [verified]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://mentorconnect-backend-o5mm.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid credentials");

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));

      // Redirect based on role
      if (data.role === "student") navigate("/student");
      else if (data.role === "mentor") navigate("/mentor");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Success/Error message */}
        {message && (
          <div
            className={`mb-4 text-center ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          required
        />

        {/* Forgot Password Link */}
        <div className="mb-4 text-right">
          <button
            type="button"
            className="text-sm text-indigo-600 hover:underline"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <button
            type="button"
            className="text-indigo-600 hover:underline"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
