import React from "react";
import { Navigate } from "react-router-dom";

// Props:
// - children: component to render if allowed
// - role: required role for the route
// - user: current logged-in user object
export default function ProtectedRoute({ children, role, user }) {
  // ⭐ Wait until user is loaded from localStorage
  if (user === null) {
    return null; // or a loading spinner if you want
  }

  if (!user) {
    // not logged in
    return <Navigate to="/login" />;
  }

  if (role && user.role !== role) {
    // user role does not match
    return <Navigate to="/" />;
  }

  return children;
}
