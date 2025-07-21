
import React from 'react';

const baseClasses =
  'px-6 py-3 rounded-2xl font-semibold transition-all duration-200';

const variantClasses = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-800 text-white hover:bg-gray-900',
  outline:
    'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800',
};

export default function Button({ variant = 'primary', children, onClick, className = '' }) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
