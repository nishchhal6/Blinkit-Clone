import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AccountSidebar from "../components/ui/AccountSidebar";

// Apne sabhi section components ko yahan import karein
import MyAddresses from "./MyAddresses";
import MyOrders from "./MyOrders";
import EGiftCards from "./EGiftCards";
import AccountPrivacy from "./AccountPrivacy";

// FAQs ke liye ek dummy component
const FAQs = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-500">Yahan FAQs dikhaye jayenge.</p>
  </div>
);

const MyAccountPage = () => {
  const [searchParams] = useSearchParams();

  // URL se `section` parameter nikalo. Agar nahi hai, to 'addresses' ko default maano.
  const activeTab = searchParams.get("section") || "addresses";

  // Sahi content dikhane ke liye function
  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <MyOrders />;
      case "addresses":
        return <MyAddresses />;
      case "gift-cards":
        return <EGiftCards />;
      case "privacy":
        return <AccountPrivacy />;
      case "faqs":
        return <FAQs />;
      default:
        // Agar URL mein koi anjaan section hai, to addresses dikhao
        return <MyAddresses />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar ko activeTab pass karo taki sahi item highlight ho */}
        <AccountSidebar activeTab={activeTab} />

        {/* Right side mein content dikhao */}
        <div className="flex-1 p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MyAccountPage;
