import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-blue-400 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-6">Your Health Record System</h1>
        <p className="text-lg mb-8">Access your health records anytime, anywhere.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white py-2 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
