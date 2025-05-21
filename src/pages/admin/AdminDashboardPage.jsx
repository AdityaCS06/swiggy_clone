import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <Link to="/admin/restaurants" className="p-4 bg-blue-100 rounded shadow hover:bg-blue-200">
          Manage Restaurants
        </Link>
        <Link to="/admin/orders" className="p-4 bg-green-100 rounded shadow hover:bg-green-200">
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
