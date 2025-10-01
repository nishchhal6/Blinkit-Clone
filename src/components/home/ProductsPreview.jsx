import React from "react";
import ProductCard from "../products/ProductCard";
import { Link } from "react-router-dom";

// Yeh component ab title aur products ki list lega
const ProductsPreview = ({ title, products, categoryId }) => {
  return (
    <div>
      {/* Section Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
        <Link
          to={`/products/${categoryId}`}
          className="text-md font-semibold text-green-600 hover:underline"
        >
          See all
        </Link>
      </div>

      {/* --- The Horizontal Scroll Container (The Magic) --- */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Yeh ek chhota plugin hai scrollbar hide karne ke liye
// Isse aapko `tailwind.config.js` mein add karna hoga
// plugins: [require('tailwind-scrollbar-hide')]
// Aur phir `npm install -D tailwind-scrollbar-hide` run karna hoga

export default ProductsPreview;
