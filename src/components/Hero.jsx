import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold mb-4">
        Decentralized Resume Verification
      </h2>
      <p className="text-lg mb-6 max-w-xl mx-auto">
        Use blockchain to verify your credentials and experiences. Say goodbye to fake resumes.
      </p>
      <button className="bg-teal-500 px-6 py-3 rounded text-white text-lg hover:bg-teal-600">
        Launch App
      </button>
    </section>
  );
};

export default Hero;