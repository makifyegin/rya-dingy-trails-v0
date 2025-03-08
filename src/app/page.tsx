import React from 'react';

export default function Home() {
  return (
    <>
      {/* Video Area */}
      <div className="h-[90vh] bg-gray-900 flex items-center justify-center overflow-hidden relative z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="/sailing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for Smooth Transition */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </div>

      {/* Second Area (Seamless Section) */}
      <div className="w-full bg-black py-16 px-8 rounded-t-3xl relative z-20 -mt-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your New Adventure Starts Here!
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Our trails are designed to show you how to get the most out of your dinghy and enjoy a day on the water exploring some of our glorious countryside. All of our trails have used <strong className="text-blue-400">local knowledge</strong> so that you can get the best out of your day on the water.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            For the <strong className="text-blue-400">less experienced</strong>, along with some easier trails, we have a range of courses that will upskill your knowledge and help you gain confidence. The more experienced dinghy cruiser can challenge themselves with some of our <strong className="text-blue-400">longer trips</strong>.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            We hope that you enjoy your days on the water - don't forget to let us know how you get on! If you have a trail that you would like to share some top tips, remember to fill in our form.
          </p>
        </div>
      </div>
    </>
  );
}