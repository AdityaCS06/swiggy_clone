import React from 'react';
import useCartStore from '../store/useCartStore';
import { useNavigate } from 'react-router-dom';
import useOrderStore from '../store/orderStore';
import useAuthStore from '../store/authStore';


const CheckoutPage = () => {
  const { cart, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const placeOrder = useOrderStore((state) => state.placeOrder);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    const order = {
      items: cart,
      user: user.username,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };
    placeOrder(order);
    clearCart();
    navigate('/orders');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Confirm Your Order</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between border-b py-2">
          <span>{item.name} x {item.quantity}</span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}
      <div className="text-right mt-4 font-semibold">
        Total: ₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;

