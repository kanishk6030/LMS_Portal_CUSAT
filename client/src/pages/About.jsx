// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="relative w-full h-screen bg-background  py-16 px-6 md:px-20" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          About Our LMS
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          Our Learning Management System (LMS) is designed to simplify education
          for students and faculty. It provides access to <span className="font-semibold">semester notes, 
          previous year question papers, and attendance records</span>. Faculty 
          can upload study material with ease, while students can find everything 
          they need in one place. The goal is to create a centralized and 
          user-friendly portal for our university community.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Notes Access</h3>
            <p className="text-gray-400">
              Download semester-wise notes shared by faculty and seniors.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-3">Attendance</h3>
            <p className="text-gray-400">
              Track and manage attendance records easily and securely.
            </p>
          </div>
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] shadow-lg">
            <h3 className="text-xl font-semibold text-gray-300 mb-3">PYQs</h3>
            <p className="text-gray-400">
              Access previous year question papers to prepare effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
