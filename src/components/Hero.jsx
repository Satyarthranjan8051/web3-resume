import React from "react";

const Hero = () => (
  <section className="text-center mb-16 px-8">
    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      Build Your Future with Web3 Resumes
    </h2>
    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
      Create professional resumes powered by blockchain technology. Secure,
      verifiable, and owned by you forever.
    </p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
        Create Resume
      </button>
      <button className="px-8 py-4 border border-purple-500 rounded-lg font-semibold hover:bg-purple-500 transition-colors">
        View Templates
      </button>
    </div>
  </section>
);

export default Hero;