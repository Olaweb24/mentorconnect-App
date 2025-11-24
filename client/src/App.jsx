import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

// Mentor pages
import MentorDashboard from "./pages/mentor/Dashboard";
import Requests from "./pages/mentor/Requests";
import MentorChats from "./pages/mentor/Chats";
import Schedule from "./pages/mentor/Schedule";
import MentorProfile from "./pages/mentor/Profile";

// Student pages
import StudentDashboard from "./pages/student/Dashboard";
import Home from "./pages/student/Home";
import MySessions from "./pages/student/MySessions";
import StudentChats from "./pages/student/Chats";
import Explore from "./pages/student/Explore";
import Resources from "./pages/student/Resources";
import StudentProfile from "./pages/student/Profile";

import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

// ⭐ Socket import
import { socket } from "./socket";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        // ⭐ Connect socket after login
        if (parsedUser._id) {
          socket.connect();
          socket.emit("register", parsedUser._id);
        }
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Landing & Auth */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Mentor dashboard with nested routes */}
        <Route
          path="/mentor"
          element={
            <ProtectedRoute user={user} role="mentor">
              <DashboardLayout role="mentor" />
            </ProtectedRoute>
          }
        >
          <Route index element={<MentorDashboard />} />
          <Route path="requests" element={<Requests />} />
          <Route path="chats" element={<MentorChats />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="profile" element={<MentorProfile />} />
        </Route>

        {/* Student dashboard with nested routes */}
        <Route
          path="/student"
          element={
            <ProtectedRoute user={user} role="student">
              <DashboardLayout role="student" />
            </ProtectedRoute>
          }
        >
          <Route index element={<StudentDashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="my-sessions" element={<MySessions />} />
          <Route path="chats" element={<StudentChats />} />
          <Route path="explore" element={<Explore />} />
          <Route path="resources" element={<Resources />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
