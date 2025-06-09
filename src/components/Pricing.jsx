import React from "react";

const plans = [
  {
    name: "Basic",
    price: "0.1 SOL",
    features: [
      "5 Resume Templates",
      "PDF Export",
      "Basic Blockchain Storage",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "0.3 SOL",
    features: [
      "20 Premium Templates",
      "Advanced Customization",
      "NFT Certificate",
      "Priority Support",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "0.8 SOL",
    features: [
      "Unlimited Templates",
      "White Label Solution",
      "API Access",
      "Dedicated Support",
    ],
    highlight: false,
  },
];

const Pricing = () => (
  <section className="bg-slate-800 rounded-2xl p-8 mb-16 mx-8">
    <h3 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={
            plan.highlight
              ? "bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 border-2 border-purple-400 transform scale-105"
              : "bg-slate-700 rounded-xl p-6 border border-slate-600"
          }
        >
          {plan.highlight && (
            <div className="bg-purple-400 text-purple-900 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
              {plan.badge}
            </div>
          )}
          <h4 className="text-xl font-semibold mb-4">{plan.name}</h4>
          <div className="text-3xl font-bold mb-4">{plan.price}</div>
          <ul className="space-y-3 mb-6">
            {plan.features.map((f, idx) => (
              <li key={idx} className="flex items-center">
                <span className="material-symbols-outlined text-green-400 text-sm mr-2">check</span>
                {f}
              </li>
            ))}
          </ul>
          <button
            className={
              plan.highlight
                ? "w-full py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                : "w-full py-3 border border-purple-500 rounded-lg hover:bg-purple-500 transition-colors"
            }
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Pricing;