import React, { useState } from "react";
import Header from "./Header";
import LoginModal from "../ui/LoginModal";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);

  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header onLoginClick={openLoginModal} />

      <main className="flex-grow">{children}</main>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      <Footer />
    </div>
  );
};

export default Layout;
