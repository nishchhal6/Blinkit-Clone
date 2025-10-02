import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories, products } from "../data/mockData";
import ProductCard from "../components/products/ProductCard";

const ProductsPage = () => {
  const { categoryId } = useParams();

  const category = categories.find((c) => c.id === parseInt(categoryId));
  const filteredProducts = products.filter(
    (p) => p.categoryId === parseInt(categoryId)
  );

  if (!category) {
    return (
      <div className="text-center text-red-500 mt-10 text-lg">
        Category not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Container */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* --- Left Sidebar --- */}
          <aside className="w-full md:w-1/5">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h2>
              <ul className="space-y-2 overflow-y-auto max-h-[70vh] pr-1 scrollbar-thin scrollbar-thumb-gray-300">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <Link
                      to={`/products/${cat.id}`}
                      className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm font-medium transition ${
                        cat.id === parseInt(categoryId)
                          ? "bg-green-100 text-green-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {cat.icon && (
                        <img
                          src={cat.icon}
                          alt={cat.name}
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* --- Right Section: Products --- */}
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Buy {category.name} Online
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                Explore our fresh collection of {category.name}. Get them
                delivered in minutes!
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
