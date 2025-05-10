import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Globe, Coffee, Package, Store } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Coffee className="w-8 h-8 text-teal-600" />
          <span className="text-xl font-bold text-gray-800">YoloYumz</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop-by-country"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/shop-by-country' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            Shop by Country
          </Link>
          <Link
            to="/shop-by-type"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/shop-by-type' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            Shop by Type
          </Link>
          <Link
            to="/munchboxes"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/munchboxes' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            Munchboxes
          </Link>
          <Link
            to="/shop-by-brand"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/shop-by-brand' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            Brands
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-teal-600 transition-colors ${
              location.pathname === '/about' ? 'text-teal-600' : 'text-gray-700'
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            aria-label="Search"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <Link
            to="/cart"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5 text-gray-600" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;