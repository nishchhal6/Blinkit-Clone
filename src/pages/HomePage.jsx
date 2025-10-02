import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import InfoCards from "../components/home/InfoCards";
import CategoryList from "../components/home/CategoryList";
import ProductsPreview from "../components/home/ProductsPreview";
import { products } from "../data/mockData"; // products ko import karein

const HomePage = () => {
  // Alag-alag categories ke liye products ko filter karein
  const VegetablesFruitsProducts = products.filter((p) => p.categoryId === 1);
  const dairyProducts = products.filter((p) => p.categoryId === 2);
  const munchiesProducts = products.filter((p) => p.categoryId === 3);

  return (
    <div className="px-4 md:px-8 py-8 space-y-12">
      <HeroBanner />
      <InfoCards />
      <CategoryList />

      {/* Ab hum naye slider component ko use karenge */}
      <ProductsPreview
        title="Dairy & Breakfast"
        products={dairyProducts}
        categoryId={2}
      />
      <ProductsPreview
        title="Munchies"
        products={munchiesProducts}
        categoryId={3}
      />
      <ProductsPreview
        title="Vegetables & Fruits"
        products={VegetablesFruitsProducts}
        categoryId={1}
      />

      {/* Aap yahan aur bhi categories add kar sakte hain */}
    </div>
  );
};

export default HomePage;
