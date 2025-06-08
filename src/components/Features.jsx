import React from "react";

const Features = () => {
  return (
    <section className="py-16 bg-gray-800 text-white text-center px-6">
      <h3 className="text-3xl font-bold mb-10">Features</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h4 className="text-xl font-semibold mb-2">🧾 Tokenized Proofs</h4>
        <p>Each verification is represented as a non-transferable NFT.</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">🔐 Self-Sovereign Identity</h4>
        <p>You own your data, no centralized control or third parties.</p>
      </div>
      <div>
        <h4 className="text-xl font-semibold mb-2">🌐 Web3 Integration</h4>
        <p>Connect with Metamask or WalletConnect to access your credentials.</p>
      </div>
      </div>
    </section>
  );
};

export default Features;