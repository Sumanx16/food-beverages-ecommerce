import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold">YoloYumz</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing the world's best food and beverages to your doorstep. Explore international
              flavors from the comfort of your home.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop-by-country"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Shop by Country
                </Link>
              </li>
              <li>
                <Link
                  to="/shop-by-type"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Shop by Type
                </Link>
              </li>
              <li>
                <Link
                  to="/munchboxes"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Munchboxes & Mystery Boxes
                </Link>
              </li>
              <li>
                <Link
                  to="/shop-by-brand"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  Shop by Brand
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Return & Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Global Avenue, Foodie District, NY 10001, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">hello@YoloYumz.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} YoloYumz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;