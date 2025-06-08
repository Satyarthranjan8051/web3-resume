import react from "react";

const Navbar = () => {
    return (
    <nav className="bg-gray-900 sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold text-white">ResumeChain</h1>
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition">
    Connect Wallet
    </button>
    </nav>
    );
};

export default Navbar;