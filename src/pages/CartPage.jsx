import React, { useMemo } from "react";
import useCartStore from "../store/useCartStore";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, incrementQty, decrementQty, removeFromCart, clearCart } = useCartStore();

  // Memoize total calculation for better performance
  const totalAmount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty 😕</h2>
        <Link to="/" className="text-orange-500 underline hover:text-orange-600">
          Go to Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h2>

      <ul className="space-y-6 mb-8">
        {cart.map(({ id, name, price, quantity }) => (
          <li
            key={id}
            className="flex justify-between items-center border-b border-gray-200 pb-4"
          >
            <div>
              <p className="text-lg font-medium">{name}</p>

              <div className="flex items-center space-x-3 mt-2">
                <button
                  aria-label={`Decrease quantity of ${name}`}
                  onClick={() => decrementQty(id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  −
                </button>

                <span className="font-semibold">{quantity}</span>

                <button
                  aria-label={`Increase quantity of ${name}`}
                  onClick={() => incrementQty(id)}
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  +
                </button>
              </div>

              <p className="text-sm text-gray-600 mt-1">
                ₹{price} x {quantity} = ₹{price * quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(id)}
              className="text-sm text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label={`Remove ${name} from cart`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold">Total: ₹{totalAmount}</span>

        <button
          onClick={clearCart}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
          aria-label="Clear cart"
        >
          Clear Cart
        </button>
      </div>

      <Link to="/checkout">
        <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Go to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
