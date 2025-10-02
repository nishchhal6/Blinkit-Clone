import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../../context/UserContext"; // UserContext ko import karein

const LoginModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const { login } = useUser(); // login function ko context se lein

  const handleContinue = () => {
    if (phone.length === 10) {
      login(phone); // login function ko call karein
      onClose(); // modal ko band kar dein
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        ></motion.div>

        <motion.div
          className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="text-center mx-32 mb-4 mt-0 bg-yellow-400 pt-5 rounded-2xl pb-1">
            <h1 className="text-md font-extrabold mb-4">
              <span className="text-black">blink</span>
              <span className="text-green-600">it</span>
            </h1>
          </div>
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            India's last minute app
          </h2>
          <p className="text-gray-500 mt-1 text-center">Log in or Sign up</p>
          <div className="mt-8 flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500 transition-all">
            <span className="pl-4 pr-2 text-gray-500 font-semibold">+91</span>
            <div className="h-6 w-px bg-gray-300"></div>
            <input
              type="tel"
              placeholder="Enter mobile number"
              // --- YAHAN FIX KIYA GAYA HAI ---
              className="w-full p-4 border-none focus:ring-0 focus:outline-none bg-transparent"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
          </div>
          <button
            onClick={handleContinue}
            disabled={phone.length !== 10}
            className="w-full bg-green-600 text-white font-bold py-4 mt-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-green-700"
          >
            Continue
          </button>
          <p className="text-xs text-gray-400 mt-4 text-center">
            By continuing, you agree to our{" "}
            <a href="#" className="text-gray-600 font-semibold hover:underline">
              Terms of Service
            </a>{" "}
            &{" "}
            <a href="#" className="text-gray-600 font-semibold hover:underline">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LoginModal;
