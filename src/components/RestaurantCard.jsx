import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="block">
      <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="text-lg font-semibold">{restaurant.name}</h3>
        <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
        <p className="text-sm text-gray-500">{restaurant.deliveryTime} mins</p>
        <p className="text-orange-500 font-bold mt-2">₹{restaurant.averageCost} for two</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
