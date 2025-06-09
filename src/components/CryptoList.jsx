import React from "react";

const cryptos = [
  {
    name: "Solana",
    icon: "https://img.icons8.com/color/48/solana.png",
  },
  {
    name: "Ethereum",
    icon: "https://img.icons8.com/color/48/ethereum.png",
  },
  {
    name: "Bitcoin",
    icon: "https://img.icons8.com/color/48/bitcoin--v1.png",
  },
  {
    name: "Polygon",
    icon: "https://img.icons8.com/color/48/polygon.png",
  },
];

const CryptoList = () => (
  <section className="text-center mb-16 px-8">
    <h3 className="text-3xl font-bold mb-8">Supported Cryptocurrencies</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {cryptos.map((c, i) => (
        <div key={i} className="flex items-center space-x-3 bg-slate-800 px-6 py-3 rounded-lg">
          <img src={c.icon} alt={c.name} className="w-6 h-6" />
          <span className="font-semibold">{c.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CryptoList;