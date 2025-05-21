import React from 'react';
import useOrderStore from '../../store/orderStore';

const ViewOrdersPage = () => {
  const orders = useOrderStore((state) => state.orders);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-4 mb-4 rounded shadow-sm bg-white">
            <p className="text-sm text-gray-500">
              User: {order.user} | {new Date(order.createdAt).toLocaleString()}
            </p>
            {order.items.map((item) => (
              <div key={item.id} className="text-sm flex justify-between">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </div>
            ))}
            <div className="text-right mt-2 font-semibold">Total: ₹{order.total}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewOrdersPage;
