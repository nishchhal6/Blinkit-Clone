import React from "react";
import { useParams, Link } from "react-router-dom";
import { products, categories } from "../data/mockData";
import ProductCard from "../components/products/ProductCard";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const selectedCategory = categories.find(
    (c) => c.id === parseInt(categoryId)
  );
  const categoryProducts = products.filter(
    (p) => p.categoryId === parseInt(categoryId)
  );

  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* --- Sidebar (Left Side) --- */}
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="bg-white p-5 rounded-xl shadow-sm sticky top-28">
            <h2 className="text-xl font-bold mb-5">Categories</h2>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products/${category.id}`}
                    className={`block p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors ${
                      parseInt(categoryId) === category.id
                        ? "bg-green-50 font-bold text-green-700"
                        : ""
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* --- Products Grid (Right Side) --- */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
            {selectedCategory?.name}
          </h1>

          {/* --- THE FIX IS HERE --- */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
