import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import RestaurantDetailsPage from './pages/RestaurantDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import PrivateRoute from './routes/PrivateRoute';
import ProtectedRoute from './components/ProtectedRoute';
import OrderHistoryPage from './pages/OrderHistoryPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import ManageRestaurantsPage from './pages/admin/ManageRestaurantsPage';
import ViewOrdersPage from './pages/admin/ViewOrdersPage';
import AddRestaurantPage from './pages/admin/AddRestaurantPage';
import SignupPage from './pages/SignupPage';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';


const App = () => {
  return (
    <>
      <Routes>
        {/* Public/User Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailsPage />} />

          <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
          <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
          <Route path="/orders" element={<PrivateRoute><OrderHistoryPage /></PrivateRoute>} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="restaurants" element={<ManageRestaurantsPage />} />
          <Route path="restaurants/add" element={<AddRestaurantPage />} />
          <Route path="orders" element={<ViewOrdersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
