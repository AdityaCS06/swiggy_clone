import React from 'react';

const CartIcon = ({ itemCount }) => {
  return (
    <div className="relative cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="7" cy="21" r="2" />
        <circle cx="17" cy="21" r="2" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
