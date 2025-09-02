// client/src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "/client/src";

const features = [
  { name: 'Course Management', description: 'Create, update, and enroll in courses.', link: '/courses' },
  { name: 'Assignments & Submissions', description: 'Upload, track, and review assignments.', link: '/assignments' },
  { name: 'Notes & Resources', description: 'Share and access study materials.', link: '/resources' },
  { name: 'Discussion Forum', description: 'Interact with students and faculty.', link: '/forum' },
  { name: 'User Dashboard', description: 'View your progress and deadlines.', link: '/dashboard' },
  { name: 'Authentication', description: 'Login for students and faculty.', link: '/login' },
];

const HomePage = () => {
  return (
    <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          LMS Portal CUSAT
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm relative z-10">
          Welcome to the official Learning Management System. We provide reliable, scalable, and customizable solutions for your academic needs.
        </p>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative z-10">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={index} 
              className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg hover:bg-neutral-800 transition-colors text-left"
            >
              <h3 className="text-xl font-semibold mb-2 text-neutral-200">{feature.name}</h3>
              <p className="text-neutral-400 text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default HomePage;