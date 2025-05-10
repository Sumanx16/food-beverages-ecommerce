export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  shortDescription: string;
  image: string;
  country: string;
  countryFlag: string;
  type: ProductType;
  brand: string;
  featured: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  stock: number;
  ingredients?: string;
  nutritionalInfo?: string;
  weightInGrams?: number;
}

export interface MunchBox {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  featured: boolean;
  isNew: boolean;
  rating: number;
  reviewCount: number;
  countries: string[];
  productCount: number;
  isMystery: boolean;
}

export type ProductType =
  | 'snack'
  | 'candy'
  | 'chocolate'
  | 'beverage'
  | 'condiment'
  | 'bakery'
  | 'instant'
  | 'noodle';

export interface CartItem {
  product: Product | MunchBox;
  quantity: number;
  isMunchbox?: boolean;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  featuredImage: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  country: string;
  description: string;
}