import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function DashboardLayout({ role = "student" }) {
  const location = useLocation();

  const mentorMenu = [
    { to: "", label: "Dashboard" },
    { to: "requests", label: "Requests" },
    { to: "chats", label: "Chats" },
    { to: "schedule", label: "Schedule" },
    { to: "profile", label: "Profile" },
  ];

  const studentMenu = [
    { to: "", label: "Home" },
    { to: "home", label: "My Sessions" },
    { to: "chats", label: "Chat" },
    { to: "resources", label: "Resources" },
    { to: "profile", label: "Profile" },
  ];

  const menu = role === "mentor" ? mentorMenu : studentMenu;

  // Get the last part of the URL
  const pathSegment = location.pathname.split("/").filter(Boolean).pop() || "";

  // Find matching menu label
  const currentPage =
    menu.find((m) => m.to === pathSegment)?.label ||
    menu.find((m) => m.to === "")?.label ||
    "Dashboard";

  const user = (() => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  })();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r hidden md:flex flex-col p-6">
        <div className="mb-6">
          <div className="text-2xl font-bold text-indigo-700">MentorConnect</div>
          <div className="text-sm text-gray-500 mt-1">Quality mentorship</div>
        </div>

        <nav className="flex-1 space-y-1">
          {menu.map((m) => {
            const isActive =
              pathSegment === m.to || (m.to === "" && pathSegment === "");

            return (
              <Link
                key={m.to}
                to={m.to}
                className={`block px-4 py-2 rounded-lg transition 
                  ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-semibold"
                      : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }
                `}
              >
                {m.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-6 border-t pt-4">
          <div className="text-sm text-gray-600">Signed in as</div>
          <div className="font-medium mt-1">{user?.name || "Guest"}</div>
          <div className="text-xs text-gray-500">{user?.email || ""}</div>
          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:opacity-95 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-6">
                {/* Dynamic page title */}
                <div className="text-xl font-semibold text-indigo-700">{currentPage}</div>

                <div className="hidden sm:block text-sm text-gray-600">Welcome back 👋</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 hidden sm:block">
                  {user?.role ? user.role.toUpperCase() : ""}
                </div>
                <div className="h-9 w-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                  {user?.name ? user.name.split(" ").map((n) => n[0]).slice(0, 2).join("") : "U"}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 max-w-7xl mx-auto p-6 sm:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
