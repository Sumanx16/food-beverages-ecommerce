import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Plus } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="relative pb-[100%]">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-teal-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-teal-700"
          aria-label="Add to cart"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          <span className="text-sm mr-1">{product.countryFlag}</span>
          <span className="text-xs text-gray-500">{product.country}</span>
        </div>
        <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between">
          <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;