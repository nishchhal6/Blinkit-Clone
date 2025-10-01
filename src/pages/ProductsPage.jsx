import React from "react";
import { useParams } from "react-router-dom";
import { categories, products } from "../data/mockData";
import ProductCard from "../components/products/ProductCard";

const ProductsPage = () => {
  const { categoryId } = useParams();

  const category = categories.find((c) => c.id === parseInt(categoryId));
  const filteredProducts = products.filter(
    (p) => p.categoryId === parseInt(categoryId)
  );

  if (!category) {
    return <div className="text-center text-red-500">Category not found!</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
