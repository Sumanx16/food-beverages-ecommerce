import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopByCountryPage from './pages/ShopByCountryPage';
import ShopByTypePage from './pages/ShopByTypePage';
import MunchboxesPage from './pages/MunchboxesPage';
import ShopByBrandPage from './pages/ShopByBrandPage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop-by-country" element={<ShopByCountryPage />} />
              <Route path="/shop-by-type" element={<ShopByTypePage />} />
              <Route path="/munchboxes" element={<MunchboxesPage />} />
              <Route path="/shop-by-brand" element={<ShopByBrandPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;