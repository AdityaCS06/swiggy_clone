// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';
import NavItem from './NavItem';

const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-orange-500">
        SwiggyClone
      </Link>

      {/* Nav Items */}
      <div className="flex items-center gap-6">
        <NavItem to="/" label="Home" end />
        <NavItem to="/cart" label="Cart" />

        {user ? (
          <>
            <span className="text-gray-700 font-medium">
              {user}
            </span>
            <button
              onClick={logout}
              className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
