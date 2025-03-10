import React from 'react';
import { Accordion } from '@/components/Accordion';

export default function Home() {
  return (
    <>
      {/* Video Area */}
      <div className="video-area">
        <video
          autoPlay
          muted
          loop
          className="video-component"
        >
          <source src="/sailing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Second Area (Smooth Ocean Background) */}
      <div className="relative bg-black py-16 px-8 rounded-t-3xl z-20 -mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00BFFF] via-[#1E90FF] to-[#48C9B0] opacity-30"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Accordion Component */}
          <Accordion />
        </div>
      </div>

      {/* Optional: Add another section with a smooth ocean feel */}
      <div className="w-full bg-gradient-to-r from-[#00BFFF] via-[#1E90FF] to-[#48C9B0] py-16 px-8 rounded-t-3xl">
        <div className="max-w-3xl mx-auto text-center text-white">
          <p className="mb-6">
            Start exploring the seas with our interactive guide. Learn about
            different topics related to sailing, boating, and more!
          </p>
        </div>
      </div>
    </>
  );
}
