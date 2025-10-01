import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="container mx-auto px-4">
      <div
        className="relative bg-cover bg-center rounded-2xl p-8 sm:p-12 text-white h-64 sm:h-72"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/3a/01/16/3a011672222c872980e3953292abba6e.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-2xl"></div>
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl sm:text-5xl font-extrabold">
            Specialty Corner
          </h2>
          <p className="mt-2 sm:mt-4 text-lg">
            Your favourite specialty shop is now online
          </p>
          <button className="mt-6 bg-white text-green-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
            <Link to="/categories">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
