import react from "react";

const Navbar = () => {
    return (
    <nav className="p-4 flex justify-between items-center bg-gray-800 shadow">
    <h1 className="text-2xl font-bold text-teal-400">ResumeChain</h1>
    <button className="bg-teal-500 px-4 py-2 rounded text-white hover:bg-teal-600">
    Connect Wallet
    </button>
    </nav>
    );
};

export default Navbar;