import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Student Dashboard page
 * This file renders the main content area for students and is intended
 * to be rendered inside DashboardLayout's <Outlet />.
 */
export default function StudentDashboard() {
  const navigate = useNavigate(); 
  // dummy stats — replace with API values later
  const stats = {
    sessions: 3,
    unreadMessages: 5,
    resources: 24,
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">Welcome back</h1>
          <p className="text-sm text-gray-600 mt-1">Here’s what’s happening with your learning</p>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button onClick={() => navigate("home")} // points to Home.jsx route
             className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg"
        >Book session </button>
          
          <button onClick={() => navigate("explore")} // points to Explore page
              className="px-3 py-2 bg-white border rounded-lg"
          > Explore mentors </button>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">My Sessions</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.sessions}</div>
          <div className="text-xs text-gray-400 mt-1">Upcoming + past</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Unread messages</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.unreadMessages}</div>
          <div className="text-xs text-gray-400 mt-1">New replies from mentors</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Resources</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.resources}</div>
          <div className="text-xs text-gray-400 mt-1">Guides, templates & downloads</div>
        </div>
      </div>

      {/* Next session */}
      <section className="bg-white p-6 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Next Session</h2>
            <p className="text-gray-600 mt-1">No upcoming session scheduled.</p>
          </div>
          <div>
            <button className="px-3 py-2 bg-indigo-600 text-white rounded-lg">Book a session</button>
          </div>
        </div>
      </section>

      {/* Recent activity */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-3">Recent Activity</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <div className="font-medium">Mock Interview with Ada</div>
              <div className="text-sm text-gray-500">Nov 25, 2025 — 10:00 AM</div>
            </div>
            <div className="text-sm text-gray-600">Upcoming</div>
          </li>

          <li className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <div className="font-medium">Portfolio Review</div>
              <div className="text-sm text-gray-500">Oct 18, 2025 — Completed</div>
            </div>
            <div className="text-sm text-gray-600">Completed</div>
          </li>
        </ul>
      </section>
    </div>
  );
}
