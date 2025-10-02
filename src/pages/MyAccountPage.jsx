import React from "react";
import { useSearchParams } from "react-router-dom";
import AccountSidebar from "../components/ui/AccountSidebar";

// Import your section components
import MyAddresses from "./MyAddresses";
import MyOrders from "./MyOrders";
import EGiftCards from "./EGiftCards";
import AccountPrivacy from "./AccountPrivacy";

// Dummy component for FAQs
const FAQs = () => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-500">FAQ content will be displayed here.</p>
  </div>
);

const MyAccountPage = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("section") || "addresses";

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
        return <MyAddresses />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Responsive Change: Added flex-col and md:flex-row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8">
        <AccountSidebar activeTab={activeTab} />
        <div className="flex-1 bg-white p-6 rounded-xl shadow-sm">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
