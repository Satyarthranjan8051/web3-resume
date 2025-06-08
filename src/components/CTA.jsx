import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-black text-center text-white px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-6">Get Verified on Chain</h3>
      <p className="mb-6 text-lg">Mint your proof-of-work resume now.</p>
      <button className="bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 font-semibold text-white rounded">
        Get Started
      </button>
    </section>
  );
};

export default CTA;