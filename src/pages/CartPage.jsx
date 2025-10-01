import React from "react";
import { useCart } from "../context/CartContext";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h1>
        <p className="text-gray-500 mt-2">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Shopping Cart ({totalItems} {totalItems > 1 ? "items" : "item"})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 border border-gray-200 rounded-lg shadow-sm"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 font-bold">₹{item.price}</p>
              </div>
              <div className="flex items-center justify-center bg-gray-100 text-black rounded-lg font-bold shadow-sm">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 transition-transform active:scale-90"
                >
                  <FiMinus size={16} />
                </button>
                <span className="px-3 text-sm">{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="p-2 transition-transform active:scale-90"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>FREE</span>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
