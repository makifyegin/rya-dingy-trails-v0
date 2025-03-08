import React from 'react';

export function Navbar() {
  return (
<nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 p-2 z-10 backdrop-blur-md">      <div className="flex justify-between max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="flex gap-8 text-white">
          <ul className="font-poppins font-light text-base">Rya Dinghy Trails</ul>
          <ul className="font-poppins font-light text-base">Solutions</ul>
          <ul className="font-poppins font-light text-base">Pricing</ul>
          <ul className="font-poppins font-light text-base">Resources</ul>
          <ul className="font-poppins font-light text-base">Enterprise</ul>
          <ul className="font-poppins font-light text-base">What's new</ul>
        </div>

        {/* Right Side */}
              <div className="flex gap-8 text-white items-center">
        {/* Search Destination Input and Button */}

        <div className="flex items-center bg-white bg-opacity-20 rounded-full">
            <input
      type="text"
      placeholder="Where to Sail"
      className="font-poppins font-light text-sm bg-white bg-opacity-20 text-white placeholder-black outline-none px-3 py-1 w-32 rounded-full"
/>    
    <button className="font-poppins font-light text-sm bg-white text-black rounded-full px-3 py-1 hover:bg-gray-100 transition-colors">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>

        {/* Log in */}
        <ul className="font-poppins font-light text-base">Log in</ul>

        {/* Start to Volunteer */}
        <ul className="font-poppins font-light text-base bg-white text-black rounded-full p-1">Start to Volunteer</ul>
      </div>
      </div>
    </nav>
  );
}

