import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between">
    <div className="font-bold text-lg">MentorConnect</div>
    <div className="space-x-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/mentors" className="hover:underline">Mentors</Link>
      <Link to="/chat" className="hover:underline">Chat</Link>
      <Link to="/resources" className="hover:underline">Resources</Link>
      <Link to="/reviews" className="hover:underline">Reviews</Link>
    </div>
  </nav>
);

export default Navbar;
