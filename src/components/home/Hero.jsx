import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="relative text-center py-16 sm:py-24 bg-gradient-to-b from-green-50 to-white">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
        Groceries delivered in minutes
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Fast and fresh, right to your door.
      </p>
      <div className="mt-8 max-w-xl mx-auto px-4">
        {/* Search Bar - No changes needed, it's already looking good */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input
            type="search"
            placeholder="Search for products..."
            className="w-full p-4 pl-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
