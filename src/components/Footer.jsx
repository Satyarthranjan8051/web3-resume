import React from "react";

const Footer = () => (
  <footer className="mt-16 pt-8 border-t border-slate-700 px-8 pb-8">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-sm">link</span>
          </div>
          <span className="font-bold">ResumeChain</span>
        </div>
        <p className="text-gray-400">The future of professional resumes on the blockchain.</p>
      </div>
      <div>
        <h5 className="font-semibold mb-3">Product</h5>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-3">Resources</h5>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-3">Company</h5>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
      <p>&copy; 2024 ResumeChain. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;