import React, { useState } from 'react';
import RestaurantCard from '../components/RestaurantCard';
import restaurants from '../features/restaurants/mockData';

const HomePage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const cuisines = ['All', ...new Set(restaurants.map((r) => r.cuisine.split(', ')[0]))];

  const filteredRestaurants = restaurants.filter((r) => {
    const matchesCuisine =
      selectedCuisine === 'All' || r.cuisine.includes(selectedCuisine);
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">🍽️ Restaurants</h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or cuisine..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Cuisine Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            onClick={() => setSelectedCuisine(cuisine)}
            className={`px-4 py-2 rounded-full text-sm font-medium border ${
              selectedCuisine === cuisine
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300'
            } hover:shadow`}
          >
            {cuisine}
          </button>
        ))}
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <p className="text-gray-500 col-span-3">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
