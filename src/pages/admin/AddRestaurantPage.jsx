import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurants from '../../features/restaurants/mockData'; // For demo purpose only

const AddRestaurantPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    cuisine: '',
    deliveryTime: '',
    averageCost: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally, you would call backend API here to add restaurant.
    // For demo, just push to restaurants array (not reactive).
    restaurants.push({
      id: restaurants.length + 1,
      ...form,
      deliveryTime: Number(form.deliveryTime),
      averageCost: Number(form.averageCost),
    });

    alert('Restaurant added!');
    navigate('/admin/restaurants');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Restaurant Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine (e.g. Indian, Italian)"
          value={form.cuisine}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="deliveryTime"
          placeholder="Delivery Time (minutes)"
          value={form.deliveryTime}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="averageCost"
          placeholder="Average Cost for Two"
          value={form.averageCost}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurantPage;
