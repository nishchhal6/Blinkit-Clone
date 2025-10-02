import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // Icons ke liye heroicons install karein: npm install @heroicons/react

const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      {/* Section Header */}
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 text-gray-600" />
        )}
      </button>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5">{children}</div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
