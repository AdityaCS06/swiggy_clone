import React from 'react';
import { useParams } from 'react-router-dom';
import restaurants from '../features/restaurants/mockData';
import useCartStore from '../store/useCartStore'; // ⬅️ Zustand cart store

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((resto) => resto.id === parseInt(id));

  const addToCart = useCartStore((state) => state.addToCart);

  if (!restaurant) {
    return <div className="p-4 text-red-600">Restaurant not found!</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {/* Restaurant Info */}
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-3xl font-bold text-gray-800">{restaurant.name}</h2>
      <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
      <p className="text-gray-500">Delivery Time: {restaurant.deliveryTime} mins</p>
      <p className="text-gray-500 mb-4">Average Cost: ₹{restaurant.averageCost} for two</p>

      {/* Menu Section */}
      <h3 className="text-2xl font-semibold mt-6 mb-4">Menu</h3>
      <ul className="space-y-3">
        {restaurant.menu.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="text-lg">{item.name}</p>
              <p className="text-gray-700 font-medium">₹{item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="px-3 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetailsPage;
