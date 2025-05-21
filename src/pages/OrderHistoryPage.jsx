import React, { useMemo } from 'react';
import useOrderStore from '../store/orderStore';
import useAuthStore from '../store/authStore';

const OrderHistoryPage = () => {
  const { user } = useAuthStore();
  const allOrders = useOrderStore((state) => state.orders);

  const userOrders = useMemo(() => {
    return allOrders.filter((order) => order.user === user?.username);
  }, [allOrders, user]);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Orders</h2>

      {userOrders.length === 0 ? (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        userOrders.map((order) => (
          <div
            key={order.id}
            className="mb-4 p-4 border rounded shadow-sm bg-white"
          >
            <p className="text-sm text-gray-500 mb-2">
              Placed on: {new Date(order.createdAt).toLocaleString()}
            </p>
            {order.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="text-right font-semibold mt-2">
              Total: ₹{order.total}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistoryPage;
