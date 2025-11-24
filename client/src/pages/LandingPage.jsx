import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
    <div className="text-3xl mb-4">{icon}</div>
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const MentorCard = ({ name, role, expertise, rating }) => (
  <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">
        {name.split(" ").map(n => n[0]).slice(0,2).join("")}
      </div>
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
    <div className="mt-3 text-sm text-gray-600">{expertise}</div>
    <div className="mt-4 inline-flex items-center gap-2 text-sm">
      <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-800 font-semibold">{rating}★</span>
      <span className="text-gray-500">Top Rated Mentor</span>
    </div>
  </div>
);

const FAQItem = ({ q, a, open, onToggle }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    <button
      className="w-full px-6 py-4 flex justify-between items-center text-left"
      onClick={onToggle}
      aria-expanded={open}
    >
      <span className="font-medium">{q}</span>
      <span className="text-lg">{open ? "−" : "+"}</span>
    </button>
    {open && <div className="px-6 pb-6 text-gray-600">{a}</div>}
  </div>
);

export default function LandingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      
      {/* NAV */}
      <header className="max-w-7xl mx-auto p-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white font-bold">SN</div>
          <div className="font-bold text-lg">SkillsNest</div>
        </div>

        <nav className="flex items-center gap-4">
          <button onClick={() => navigate("/login")} className="px-4 py-2 rounded-lg hover:bg-gray-100">Log in</button>
          <button onClick={() => navigate("/register")} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow">Sign up</button>
        </nav>
      </header>

      {/* HERO */}
      <main className="relative flex flex-col items-center justify-center text-center px-6 pt-20 pb-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float3"></div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Connect with Mentors. <br /> Grow your Career.
        </h1>
        <p className="text-lg text-white/90 mb-8 max-w-xl">
          SkillsNest is a platform where students can find experienced mentors, book sessions, chat directly, and access career resources to reach their full potential.
        </p>
        <div className="flex gap-4 justify-center z-10">
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-white/20 border border-white text-white rounded-lg hover:bg-white/30 transition"
          >
            Browse Mentors
          </button>
        </div>
      </main>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <h3 className="text-2xl font-bold mb-6">Why SkillsNest?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="🤝"
            title="One-on-one mentorship"
            desc="Connect with industry professionals for personalized advice and career planning."
          />
          <FeatureCard
            icon="📅"
            title="Easy booking"
            desc="Pick a time that suits you — mentors manage their availability and approve sessions."
          />
          <FeatureCard
            icon="💡"
            title="Resource hub"
            desc="Access CV templates, interview guides, and learning material curated by mentors."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12 bg-gradient-to-b from-white to-gray-50">
        <h3 className="text-2xl font-bold mb-6">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-2xl mb-3">1️⃣ Sign up</div>
            <p className="text-gray-600">Create a free student or mentor account in under a minute.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-2xl mb-3">2️⃣ Find a mentor</div>
            <p className="text-gray-600">Search by expertise, availability, and language to find best-fit mentors.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-2xl mb-3">3️⃣ Book & learn</div>
            <p className="text-gray-600">Book sessions, chat live, and access resources. Rate mentors after sessions.</p>
          </div>
        </div>
      </section>

      {/* MENTOR SPOTLIGHT */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <h3 className="text-2xl font-bold mb-6">Mentor Spotlight</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <MentorCard name="Ada Nwosu" role="Senior Frontend Engineer" expertise="React, UI/UX, Career Coaching" rating="4.9" />
          <MentorCard name="Samuel Okoro" role="Data Scientist" expertise="Machine Learning, Data Analysis" rating="4.8" />
          <MentorCard name="Fatima Bello" role="Product Designer" expertise="Design Systems, Portfolio Reviews" rating="4.7" />
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        <div className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-2xl font-bold">Trusted by thousands</h4>
            <p className="opacity-90 mt-2">Students and mentors across the world use SkillsNest to grow careers.</p>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <div className="text-3xl font-extrabold">10k+</div>
              <div className="text-sm opacity-90">Students</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">5k+</div>
              <div className="text-sm opacity-90">Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">4.8★</div>
              <div className="text-sm opacity-90">Avg mentor rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-12">
        <h3 className="text-2xl font-bold mb-6">Frequently asked questions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FAQItem
            q="Who can join SkillsNest?"
            a="Students, early-career professionals, and experienced mentors — anyone who wants to learn or help others."
            open={openFaq === 0}
            onToggle={() => setOpenFaq(openFaq === 0 ? null : 0)}
          />
          <FAQItem
            q="How do bookings work?"
            a="Students request a session; mentors approve or suggest another time. Both receive email reminders when sessions are confirmed."
            open={openFaq === 1}
            onToggle={() => setOpenFaq(openFaq === 1 ? null : 1)}
          />
          <FAQItem
            q="Is SkillsNest free?"
            a="Signing up and browsing are free. Mentors can set paid session fees later if the platform enables monetization."
            open={openFaq === 2}
            onToggle={() => setOpenFaq(openFaq === 2 ? null : 2)}
          />
          <FAQItem
            q="Can I become a mentor?"
            a="Yes — create a mentor account, complete your profile, and set your availability."
            open={openFaq === 3}
            onToggle={() => setOpenFaq(openFaq === 3 ? null : 3)}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="font-bold text-lg mb-2">SkillsNest</div>
            <p className="text-gray-600 text-sm">Connect with mentors, book sessions, and grow your career.</p>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold mb-2">Company</div>
            <div className="grid gap-2">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Careers</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <div className="font-semibold mb-2">Support</div>
            <div className="grid gap-2">
              <a href="#" className="hover:underline">Help center</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 py-4">© {new Date().getFullYear()} SkillsNest — Built for SDG 4: Quality Education</div>
      </footer>
    </div>
  );
}
