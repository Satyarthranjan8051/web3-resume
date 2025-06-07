import React from "react";

const Features = () => {
  return (
    <section className="py-16 px-4 grid gap-8 md:grid-cols-3 text-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">Tokenized Proofs</h3>
        <p>Each verification is represented as a non-transferable NFT.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">Self-Sovereign Identity</h3>
        <p>You own your data, no centralized control or third parties.</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-teal-400">Web3 Integration</h3>
        <p>Connect with Metamask or WalletConnect to access your credentials.</p>
      </div>
    </section>
  );
};

export default Features;