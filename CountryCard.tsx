import React from 'react';
import { Link } from 'react-router-dom';
import { Country } from '../../types';

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link
      to={`/shop-by-country?country=${country.code}`}
      className="group relative rounded-lg overflow-hidden h-60 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={country.featuredImage}
        alt={country.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <div className="flex items-center mb-1">
          <span className="text-2xl mr-2">{country.flag}</span>
          <h3 className="text-xl font-bold text-white">{country.name}</h3>
        </div>
        <p className="text-sm text-gray-200">Explore products</p>
      </div>
    </Link>
  );
};

export default CountryCard;