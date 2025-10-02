// src/context/UserContext.jsx

import React, { createContext, useState, useContext } from "react";

// Context banayein
const UserContext = createContext();

// Context Provider component banayein
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhone, setUserPhone] = useState("");

  // Login function
  const login = (phone) => {
    setUserPhone(phone);
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    setUserPhone("");
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userPhone, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Ek custom hook banayein taaki context ko aasani se use kar sakein
export const useUser = () => {
  return useContext(UserContext);
};
