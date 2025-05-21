// src/components/NavItem.jsx
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, label, end = false }) => {
  const getClass = ({ isActive }) =>
    isActive
      ? 'text-orange-500 font-semibold'
      : 'text-gray-700 hover:text-orange-500 transition';

  return (
    <NavLink to={to} end={end} className={getClass}>
      {label}
    </NavLink>
  );
};

export default NavItem;
