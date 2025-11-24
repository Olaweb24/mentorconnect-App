import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [mentors, setMentors] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    const fetchMentors = async () => {
      try {
        const res = await axios.get("https://mentorconnect-backend-o5mm.onrender.com/api/mentors", {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setMentors(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMentors();
  }, [user]);

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-indigo-700">
            Welcome back, {user?.name || "Student"}!
          </h1>
          <p className="text-gray-600 mt-1">
            Here’s what’s happening with your learning.
          </p>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Available Mentors</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">
            {mentors.length}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-sm text-gray-500">Messages</div>
          <div className="mt-2 text-2xl font-bold text-indigo-700">5</div>
        </div>
      </div>

      {/* Mentor List */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Available Mentors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentors.length === 0 ? (
            <p className="text-gray-500">No mentors available at the moment.</p>
          ) : (
            mentors.map((mentor) => (
              <div
                key={mentor._id}
                className="bg-white p-4 rounded-xl shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-indigo-700 text-lg">
                    {mentor.user?.name}
                  </h3>
                  <p className="text-gray-500">{mentor.user?.email}</p>
                  <p className="text-gray-400 mt-1">
                    Specialty: {mentor.specialty || "General"}
                  </p>
                  <p className="text-gray-400 mt-1">
                    {mentor.availability?.length > 0
                      ? `Available: ${mentor.availability.length} slots`
                      : "No availability"}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
