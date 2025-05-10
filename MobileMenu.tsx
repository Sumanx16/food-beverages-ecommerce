import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Coffee, Package, Store, Info } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-40 overflow-y-auto">
      <nav className="container mx-auto px-4 py-6 flex flex-col">
        <Link
          to="/"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Coffee className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">Home</span>
        </Link>
        <Link
          to="/shop-by-country"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Globe className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">Shop by Country</span>
        </Link>
        <Link
          to="/shop-by-type"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Coffee className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">Shop by Type</span>
        </Link>
        <Link
          to="/munchboxes"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Package className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">Munchboxes & Mystery Boxes</span>
        </Link>
        <Link
          to="/shop-by-brand"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Store className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">Shop by Brand</span>
        </Link>
        <Link
          to="/about"
          className="flex items-center py-4 px-2 text-gray-700 hover:bg-gray-50 rounded-lg"
        >
          <Info className="w-5 h-5 mr-3 text-teal-600" />
          <span className="font-medium">About Us</span>
        </Link>
        <div className="mt-6 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500 mb-4">Shipping Worldwide</p>
          <button className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
            Sign In / Register
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;