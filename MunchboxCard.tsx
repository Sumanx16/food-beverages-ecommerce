import React from 'react';
import { Link } from 'react-router-dom';
import { Star, PackageOpen, ShoppingCart } from 'lucide-react';
import { MunchBox } from '../../types';
import { useCart } from '../../context/CartContext';

interface MunchboxCardProps {
  munchbox: MunchBox;
}

const MunchboxCard: React.FC<MunchboxCardProps> = ({ munchbox }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(munchbox, 1, true);
  };

  return (
    <Link
      to={`/product/${munchbox.id}`}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative pb-[75%]">
        {munchbox.isNew && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            NEW
          </span>
        )}
        {munchbox.isMystery && (
          <span className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            MYSTERY
          </span>
        )}
        <img
          src={munchbox.image}
          alt={munchbox.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl text-white mb-1">{munchbox.name}</h3>
        <p className="text-sm text-teal-100 mb-2 line-clamp-2">{munchbox.description.substring(0, 80)}...</p>
        <div className="flex items-center text-sm text-teal-100 mb-4">
          <PackageOpen className="w-4 h-4 mr-1" />
          <span>{munchbox.productCount} items</span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-white text-xl">${munchbox.price.toFixed(2)}</p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-teal-100 ml-1">
                {munchbox.rating} ({munchbox.reviewCount})
              </span>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-white text-teal-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MunchboxCard;