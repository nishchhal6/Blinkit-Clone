import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          BlinkitClone
        </Link>
        <nav>
          <Link to="/" className="text-gray-600 hover:text-green-600 mx-2">
            Home
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-green-600 mx-2">
            Cart
          </Link>
          {/* We'll make this a link later */}
          <a href="#" className="text-gray-600 hover:text-green-600 mx-2">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
