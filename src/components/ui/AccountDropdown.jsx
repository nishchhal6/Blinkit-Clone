import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Path check kar lein

const AccountDropdown = () => {
  const { userPhone, logout } = useUser();

  const menuItems = [
    { name: "My Orders", path: "/account?section=orders" },
    { name: "Saved Addresses", path: "/account?section=addresses" },
    { name: "E-Gift Cards", path: "/account?section=gift-cards" },
    { name: "FAQ's", path: "/account?section=faqs" },
    { name: "Account Privacy", path: "/account?section=privacy" },
  ];

  return (
    <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-4 border-b">
        <h4 className="font-bold text-gray-800">My Account</h4>
        <p className="text-gray-500 text-sm">+91 {userPhone}</p>
      </div>
      <ul className="py-2">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li
          onClick={logout}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500 font-semibold"
        >
          Log Out
        </li>
      </ul>
      <div className="p-4 bg-gray-50">
        <p className="font-bold text-sm">Simple way to get groceries</p>
      </div>
    </div>
  );
};

export default AccountDropdown;
