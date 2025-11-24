import React from "react";

/**
 * Mentor Dashboard page
 * This file renders the main content area for mentors and is intended
 * to be rendered inside DashboardLayout's <Outlet />.
 */
export default function MentorDashboard() {
  // You can replace the dummy numbers with real API data later
  const stats = {
    pendingRequests: 12,
    upcomingSessions: 4,
    totalStudents: 28,
    unreadMessages: 7,
  };

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-indigo-700">Mentor Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Overview of your mentoring activity</p>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <button className="px-3 py-2 bg-indigo-50 text-indigo-700 rounded-lg">Create session</button>
          <button className="px-3 py-2 bg-white border rounded-lg">Settings</button>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Pending requests</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.pendingRequests}</div>
          <div className="text-xs text-gray-400 mt-1">Requests awaiting your response</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Upcoming sessions</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.upcomingSessions}</div>
          <div className="text-xs text-gray-400 mt-1">Next 7 days</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Total students</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.totalStudents}</div>
          <div className="text-xs text-gray-400 mt-1">Connections on platform</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Unread messages</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">{stats.unreadMessages}</div>
          <div className="text-xs text-gray-400 mt-1">Messages from students</div>
        </div>
      </div>

      {/* Recent requests (example list) */}
      <section className="bg-white p-6 rounded-xl shadow">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Requests</h2>
          <div className="text-sm text-gray-500">Latest 5</div>
        </div>

        <ul className="space-y-3">
          <li className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <div className="font-medium">Jane Doe</div>
              <div className="text-sm text-gray-500">Frontend interview prep · React</div>
            </div>
            <div className="text-sm text-gray-600">2 hours ago</div>
          </li>

          <li className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <div className="font-medium">Samuel Okoro</div>
              <div className="text-sm text-gray-500">Portfolio review</div>
            </div>
            <div className="text-sm text-gray-600">1 day ago</div>
          </li>

          <li className="flex items-center justify-between p-3 rounded-lg border">
            <div>
              <div className="font-medium">Fatima Bello</div>
              <div className="text-sm text-gray-500">Resume & CV review</div>
            </div>
            <div className="text-sm text-gray-600">2 days ago</div>
          </li>
        </ul>
      </section>

      {/* Quick actions */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">Create Quick Session</h3>
          <p className="text-sm text-gray-500 mt-2">Schedule a one-off session quickly for students who need immediate help.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Create session</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">Open Requests</h3>
          <p className="text-sm text-gray-500 mt-2">View all pending requests and approve or reschedule.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg">View requests</button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold">Messages</h3>
          <p className="text-sm text-gray-500 mt-2">Continue conversations with your students.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg">Open chats</button>
          </div>
        </div>
      </section>
    </div>
  );
}
