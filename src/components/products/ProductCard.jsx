import React from "react";
import { FiPlus, FiMinus, FiClock } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <motion.div
      // Compact, fixed width card
      className="bg-white border border-gray-200 rounded-lg flex flex-col w-40 md:w-44 flex-shrink-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image with Padding */}
      <div className="p-2">
        <div className="relative w-full aspect-square overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="px-3 pb-3 flex flex-col flex-grow">
        {/* Delivery Time */}
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <FiClock />
          <span>17 MINS</span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm font-bold text-gray-900 mt-1 h-10 overflow-hidden">
          {product.name}
        </h3>

        {/* Description/Weight */}
        <p className="text-xs text-gray-500 mt-1 flex-grow">
          {product.description}
        </p>

        {/* Price and Add Button */}
        <div className="flex justify-between items-center mt-3">
          <p className="text-base font-bold text-gray-900">₹{product.price}</p>

          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="border-2 border-green-600 bg-green-50 text-green-700 font-bold py-2 px-5 rounded-lg text-sm hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-300"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center justify-center bg-green-600 text-white rounded-lg font-bold shadow-md">
              <button
                onClick={() => removeFromCart(product.id)}
                className="p-2 transition-transform active:scale-90"
              >
                <FiMinus size={16} />
              </button>
              <span className="py-2.5 text-sm">{quantity}</span>
              <button
                onClick={() => addToCart(product)}
                className="p-2 transition-transform active:scale-90"
              >
                <FiPlus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
