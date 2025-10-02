import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import AccountDropdown from "../ui/AccountDropdown";
import {
  FiShoppingCart,
  FiChevronDown,
  FiSearch,
  FiMapPin,
  FiUser, // Responsive Change: Added User Icon for mobile
} from "react-icons/fi";

const Header = ({ onLoginClick }) => {
  const { isLoggedIn } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isLocationOpen, setLocationOpen] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [locationRef]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- MOBILE HEADER (visible below md breakpoint) --- */}
        <div className="md:hidden py-3">
          <div className="flex flex-col gap-3">
            {/* Top Row: Location and Profile Icon */}
            <div className="flex justify-between items-center">
              {/* Location */}
              <div ref={locationRef} className="relative">
                <div
                  onClick={() => setLocationOpen(!isLocationOpen)}
                  className="flex items-center cursor-pointer group"
                >
                  <div>
                    <div className="font-bold text-md text-gray-800">
                      Delivery in 11 minutes
                    </div>
                    <div className="flex items-center text-sm text-gray-500 group-hover:text-green-600">
                      <span className="truncate w-52">
                        668, Sector8, Sector III, Avas Vi...
                      </span>
                      <FiChevronDown
                        className={`ml-1 flex-shrink-0 transition-transform duration-200 ${
                          isLocationOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Icon */}
              {isLoggedIn ? (
                <Link to="/account" className="p-2">
                  <FiUser size={26} className="text-gray-700" />
                </Link>
              ) : (
                <button onClick={onLoginClick} className="p-2">
                  <FiUser size={26} className="text-gray-700" />
                </button>
              )}
            </div>

            {/* Bottom Row: Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder='Search "chips"'
                className="w-full bg-gray-100 border-transparent rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>

        {/* --- DESKTOP HEADER (hidden below md breakpoint) --- */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo and Location Section */}
          <div className="flex items-center divide-x divide-gray-200">
            <Link to="/" className="text-5xl font-bold tracking-tighter pr-6">
              <span className="text-yellow-400">blink</span>
              <span className="text-green-600">it</span>
            </Link>
            <div className="relative hidden lg:block pl-6">
              {/* ... Original Desktop Location Dropdown ... */}
              {/* This is the same code as before, no changes needed here */}
              <div>
                <div className="font-bold text-lg text-gray-800">
                  Delivery in 10 minutes
                </div>
                <div className="flex items-center text-gray-500">
                  <span>668, Sector8, Sector III, Avas Vi...</span>
                  <FiChevronDown className="ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar (Centered) */}
          <div className="hidden lg:block flex-1 max-w-xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="search"
                placeholder='Search for "chips"'
                className="w-full bg-gray-100 border-transparent rounded-lg py-3 pl-12 pr-4"
              />
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-6">
            {isLoggedIn ? (
              <div
                className="relative"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className="flex items-center gap-1 text-base font-semibold text-gray-700"
                >
                  Account
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && <AccountDropdown />}
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="text-base font-semibold text-gray-700 hover:text-green-600"
              >
                Login
              </button>
            )}
            <Link
              to="/cart"
              className="flex items-center bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-700"
            >
              <FiShoppingCart size={25} />
              <div className="ml-2 text-left">
                {totalItems > 0 ? (
                  <>
                    <span className="text-sm -mb-1.5 block">
                      {totalItems} {totalItems > 1 ? "Items" : "Item"}
                    </span>
                    <span className="text-base">₹{totalPrice.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-sm">My Cart</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
