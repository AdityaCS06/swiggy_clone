import React from 'react';
import restaurants from '../../features/restaurants/mockData';
import { Link } from 'react-router-dom';

const ManageRestaurantsPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Restaurants</h2>
        <Link
          to="/admin/restaurants/add"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Restaurant
        </Link>
      </div>

      <ul className="space-y-4">
        {restaurants.map((res) => (
          <li key={res.id} className="border p-4 rounded shadow-sm bg-white">
            <h3 className="text-xl font-semibold">{res.name}</h3>
            <p className="text-gray-600">{res.cuisine}</p>
            <p className="text-sm text-gray-500">Avg cost: ₹{res.averageCost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageRestaurantsPage;
