import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");

    if (!token) {
      setMessage("Invalid verification link");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(`https://mentorconnect-backend-o5mm.onrender.com/api/auth/verify-email/${token}`, {
          method: "GET",
        });

        if (res.ok) {
          setMessage("Email verified successfully! Redirecting to login...");
          setTimeout(() => navigate("/login"), 3000); // redirect after 3s
        } else {
          const data = await res.text();
          setMessage(`Verification failed: ${data}`);
        }
      } catch (err) {
        setMessage("Server error: could not verify email");
      }
    };

    verifyEmail();
  }, [location.search, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-xl font-semibold">{message}</h2>
      </div>
    </div>
  );
}
