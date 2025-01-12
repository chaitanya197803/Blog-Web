import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          Chaitanya / Blog
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Add a hamburger icon here if desired */}
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

