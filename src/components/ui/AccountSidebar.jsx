import React from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate ko import karein
import { useUser } from "../../context/UserContext"; // User context ko import karein
import {
  MapPinIcon,
  ArchiveBoxIcon,
  GiftIcon,
  ShieldCheckIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const sidebarItems = [
  { id: "addresses", label: "My Addresses", icon: MapPinIcon },
  { id: "orders", label: "My Orders", icon: ArchiveBoxIcon },
  { id: "gift-cards", label: "E-Gift Cards", icon: GiftIcon },
  { id: "privacy", label: "Account privacy", icon: ShieldCheckIcon },
];

const AccountSidebar = ({ activeTab }) => {
  const navigate = useNavigate();
  const { logout } = useUser(); // Apne UserContext se logout function lein

  const handleLogout = () => {
    logout(); // 1. Context se user ko logout karein
    navigate("/", { replace: true }); // 2. Homepage par redirect kar dein
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="p-4 border-b">
        {/* Phone number yahan context se aa sakta hai */}
        <p className="text-sm text-gray-500">+918923066929</p>
      </div>
      <nav>
        <ul>
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <Link
                  to={`/account?section=${item.id}`}
                  className={`w-full flex items-center py-4 px-6 text-left text-sm font-medium focus:outline-none transition-colors duration-200
                    ${
                      isActive
                        ? "bg-green-50 text-green-700 border-l-4 border-green-600"
                        : "text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout} // handleLogout function ko yahan call karein
              className="w-full flex items-center py-4 px-6 text-left text-sm font-medium text-gray-600 hover:bg-gray-50"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountSidebar;
