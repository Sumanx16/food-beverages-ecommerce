import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Store } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { brands, getProductsByBrand, products } from '../data/products';

const ShopByBrandPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brandParam = queryParams.get('brand');
  
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParam);
  const [brandProducts, setBrandProducts] = useState<typeof products>([]);

  useEffect(() => {
    if (selectedBrand) {
      setBrandProducts(getProductsByBrand(selectedBrand));
    } else {
      setBrandProducts([]);
    }
  }, [selectedBrand]);

  const selectedBrandData = brands.find(brand => brand.id === selectedBrand);

  return (
    <div className="bg-gray-50">
      <section className="relative h-[30vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Shop by brand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Store className="h-8 w-8 text-white mr-3" />
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              {selectedBrand ? selectedBrandData?.name : 'Shop by Brand'}
            </h1>
          </div>
          <p className="text-white text-xl max-w-2xl">
            {selectedBrand 
              ? `Explore ${selectedBrandData?.name} products from ${selectedBrandData?.country}`
              : 'Discover international brands and their unique products'}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {!selectedBrand && (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Brands</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {brands.map((brand) => (
                <div 
                  key={brand.id}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedBrand(brand.id)}
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <img 
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full max-w-[160px]"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{brand.country}</p>
                  <p className="text-sm text-gray-700 mb-4">{brand.description}</p>
                  <button 
                    className="text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    onClick={() => setSelectedBrand(brand.id)}
                  >
                    View Products
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {selectedBrand && (
          <>
            <div className="mb-8">
              <button
                onClick={() => setSelectedBrand(null)}
                className="text-teal-600 hover:text-teal-700 font-medium flex items-center"
              >
                ← All Brands
              </button>
            </div>
            
            {selectedBrandData && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8 flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                  <img 
                    src={selectedBrandData.logo}
                    alt={selectedBrandData.name}
                    className="max-h-[100px] max-w-[200px]"
                  />
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedBrandData.name}</h2>
                  <p className="text-gray-600 mb-2">Origin: {selectedBrandData.country}</p>
                  <p className="text-gray-700">{selectedBrandData.description}</p>
                </div>
              </div>
            )}
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">Products by {selectedBrandData?.name}</h3>
            
            {brandProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {brandProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No products found for this brand.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShopByBrandPage;