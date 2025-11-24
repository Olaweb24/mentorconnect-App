import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api";
import Card from "../components/Card";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const res = await API.get("/mentors");
        setMentors(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMentors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Available Mentors</h2>
        {mentors.length === 0 ? (
          <p>No mentors found.</p>
        ) : (
          mentors.map((mentor) => (
            <Card key={mentor._id}>
              <h3 className="text-xl font-semibold">{mentor.name}</h3>
              <p>Email: {mentor.email}</p>
              <p>Specialization: {mentor.specialization}</p>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Mentors;
