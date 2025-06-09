import React from "react";

const Navbar = () => (
  <header className="flex justify-between items-center mb-12 px-8 py-8">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
        <span className="material-symbols-outlined text-white text-xl">link</span>
      </div>
      <h1 className="text-2xl font-bold">ResumeChain</h1>
    </div>
    <nav className="hidden md:flex space-x-8">
      <a href="#" className="hover:text-purple-400 transition-colors">Features</a>
      <a href="#" className="hover:text-purple-400 transition-colors">Pricing</a>
      <a href="#" className="hover:text-purple-400 transition-colors">About</a>
    </nav>
    <div className="flex items-center space-x-4">
      <button className="px-4 py-2 border border-purple-500 rounded-lg hover:bg-purple-500 transition-colors">
        Sign In
      </button>
      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all">
        Get Started
      </button>
    </div>
  </header>
);

export default Navbar;