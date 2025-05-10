import React from 'react';
import { Coffee, Globe, TrendingUp, Users, Truck, Check, Instagram, Facebook, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="About YoloYumz"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            About YoloYumz
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Bringing international flavors to your doorstep since 2023
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6">
              YoloYumz was born from a passion for international flavors and a desire to make them accessible to everyone. Founded by a group of food enthusiasts who had traveled the world and experienced the joy of discovering new and exciting treats, we set out to create a platform where anyone could explore global culinary treasures from the comfort of their home.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small collection of snacks from a few countries has grown into a curated marketplace offering authentic foods and beverages from across the globe. We work directly with international suppliers and producers to ensure the highest quality and authenticity in every product.
            </p>
            <p className="text-gray-700">
              Our mission is simple: to connect food lovers with authentic international flavors, foster cultural appreciation through culinary exploration, and deliver joy with every package we send out.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Our team"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Coffee className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Authenticity</h3>
              <p className="text-gray-300">
                We pride ourselves on offering genuine products sourced directly from their countries of origin, ensuring an authentic experience with every bite.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Globe className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cultural Appreciation</h3>
              <p className="text-gray-300">
                We believe food is a gateway to understanding different cultures. Each product comes with context about its origin and cultural significance.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 text-center">
              <Check className="h-12 w-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality</h3>
              <p className="text-gray-300">
                Every product is carefully vetted and tested by our team of food experts to ensure it meets our high standards of taste and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img 
                src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Sarah Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Sarah Chen</h3>
            <p className="text-teal-600 mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              World traveler and food enthusiast who turned her passion into a business.
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img 
                src="https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Marco Rodriguez" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Marco Rodriguez</h3>
            <p className="text-teal-600 mb-2">Head of Curation</p>
            <p className="text-gray-600 text-sm">
              Former chef with a knack for discovering unique flavors from around the world.
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img 
                src="https://images.pexels.com/photos/3775156/pexels-photo-3775156.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Aisha Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Aisha Patel</h3>
            <p className="text-teal-600 mb-2">Operations Manager</p>
            <p className="text-gray-600 text-sm">
              Logistics expert ensuring your treats arrive fresh and on time.
            </p>
          </div>
          <div className="text-center">
            <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
              <img 
                src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="David Kim" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">David Kim</h3>
            <p className="text-teal-600 mb-2">Customer Experience</p>
            <p className="text-gray-600 text-sm">
              Dedicated to making your YoloYumz experience exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Shipping & Delivery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Truck className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Worldwide Shipping</p>
                    <p className="text-gray-600 text-sm">We ship to over 150 countries with reliable tracking.</p>
                  </div>
                </li>
                <li className="flex">
                  <TrendingUp className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Shipping Rates</p>
                    <p className="text-gray-600 text-sm">Free shipping on orders over $50. Standard shipping $5.99.</p>
                  </div>
                </li>
                <li className="flex">
                  <Check className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Quality Guaranteed</p>
                    <p className="text-gray-600 text-sm">All products are carefully packaged to ensure freshness and prevent damage.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Return & Refund Policy</h3>
              <p className="text-gray-700 mb-4">
                We want you to be completely satisfied with your purchase. If you receive damaged or incorrect items, please contact us within 14 days of delivery.
              </p>
              <p className="text-gray-700 mb-4">
                Due to the nature of food products, we cannot accept returns of opened or consumed items unless they were damaged or defective upon arrival.
              </p>
              <p className="text-gray-700">
                For full details on our return and refund process, please visit our dedicated <a href="#" className="text-teal-600 hover:text-teal-700">Return Policy</a> page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600 text-center max-w-lg mx-auto mb-8">
          Follow us on social media for product updates, international food facts, and exclusive offers.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/yolo.yumz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white rounded-full hover:opacity-90 transition-opacity"
          >
            <Instagram className="h-8 w-8" />
          </a>
          <a
            href="https://facebook.com/yolo.yumz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-8 w-8" />
          </a>
          <a
            href="https://twitter.com/yolo.yumz/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
          >
            <Twitter className="h-8 w-8" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;