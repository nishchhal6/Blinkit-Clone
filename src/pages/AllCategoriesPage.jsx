import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/mockData";

const AllCategoriesPage = () => {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Explore All Categories
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From fresh produce to pantry staples, find everything you need in
            one place.
          </p>
        </div>

        {/* --- Grid of Elegant Category Cards with Images --- */}
        <div className="space-y-12">
          {categories.map((category) => {
            // Logic to split subcategories remains the same
            const middleIndex = Math.ceil(category.subcategories.length / 2);
            const leftColumn = category.subcategories.slice(0, middleIndex);
            const rightColumn = category.subcategories.slice(middleIndex);

            return (
              // The main card is now a responsive grid container
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl grid grid-cols-1 md:grid-cols-4 overflow-hidden"
              >
                {/* Part 1: Image Section */}
                <div className="md:col-span-1 h-48 md:h-auto">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Parts 2, 3, 4: Content Section */}
                <div className="md:col-span-3 p-8">
                  {/* Part 2: Title */}
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    {category.name}
                  </h2>

                  {/* Parts 3 & 4: Two-column list */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {/* Left Column of subcategories */}
                    <div className="space-y-3">
                      {leftColumn.map((subcategory, index) => (
                        <Link
                          to={`/products/${category.id}`}
                          key={index}
                          className="block text-gray-600 hover:text-green-600 font-medium"
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>

                    {/* Right Column of subcategories */}
                    <div className="space-y-3">
                      {rightColumn.map((subcategory, index) => (
                        <Link
                          to={`/products/${category.id}`}
                          key={index}
                          className="block text-gray-600 hover:text-green-600 font-medium"
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
