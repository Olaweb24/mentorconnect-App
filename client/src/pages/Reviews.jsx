import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api";
import Card from "../components/Card";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await API.get("/reviews");
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  const submitReview = async () => {
    if (!text) return;
    try {
      const res = await API.post("/reviews", { text });
      setReviews((prev) => [...prev, res.data]);
      setText("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a review..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={submitReview}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
        {reviews.map((r) => (
          <Card key={r._id}>
            <p>{r.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
