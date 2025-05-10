import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, ArrowLeft, Plus, Minus, Globe, Box } from 'lucide-react';
import { getProductById, getMunchboxById } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = getProductById(id || '');
  const munchbox = getMunchboxById(id || '');
  const item = product || munchbox;

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    } else if (munchbox) {
      addToCart(munchbox, quantity, true);
    }
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to={product ? "/shop-by-type" : "/munchboxes"} 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {product ? "Products" : "Munchboxes"}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            {product && (
              <div className="flex items-center mb-2">
                <span className="text-lg mr-2">{product.countryFlag}</span>
                <span className="text-gray-600">{product.country}</span>
              </div>
            )}

            {munchbox && munchbox.isMystery && (
              <div className="inline-block bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-2">
                MYSTERY BOX
              </div>
            )}

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(item.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">
                {item.rating} ({item.reviewCount} reviews)
              </span>
            </div>

            <p className="text-2xl font-bold text-gray-900 mb-6">${item.price.toFixed(2)}</p>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{item.description}</p>

              {product && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Product Details</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex">
                      <span className="w-32 text-gray-500">Weight:</span>
                      <span>{product.weightInGrams}g</span>
                    </li>
                    <li className="flex">
                      <span className="w-32 text-gray-500">Country:</span>
                      <span className="flex items-center">
                        <span className="mr-1">{product.countryFlag}</span> {product.country}
                      </span>
                    </li>
                    <li className="flex">
                      <span className="w-32 text-gray-500">Brand:</span>
                      <span>{product.brand}</span>
                    </li>
                    <li className="flex">
                      <span className="w-32 text-gray-500">Type:</span>
                      <span className="capitalize">{product.type}</span>
                    </li>
                    {product.ingredients && (
                      <li className="flex">
                        <span className="w-32 text-gray-500">Ingredients:</span>
                        <span>{product.ingredients}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {munchbox && (
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-900 mb-2">Box Details</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex">
                      <span className="w-32 text-gray-500">Contains:</span>
                      <span>{munchbox.productCount} items</span>
                    </li>
                    <li className="flex">
                      <span className="w-32 text-gray-500">Countries:</span>
                      <span className="flex items-center">
                        {munchbox.countries.join(', ')}
                      </span>
                    </li>
                    <li className="flex">
                      <span className="w-32 text-gray-500">Type:</span>
                      <span>{munchbox.isMystery ? 'Mystery Box' : 'Curated Box'}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg mr-4">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 rounded-lg flex items-center justify-center transition-colors"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center text-gray-700 mb-3">
                <Globe className="h-5 w-5 mr-2 text-teal-600" />
                <span className="font-medium">Worldwide Shipping Available</span>
              </div>
              <p className="text-sm text-gray-600">
                We ship to over 150 countries with reliable tracking. Shipping times and costs vary by location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;