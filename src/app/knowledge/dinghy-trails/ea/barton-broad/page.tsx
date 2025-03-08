import React from 'react';

export default function BartonBroad() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-16">
      {/* mt-16 adds margin-top to account for the Navbar height */}
      <header className="bg-blue-500 text-white p-4 w-full text-center">
        <h1 className="text-2xl font-bold">Barton Broad</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <p className="text-lg text-gray-700">
          Welcome to Barton Broad! This is a simple flex layout example.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Click Me
        </button>
      </main>
    </div>
  );
}