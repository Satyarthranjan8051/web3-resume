// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601597111158-9ccfe10cdbd1?auto=format&fit=crop&w=1470&q=80')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content on top of background */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ResumeChain</h1>
        <p className="text-xl font-semibold mb-4">Decentralized Resume Verification</p>
        <p className="mb-6 text-sm md:text-base">
          Use blockchain to verify your credentials and experiences. Say goodbye to fake resumes.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition">
          Launch App
        </button>
      </div>
    </section>
  );
};

export default Hero;
