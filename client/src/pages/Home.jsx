import React from "react";
import { Parallax } from "react-scroll-parallax";
import { Background } from "../components/Background"; // Corrected Path

import Announcements from "../components/Announcements"; // Corrected Path
import QuoteWidget from "../components/QuoteWidget";


// Mock data - later this will come from your API
// Recent Announcements Data
const recentAnnouncements = [
  {
    id: 1,
    title: "Mid-term Exam Schedule Released",
    content:
      "The schedule for the upcoming mid-term examinations has been published.",
    date: "September 5, 2025",
  },
  {
    id: 2,
    title: "Holiday Declared on Monday",
    content:
      "The college will remain closed on Monday on account of a local festival.",
    date: "September 4, 2025",
  },
  {
    id: 3,
    title: "Guest Lecture on AI",
    content:
      'A guest lecture on "The Future of Artificial Intelligence" is scheduled for this Friday.',
    date: "September 3, 2025",
  },
];

function Home() {
  return (
    <>
      <section className="relative h-screen z-40">
        <Parallax>
          <Background />
        </Parallax>
      </section>

      {/* <div className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto"> */}
      {/* Recent Announcements Section */}
      <section className="border  w-full h-screen bg-[#0a0a0a]">
        <div className="relative z-10 w-full h-full flex">
          <div className="wrapper1 w-[50%] h-full flex items-center justify-center ">
            <div className="max-w-md px-2 sm:px-6 lg:px-8 py-8  rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] shadow-lg">
              <QuoteWidget />
            </div>
          </div>
          <div className="wrapper2 w-[50%] h-full flex flex-col items-center justify-center">
            <h2
              className="section-title text-center text-white mb-10 text-3xl font-sans font-bold"
              style={{ animationDelay: "0.5s" }}
            >
              Recent Announcements
            </h2>
              <Announcements announcements={recentAnnouncements} />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            </div>
          </div>
        </div>
      </section>

      <section>
        <Parallax>
          <div className="w-full h-screen bg-background">
          </div>
        </Parallax>
      </section>
    </>
  );
}

export default Home;
