import React from "react";
import { useParams, Link } from "react-router-dom";
import { products, categories } from "../data/mockData";

const CategoryPage = () => {
  const { categoryId } = useParams();

  const selectedCategory = categories.find(
    (c) => c.id === parseInt(categoryId)
  );

  const categoryProducts = products.filter(
    (p) => p.categoryId === parseInt(categoryId)
  );

  if (!selectedCategory) {
    return <div>Category not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* --- Main Layout --- */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* --- Left Sidebar --- */}
        <aside className="w-full md:w-1/5">
          <div className="bg-white rounded-lg shadow-md p-4 sticky top-24">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Categories
            </h2>
            <ul className="space-y-2 overflow-y-auto max-h-[70vh] pr-1 scrollbar-thin scrollbar-thumb-gray-300">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/${cat.id}`}
                    className={`flex items-center gap-3 py-2 px-3 rounded-md text-sm font-medium ${
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

        {/* --- Right Side: Product Grid --- */}
        <main className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Buy {selectedCategory.name} Online
          </h1>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md p-3 relative hover:shadow-lg transition"
              >
                {/* Discount Badge */}
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    {product.discount}% OFF
                  </span>
                )}

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-2"
                />

                {/* Product Info */}
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                  10 MINS
                </p>

                <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2 mb-1">
                  {product.name}
                </h3>

                <p className="text-xs text-gray-500 mb-2">{product.weight}</p>

                {/* Price Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-800">
                      ₹{product.price}
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-xs ml-1">
                          ₹{product.oldPrice}
                        </span>
                      )}
                    </p>
                  </div>

                  <button className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-md border border-green-600 hover:bg-green-600 hover:text-white transition">
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CategoryPage;
