import React, { useState } from 'react';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Login to SwiggyClone
        </h2>

        <label htmlFor="username" className="block text-gray-700 mb-1 font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="e.g. aditya"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-5 transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition-all duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
