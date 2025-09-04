"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FlipWordsDemo } from "./FlipWordsDemo";

export function Background() {
  return (
    <div
      className="h-screen w-full bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <div className="max-w-full mx-auto ">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold ">
          <FlipWordsDemo />LMS PORTAL
        </h1>
        <p></p>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to LMS Portal, the best learning management system on the web.
          We provide reliable, scalable, and customizable solutions for
          your educational needs. Whether you&apos;re managing courses,
          tracking student progress, or facilitating communication, CUSAT LMS PORTAL has got you
          covered.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
