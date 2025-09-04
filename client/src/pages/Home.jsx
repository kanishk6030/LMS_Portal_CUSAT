import React from 'react';
import { Parallax } from "react-scroll-parallax";
import { Background } from "../components/Background"; // Corrected Path

import Announcements from '../components/Announcements'; // Corrected Path

// Mock data - later this will come from your API


const recentAnnouncements = [
  { id: 1, title: 'Mid-term Exam Schedule Released', content: 'The schedule for the upcoming mid-term examinations has been published.', date: 'September 5, 2025' },
  { id: 2, title: 'Holiday Declared on Monday', content: 'The college will remain closed on Monday on account of a local festival.', date: 'September 4, 2025' },
  { id: 3, title: 'Guest Lecture on AI', content: 'A guest lecture on "The Future of Artificial Intelligence" is scheduled for this Friday.', date: 'September 3, 2025' },
];


function Home() {
  return (
    <>
      <section className="relative h-screen z-40">
        <Parallax>
          <Background />
        </Parallax>
      </section>

      <div className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-7xl mx-auto">


          {/* Recent Announcements Section */}
          <section>
            <h2 className="section-title"  style={{ animationDelay: '0.5s' }}>Recent Announcements</h2>
            <Announcements announcements={recentAnnouncements} />
          </section>

        </div>
      </div>
    </>
  )
}

export default Home;

