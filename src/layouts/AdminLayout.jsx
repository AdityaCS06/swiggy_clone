import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const adminNavLinks = [
  { path: '/admin', label: 'Dashboard', end: true },
  { path: '/admin/restaurants', label: 'Manage Restaurants', end: true },
  { path: '/admin/restaurants/add', label: 'Add Restaurant' },
  { path: '/admin/orders', label: 'View Orders' },
];

const AdminLayout = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? 'text-orange-500 font-semibold'
      : 'text-gray-700 hover:text-orange-500 transition';

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-orange-500 mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          {adminNavLinks.map(({ path, label, end }) => (
            <NavLink
              key={path}
              to={path}
              end={end}
              className={navClass}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
