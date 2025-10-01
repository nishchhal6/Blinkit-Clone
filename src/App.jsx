import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import AnimatedLayout from "./components/layout/AnimatedLayout";
import CategoryPage from "./pages/CategoryPage";
import AllCategoriesPage from "./pages/AllCategoriesPage";

function App() {
  return (
    <Layout>
      <AnimatedLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:categoryId" element={<ProductsPage />} />
          <Route path="/products/:categoryId" element={<CategoryPage />} />
          <Route path="/categories" element={<AllCategoriesPage />} />
        </Routes>
      </AnimatedLayout>
    </Layout>
  );
}

export default App;
