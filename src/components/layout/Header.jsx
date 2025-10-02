import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext"; // 2. User context import kiya
import AccountDropdown from "../ui/AccountDropdown";
import {
  FiShoppingCart,
  FiChevronDown,
  FiSearch,
  FiMapPin,
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

  // This hook handles clicks outside of the dropdown to close it
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
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Location Section */}
            <div className="flex items-center divide-x divide-gray-200">
              <Link to="/" className="text-5xl font-bold tracking-tighter pr-6">
                <span className="text-yellow-400">blink</span>
                <span className="text-green-600">it</span>
              </Link>

              {/* --- NEW LOCATION DROPDOWN --- */}
              <div ref={locationRef} className="relative hidden md:block pl-6">
                <div
                  onClick={() => setLocationOpen(!isLocationOpen)}
                  className="flex items-center cursor-pointer group"
                >
                  <div>
                    <div className="font-bold text-lg text-gray-800">
                      Delivery in 10 minutes
                    </div>
                    <div className="flex items-center text-gray-500 group-hover:text-green-600">
                      <span>668, Sector8, Sector III, Avas Vi...</span>
                      <FiChevronDown
                        className={`ml-1 transition-transform duration-200 ${
                          isLocationOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
                {/* The Dropdown Menu */}
                {isLocationOpen && (
                  <div className="absolute top-full mt-4 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <div className="relative">
                        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search for area, street name.."
                          className="w-full bg-gray-100 border-transparent rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 border-t border-gray-100 cursor-pointer hover:bg-green-50">
                      <FiMapPin className="text-green-600" size={20} />
                      <div>
                        <div className="font-semibold text-green-600">
                          Get current location
                        </div>
                        <div className="text-xs text-gray-500">Using GPS</div>
                      </div>
                    </div>
                  </div>
                )}
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
                  className="w-full bg-gray-100 border-transparent rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* --- YAHAN HAI ASLI MAGIC --- */}
              {isLoggedIn ? (
                // Agar user logged in hai, toh "Account" dropdown dikhao
                <div
                  className="relative"
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
                // Agar logged in nahi hai, toh "Login" button dikhao
                <button
                  onClick={onLoginClick}
                  className="text-base font-semibold text-gray-700 hover:text-green-600"
                >
                  Login
                </button>
              )}
              <Link
                to="/cart"
                className="flex items-center bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:bg-green-700 transition-all transform active:scale-95"
              >
                <FiShoppingCart size={25} />
                <div className="ml-1 text-left">
                  {totalItems > 0 ? (
                    <>
                      <span className="text-sm -mb-1.5 block">
                        {totalItems} {totalItems > 1 ? "Items" : "Item"}
                      </span>
                      <span className="text-base">
                        ₹{totalPrice.toFixed(2)}
                      </span>
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
    </>
  );
};

export default Header;
