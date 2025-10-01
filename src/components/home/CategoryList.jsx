import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../../data/mockData";

const CategoryList = () => {
  const firstCategoryId = categories.length > 0 ? categories[0].id : "/";
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 rounded-xl shadow-lg p-6">
        {/* ✅ Header row with title on left and See All on right */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Shop by Category</h2>
          <Link
            to="/categories"
            className="text-lg font-semibold text-green-600 hover:underline"
          >
            See all
          </Link>
        </div>

        {/* ✅ Category grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={`/products/${category.id}`}
                className="group flex flex-col items-center text-center space-y-2"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 p-1 border-4 border-transparent group-hover:border-green-600 rounded-full transition-all">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-full shadow-sm"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
