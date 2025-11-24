// pages/student/Explore.jsx
import React from "react";

export default function Explore() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        Explore Mentors
      </h1>
      <p className="text-gray-600 mb-6">
        Browse all available mentors and find the right fit for your learning journey.
      </p>

      {/* Placeholder content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="font-semibold text-lg">Mentor Name</div>
          <div className="text-gray-500 text-sm">Expertise: React, UI/UX</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="font-semibold text-lg">Mentor Name</div>
          <div className="text-gray-500 text-sm">Expertise: Data Science</div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="font-semibold text-lg">Mentor Name</div>
          <div className="text-gray-500 text-sm">Expertise: Product Design</div>
        </div>
      </div>
    </div>
  );
}
