import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

export default function Header({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="relative">
                <span className="text-2xl font-bold text-gray-900">Si</span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div className="ml-2">
                <span className="text-xl font-bold text-gray-900">SINO-TEC INDIA</span>
                <div className="text-xs text-orange-500 font-medium">ELECTRICAL EARTHING SERVICES</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === id
                      ? 'text-orange-600 border-b-2 border-orange-600'
                      : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAVIGATION_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}