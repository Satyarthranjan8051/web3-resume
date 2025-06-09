import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import CryptoList from "./components/CryptoList";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white" id="webcrumbs">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CryptoList />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;