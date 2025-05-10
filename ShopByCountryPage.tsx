import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { countries, getProductsByCountry, products } from '../data/products';
import CountryCard from '../components/countries/CountryCard';

const ShopByCountryPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const countryParam = queryParams.get('country');
  
  const [selectedCountry, setSelectedCountry] = useState<string | null>(countryParam);
  const [countryProducts, setCountryProducts] = useState<typeof products>([]);

  useEffect(() => {
    if (selectedCountry) {
      setCountryProducts(getProductsByCountry(selectedCountry));
    } else {
      setCountryProducts([]);
    }
  }, [selectedCountry]);

  const selectedCountryData = countries.find(country => country.code === selectedCountry);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {selectedCountry ? (
        <section className="relative h-[40vh] overflow-hidden">
          <img
            src={selectedCountryData?.featuredImage}
            alt={selectedCountryData?.name}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="flex items-center mb-2">
              <span className="text-4xl mr-3">{selectedCountryData?.flag}</span>
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                {selectedCountryData?.name}
              </h1>
            </div>
            <p className="text-white text-xl max-w-2xl">
              Explore authentic treats from {selectedCountryData?.name}
            </p>
          </div>
        </section>
      ) : (
        <section className="relative h-[40vh] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/7412098/pexels-photo-7412098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Global foods"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
            <div className="flex items-center mb-2">
              <Globe className="h-8 w-8 text-white mr-3" />
              <h1 className="text-white text-4xl md:text-5xl font-bold">
                Shop by Country
              </h1>
            </div>
            <p className="text-white text-xl max-w-2xl">
              Explore authentic treats from around the world
            </p>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 py-12">
        {!selectedCountry && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Country</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {countries.map((country) => (
                <CountryCard key={country.code} country={country} />
              ))}
            </div>
          </>
        )}

        {selectedCountry && (
          <>
            <div className="mb-8">
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
              >
                ← All Countries
              </button>
            </div>
            
            {countryProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {countryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found for this country.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShopByCountryPage;