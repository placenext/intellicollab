import React from "react";
import Link from "next/link";

const SimpleHeader = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-700">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">IC</span>
          </div>
          <span className="text-xl font-bold text-white">IntelliCollab</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-gray-300 hover:text-purple-400 transition-colors">
            Testimonials
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-md text-white font-medium transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default SimpleHeader;