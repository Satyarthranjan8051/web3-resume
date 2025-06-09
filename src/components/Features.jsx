import React from "react";

const features = [
	{
		icon: "security",
		bg: "bg-purple-500",
		title: "Blockchain Verified",
		desc: "Your resume is stored securely on the blockchain, making it tamper-proof and verifiable.",
	},
	{
		icon: "palette",
		bg: "bg-blue-500",
		title: "Professional Templates",
		desc: "Choose from our collection of modern, ATS-friendly resume templates.",
	},
	{
		icon: "currency_bitcoin",
		bg: "bg-green-500",
		title: "Crypto Payments",
		desc: "Pay with your favorite cryptocurrency including Solana, Ethereum, and more.",
	},
];

const Features = () => (
	<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-8">
		{features.map((f, i) => (
			<div
				key={i}
				className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors"
			>
				<div
					className={`w-12 h-12 ${f.bg} rounded-lg flex items-center justify-center mb-4`}
				>
					<span className="material-symbols-outlined text-white">{f.icon}</span>
				</div>
				<h3 className="text-xl font-semibold mb-3">{f.title}</h3>
				<p className="text-gray-300">{f.desc}</p>
			</div>
		))}
	</section>
);

export default Features;