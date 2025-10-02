import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import AnimatedLayout from "./components/layout/AnimatedLayout";
import MyAccountPage from "./pages/MyAccountPage";
import AllCategoriesPage from "./pages/AllCategoriesPage"; // 1. AllCategoriesPage ko import karein

function App() {
  return (
    <Layout>
      <AnimatedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:categoryId" element={<ProductsPage />} />
          <Route path="/account" element={<MyAccountPage />} />

          {/* 2. Naya route yahan add karein */}
          <Route path="/categories" element={<AllCategoriesPage />} />
        </Routes>
      </AnimatedLayout>
    </Layout>
  );
}

export default App;
