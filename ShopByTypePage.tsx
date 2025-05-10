import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import { getProductsByType, getProductTypes, products } from '../data/products';
import { ProductType } from '../types';

const ShopByTypePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const typeParam = queryParams.get('type') as ProductType | null;
  
  const [selectedType, setSelectedType] = useState<ProductType | null>(typeParam);
  const [filteredProducts, setFilteredProducts] = useState<typeof products>([]);
  
  const productTypes = getProductTypes();

  useEffect(() => {
    if (selectedType) {
      setFilteredProducts(getProductsByType(selectedType));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedType]);

  // Get product type name from id
  const getTypeName = (typeId: ProductType): string => {
    const type = productTypes.find(t => t.id === typeId);
    return type ? type.name : 'Unknown';
  };

  return (
    <div className="bg-gray-50">
      <section className="relative h-[30vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Shop by type"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
            {selectedType ? getTypeName(selectedType) : 'All Products'}
          </h1>
          <p className="text-white text-xl max-w-2xl">
            {selectedType 
              ? `Browse our selection of ${getTypeName(selectedType).toLowerCase()}`
              : 'Explore our wide variety of international foods and beverages'}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedType
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedType(null)}
          >
            All
          </button>
          {productTypes.map((type) => (
            <button
              key={type.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === type.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              {type.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopByTypePage;