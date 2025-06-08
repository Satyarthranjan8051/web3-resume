import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col justify-center items-center text-center px-4">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Decentralized Resume Verification
      </h2>
      <p className="text-lg mb-6 max-w-xl">
        Use blockchain to verify your credentials and experiences. Say goodbye to fake resumes.
      </p>
      <button className="bg-indigo-600 hower:bg-indigo-700 transition px-6 py-3 text-white font-semibold rounded-lg animate-bounce">
        Launch App
      </button>
    </section>
  );
};

export default Hero;