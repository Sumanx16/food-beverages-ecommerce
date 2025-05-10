import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import MunchboxCard from '../components/products/MunchboxCard';
import CountryCard from '../components/countries/CountryCard';
import { 
  getFeaturedProducts, 
  getFeaturedMunchboxes, 
  getNewProducts,
  countries
} from '../data/products';

const HomePage: React.FC = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const featuredMunchboxes = getFeaturedMunchboxes().slice(0, 3);
  const newProducts = getNewProducts().slice(0, 4);
  const featuredCountries = countries.slice(0, 4);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="International foods and snacks"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl mb-4">
            Taste the World from Your Doorstep
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl mb-8">
            Discover international flavors with our curated selection of snacks, treats, and beverages from around the globe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop-by-country"
              className="bg-white text-gray-900 hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg font-medium"
            >
              Shop by Country
            </Link>
            <Link
              to="/munchboxes"
              className="bg-teal-600 text-white hover:bg-teal-700 transition-colors px-6 py-3 rounded-lg font-medium"
            >
              Explore Munchboxes
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Shop by Country</h2>
          <Link
            to="/shop-by-country"
            className="flex items-center text-teal-600 hover:text-teal-700 transition-colors font-medium"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCountries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link
            to="/shop-by-type"
            className="flex items-center text-teal-600 hover:text-teal-700 transition-colors font-medium"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Munchboxes Section */}
      <section className="bg-gradient-to-br from-teal-900 to-teal-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center">
                <Package className="mr-3 h-8 w-8" /> Munchboxes & Mystery Boxes
              </h2>
              <p className="text-teal-100 mt-2 max-w-2xl">
                Curated boxes filled with treats from around the world. Perfect for gifts or treating yourself!
              </p>
            </div>
            <Link
              to="/munchboxes"
              className="bg-white text-teal-800 hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg font-medium inline-block"
            >
              Explore All Boxes
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMunchboxes.map((box) => (
              <MunchboxCard key={box.id} munchbox={box} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">New Arrivals</h2>
          <Link
            to="/shop-by-type"
            className="flex items-center text-teal-600 hover:text-teal-700 transition-colors font-medium"
          >
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Chef Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Curated by Food Experts
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Our international culinary experts hand-select every product in our store. We taste, test, and approve only the finest international foods and beverages to bring authentic flavors to your home.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Whether you're missing foods from home or seeking new culinary adventures, we've got your cravings covered with premium selections from around the globe.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
              >
                Learn more about our team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Our culinary team"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Shipping Worldwide</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We ship to over 150 countries with fast, reliable delivery and competitive rates. Enjoy your favorite international treats wherever you are.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Globe className="w-64 h-64 text-teal-600" strokeWidth={1} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold text-gray-900 text-xl">150+</p>
              <p className="text-sm text-gray-600">Countries</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/about"
            className="bg-gray-800 text-white hover:bg-gray-900 transition-colors px-6 py-3 rounded-lg font-medium"
          >
            Shipping Information
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;