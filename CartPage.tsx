import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Calculate shipping cost (example: free shipping over $50, otherwise $5.99)
  const shippingCost = subtotal >= 50 ? 0 : 5.99;
  
  // Calculate total
  const total = subtotal + shippingCost;

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {cart.length} {cart.length === 1 ? 'item' : 'items'}
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
              
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.product.id} className="p-6 flex flex-col sm:flex-row">
                    <div className="sm:w-24 sm:h-24 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h3 className="text-base font-medium text-gray-900">{item.product.name}</h3>
                          {!item.isMunchbox && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.product.country} • {(item.product as any).type}
                            </p>
                          )}
                          {item.isMunchbox && (
                            <p className="text-sm text-gray-500 mt-1">
                              {(item.product as any).productCount} items • {(item.product as any).isMystery ? 'Mystery Box' : 'Curated Box'}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 sm:mt-0 text-right">
                          <p className="font-medium text-gray-900">${item.product.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-900"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:text-gray-900"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-500 hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <Link
                to="/"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Continue Shopping
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    (Including all applicable taxes)
                  </p>
                </div>
              </div>
              
              <button
                className="w-full bg-teal-600 text-white rounded-lg py-3 font-medium mt-6 hover:bg-teal-700 transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Shipping Information</h3>
                <p className="text-xs text-gray-600 mb-2">
                  We ship to over 150 countries worldwide with reliable tracking.
                </p>
                <p className="text-xs text-gray-600">
                  Free shipping on orders over $50. Standard shipping $5.99.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;