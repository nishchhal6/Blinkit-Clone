import React from "react";
import Header from "./Header";

// We'll add a Footer component later
// import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
