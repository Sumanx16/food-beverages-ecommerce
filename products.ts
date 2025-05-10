import { Product, MunchBox, ProductType, Country, Brand } from '../types';

export const countries: Country[] = [
  {
    code: 'jp',
    name: 'Japan',
    flag: '🇯🇵',
    featuredImage: 'https://images.pexels.com/photos/5409673/pexels-photo-5409673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'kr',
    name: 'South Korea',
    flag: '🇰🇷',
    featuredImage: 'https://images.pexels.com/photos/2531159/pexels-photo-2531159.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'it',
    name: 'Italy',
    flag: '🇮🇹',
    featuredImage: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'mx',
    name: 'Mexico',
    flag: '🇲🇽',
    featuredImage: 'https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    featuredImage: 'https://images.pexels.com/photos/830963/pexels-photo-830963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'fr',
    name: 'France',
    flag: '🇫🇷',
    featuredImage: 'https://images.pexels.com/photos/2959131/pexels-photo-2959131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'nl',
    name: 'Netherlands',
    flag: '🇳🇱',
    featuredImage: 'https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  },
  {
    code: 'de',
    name: 'Germany',
    flag: '🇩🇪',
    featuredImage: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }
];

export const brands: Brand[] = [
  {
    id: 'haribo',
    name: 'Haribo',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Haribo_logo.svg/1200px-Haribo_logo.svg.png',
    country: 'Germany',
    description: 'Famous for their gummy bears and other fruit gummy candies.'
  },
  {
    id: 'pocky',
    name: 'Pocky',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pocky_logo.svg/1200px-Pocky_logo.svg.png',
    country: 'Japan',
    description: 'Chocolate-coated biscuit sticks in various flavors.'
  },
  {
    id: 'cadbury',
    name: 'Cadbury',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Cadbury_plc_Logo.svg/1200px-Cadbury_plc_Logo.svg.png',
    country: 'United Kingdom',
    description: 'Known for their dairy milk chocolate and various confectioneries.'
  },
  {
    id: 'kinder',
    name: 'Kinder',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kinder_logo.svg/1200px-Kinder_logo.svg.png',
    country: 'Italy',
    description: 'Famous for chocolate eggs with toys and other chocolate treats.'
  },
  {
    id: 'lotte',
    name: 'Lotte',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Lotte_Logo.svg/1200px-Lotte_Logo.svg.png',
    country: 'South Korea',
    description: 'Major manufacturer of confectionery and beverages.'
  },
  {
    id: 'toblerone',
    name: 'Toblerone',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Toblerone_logo.svg/1200px-Toblerone_logo.svg.png',
    country: 'Switzerland',
    description: 'Distinctive triangular chocolate bars with honey and almond nougat.'
  }
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Pocky Chocolate Sticks',
    price: 3.99,
    description: 'Classic Japanese chocolate-coated biscuit sticks. The perfect balance of crispy and sweet!',
    shortDescription: 'Chocolate-coated biscuit sticks',
    image: 'https://images.pexels.com/photos/9991569/pexels-photo-9991569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Japan',
    countryFlag: '🇯🇵',
    type: 'snack',
    brand: 'Pocky',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    weightInGrams: 48
  },
  {
    id: 'p2',
    name: 'Haribo Goldbears',
    price: 2.99,
    description: 'The original gummy bears from Germany, featuring fruit flavors like raspberry, orange, strawberry, pineapple, and lemon.',
    shortDescription: 'Original fruit-flavored gummy bears',
    image: 'https://images.pexels.com/photos/5023286/pexels-photo-5023286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Germany',
    countryFlag: '🇩🇪',
    type: 'candy',
    brand: 'Haribo',
    featured: true,
    isNew: false,
    rating: 4.7,
    reviewCount: 209,
    stock: 75,
    weightInGrams: 200
  },
  {
    id: 'p3',
    name: 'Cadbury Dairy Milk Chocolate',
    price: 4.49,
    description: 'Smooth and creamy milk chocolate bar made with a glass and a half of fresh milk in every half pound.',
    shortDescription: 'Classic creamy milk chocolate',
    image: 'https://images.pexels.com/photos/65883/chocolate-dark-coffee-confiserie-65883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    type: 'chocolate',
    brand: 'Cadbury',
    featured: false,
    isNew: false,
    rating: 4.6,
    reviewCount: 187,
    stock: 60,
    weightInGrams: 200
  },
  {
    id: 'p4',
    name: 'Kinder Bueno',
    price: 1.99,
    description: 'Crispy wafer filled with hazelnut cream, covered in milk chocolate. A delightfully light and creamy treat.',
    shortDescription: 'Crispy wafer with hazelnut cream',
    image: 'https://images.pexels.com/photos/8964016/pexels-photo-8964016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Italy',
    countryFlag: '🇮🇹',
    type: 'chocolate',
    brand: 'Kinder',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 231,
    stock: 45,
    weightInGrams: 43
  },
  {
    id: 'p5',
    name: 'Shin Ramyun Noodle Soup',
    price: 2.49,
    description: 'Spicy Korean instant noodle soup with a rich beef broth. Ready in just 5 minutes!',
    shortDescription: 'Spicy Korean instant noodles',
    image: 'https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'South Korea',
    countryFlag: '🇰🇷',
    type: 'instant',
    brand: 'Nongshim',
    featured: false,
    isNew: false,
    rating: 4.5,
    reviewCount: 156,
    stock: 100,
    weightInGrams: 120
  },
  {
    id: 'p6',
    name: 'Lotus Biscoff Cookies',
    price: 3.99,
    description: 'Crunchy caramelized biscuits with a unique taste. Perfect with coffee or tea!',
    shortDescription: 'Crunchy caramelized cookies',
    image: 'https://images.pexels.com/photos/4109248/pexels-photo-4109248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Belgium',
    countryFlag: '🇧🇪',
    type: 'bakery',
    brand: 'Lotus',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 93,
    stock: 50,
    weightInGrams: 250
  },
  {
    id: 'p7',
    name: 'Toblerone Swiss Chocolate',
    price: 5.99,
    description: 'Distinctive triangular Swiss chocolate bar filled with honey and almond nougat.',
    shortDescription: 'Triangular honey-almond chocolate',
    image: 'https://images.pexels.com/photos/8962406/pexels-photo-8962406.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    type: 'chocolate',
    brand: 'Toblerone',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 177,
    stock: 35,
    weightInGrams: 360
  },
  {
    id: 'p8',
    name: 'Matcha Green Tea Kit Kat',
    price: 6.99,
    description: 'Japanese Kit Kat bars featuring matcha green tea flavor. A perfect balance of sweet and slightly bitter.',
    shortDescription: 'Green tea flavored chocolate wafers',
    image: 'https://images.pexels.com/photos/5638334/pexels-photo-5638334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Japan',
    countryFlag: '🇯🇵',
    type: 'chocolate',
    brand: 'Nestle',
    featured: false,
    isNew: true,
    rating: 4.6,
    reviewCount: 118,
    stock: 30,
    weightInGrams: 146
  },
  {
    id: 'p9',
    name: 'San Pellegrino Sparkling Water',
    price: 2.49,
    description: 'Italian natural mineral sparkling water with a refreshing taste and fine bubbles.',
    shortDescription: 'Premium Italian sparkling water',
    image: 'https://images.pexels.com/photos/6993998/pexels-photo-6993998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Italy',
    countryFlag: '🇮🇹',
    type: 'beverage',
    brand: 'San Pellegrino',
    featured: false,
    isNew: false,
    rating: 4.5,
    reviewCount: 89,
    stock: 120,
    weightInGrams: 750
  },
  {
    id: 'p10',
    name: 'Milka Alpine Milk Chocolate',
    price: 3.99,
    description: 'Creamy milk chocolate made with Alpine milk. Distinctively smooth and mellow.',
    shortDescription: 'Smooth Alpine milk chocolate',
    image: 'https://images.pexels.com/photos/3721911/pexels-photo-3721911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Switzerland',
    countryFlag: '🇨🇭',
    type: 'chocolate',
    brand: 'Milka',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 144,
    stock: 55,
    weightInGrams: 100
  },
  {
    id: 'p11',
    name: 'Stroopwafels',
    price: 4.99,
    description: 'Traditional Dutch caramel-filled waffle cookies. Best enjoyed when placed on top of a hot beverage!',
    shortDescription: 'Dutch caramel waffle cookies',
    image: 'https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    type: 'bakery',
    brand: 'Daelmans',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 212,
    stock: 40,
    weightInGrams: 250
  },
  {
    id: 'p12',
    name: 'Tajín Clásico Seasoning',
    price: 3.49,
    description: 'Mexican lime, chili, and salt seasoning that adds a zesty kick to fruits, vegetables, and more.',
    shortDescription: 'Lime, chili, and salt seasoning',
    image: 'https://images.pexels.com/photos/12034622/pexels-photo-12034622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Mexico',
    countryFlag: '🇲🇽',
    type: 'condiment',
    brand: 'Tajín',
    featured: false,
    isNew: false,
    rating: 4.8,
    reviewCount: 167,
    stock: 85,
    weightInGrams: 142
  },
  {
    id: 'p13',
    name: 'Ramune Japanese Soda',
    price: 2.99,
    description: 'Distinctive Japanese carbonated soft drink with a unique marble-sealed bottle design. Original flavor.',
    shortDescription: 'Traditional Japanese marble soda',
    image: 'https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Japan',
    countryFlag: '🇯🇵',
    type: 'beverage',
    brand: 'Ramune',
    featured: false,
    isNew: true,
    rating: 4.4,
    reviewCount: 78,
    stock: 65,
    weightInGrams: 200
  },
  {
    id: 'p14',
    name: 'Manner Wafers',
    price: 3.99,
    description: 'Original Viennese wafers with hazelnut chocolate cream filling. Crispy, light, and indulgent.',
    shortDescription: 'Hazelnut chocolate cream wafers',
    image: 'https://images.pexels.com/photos/11776505/pexels-photo-11776505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Austria',
    countryFlag: '🇦🇹',
    type: 'snack',
    brand: 'Manner',
    featured: false,
    isNew: false,
    rating: 4.6,
    reviewCount: 95,
    stock: 50,
    weightInGrams: 75
  },
  {
    id: 'p15',
    name: 'Yorkshire Tea',
    price: 7.99,
    description: 'Proper British tea known for its rich, full-bodied flavor. Perfect for a traditional cuppa.',
    shortDescription: 'Premium British black tea',
    image: 'https://images.pexels.com/photos/5946646/pexels-photo-5946646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    type: 'beverage',
    brand: 'Yorkshire Tea',
    featured: false,
    isNew: false,
    rating: 4.8,
    reviewCount: 256,
    stock: 75,
    weightInGrams: 250
  },
  {
    id: 'p16',
    name: 'Chupa Chups Lollipops',
    price: 4.99,
    description: 'Assorted flavors of the iconic Spanish lollipops in a convenient pack. Long-lasting fruity flavor.',
    shortDescription: 'Assorted fruit lollipops',
    image: 'https://images.pexels.com/photos/3644000/pexels-photo-3644000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Spain',
    countryFlag: '🇪🇸',
    type: 'candy',
    brand: 'Chupa Chups',
    featured: false,
    isNew: false,
    rating: 4.5,
    reviewCount: 123,
    stock: 90,
    weightInGrams: 192
  },
  {
    id: 'p17',
    name: 'Honey Butter Chips',
    price: 5.99,
    description: 'Popular Korean potato chips with a unique sweet and savory honey butter flavor that became a nationwide sensation.',
    shortDescription: 'Sweet & savory Korean chips',
    image: 'https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'South Korea',
    countryFlag: '🇰🇷',
    type: 'snack',
    brand: 'Haitai',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 347,
    stock: 25,
    weightInGrams: 60
  },
  {
    id: 'p18',
    name: 'Kikkoman Soy Sauce',
    price: 4.49,
    description: 'Naturally brewed premium Japanese soy sauce that enhances the flavor of any dish.',
    shortDescription: 'Premium Japanese soy sauce',
    image: 'https://images.pexels.com/photos/6419734/pexels-photo-6419734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Japan',
    countryFlag: '🇯🇵',
    type: 'condiment',
    brand: 'Kikkoman',
    featured: false,
    isNew: false,
    rating: 4.7,
    reviewCount: 189,
    stock: 100,
    weightInGrams: 150
  },
  {
    id: 'p19',
    name: 'Amaretti Cookies',
    price: 8.99,
    description: 'Traditional Italian almond macaroons with a crisp exterior and soft, chewy center. Made with almond flour and amaretto liqueur.',
    shortDescription: 'Italian almond macaroons',
    image: 'https://images.pexels.com/photos/6233153/pexels-photo-6233153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Italy',
    countryFlag: '🇮🇹',
    type: 'bakery',
    brand: 'Lazzaroni',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 76,
    stock: 30,
    weightInGrams: 200
  },
  {
    id: 'p20',
    name: 'Bundaberg Ginger Beer',
    price: 2.99,
    description: 'Australian craft-brewed ginger beer with a distinctive spicy ginger flavor and real ginger pieces.',
    shortDescription: 'Australian craft ginger beer',
    image: 'https://images.pexels.com/photos/5257779/pexels-photo-5257779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    country: 'Australia',
    countryFlag: '🇦🇺',
    type: 'beverage',
    brand: 'Bundaberg',
    featured: false,
    isNew: false,
    rating: 4.6,
    reviewCount: 134,
    stock: 80,
    weightInGrams: 375
  }
];

export const munchboxes: MunchBox[] = [
  {
    id: 'mb1',
    name: 'Japanese Snack Box',
    price: 29.99,
    description: 'A curated selection of authentic Japanese snacks, candies, and treats. Featuring popular items like Pocky, Kit Kat in unique Japanese flavors, rice crackers, and more!',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 243,
    countries: ['Japan'],
    productCount: 10,
    isMystery: false
  },
  {
    id: 'mb2',
    name: 'European Chocolate Tour',
    price: 34.99,
    description: 'Indulge in the finest chocolates from across Europe. This box features premium selections from Belgium, Switzerland, Germany, and more. A chocolate lover\'s dream!',
    image: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: true,
    isNew: false,
    rating: 4.8,
    reviewCount: 187,
    countries: ['Belgium', 'Switzerland', 'Germany', 'France'],
    productCount: 8,
    isMystery: false
  },
  {
    id: 'mb3',
    name: 'Global Candy Mystery Box',
    price: 24.99,
    description: 'Surprise yourself with this mystery box featuring candies from around the world! Each box contains a different selection of unique candies you won\'t find in your local store.',
    image: 'https://images.pexels.com/photos/4966576/pexels-photo-4966576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 126,
    countries: ['Various'],
    productCount: 12,
    isMystery: true
  },
  {
    id: 'mb4',
    name: 'Korean Snack Collection',
    price: 27.99,
    description: 'Experience the trending flavors of Korea with this carefully selected box of Korean snacks and treats. Includes spicy, sweet, and savory options!',
    image: 'https://images.pexels.com/photos/7412102/pexels-photo-7412102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: false,
    isNew: false,
    rating: 4.8,
    reviewCount: 159,
    countries: ['South Korea'],
    productCount: 9,
    isMystery: false
  },
  {
    id: 'mb5',
    name: 'Ultimate Snacker\'s Mystery Box',
    price: 39.99,
    description: 'Our biggest mystery box filled with a mix of savory and sweet snacks from across the globe. Perfect for adventurous eaters who want to try it all!',
    image: 'https://images.pexels.com/photos/5945569/pexels-photo-5945569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: true,
    isNew: false,
    rating: 4.9,
    reviewCount: 278,
    countries: ['Various'],
    productCount: 15,
    isMystery: true
  },
  {
    id: 'mb6',
    name: 'Tea Time Treasures',
    price: 32.99,
    description: 'A selection of gourmet teas and accompanying biscuits and treats from the UK and across Europe. Perfect for afternoon tea enthusiasts!',
    image: 'https://images.pexels.com/photos/209428/pexels-photo-209428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    featured: false,
    isNew: true,
    rating: 4.7,
    reviewCount: 93,
    countries: ['United Kingdom', 'France', 'Netherlands'],
    productCount: 7,
    isMystery: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getMunchboxById = (id: string): MunchBox | undefined => {
  return munchboxes.find(box => box.id === id);
};

export const getProductsByCountry = (countryCode: string): Product[] => {
  return products.filter(product => product.country.toLowerCase() === countryCode.toLowerCase());
};

export const getProductsByType = (type: ProductType): Product[] => {
  return products.filter(product => product.type === type);
};

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brandId.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getFeaturedMunchboxes = (): MunchBox[] => {
  return munchboxes.filter(box => box.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getProductTypes = (): { id: ProductType; name: string }[] => {
  return [
    { id: 'snack', name: 'Snacks' },
    { id: 'candy', name: 'Candy' },
    { id: 'chocolate', name: 'Chocolate' },
    { id: 'beverage', name: 'Beverages' },
    { id: 'condiment', name: 'Condiments' },
    { id: 'bakery', name: 'Bakery Items' },
    { id: 'instant', name: 'Instant Foods' },
    { id: 'noodle', name: 'Noodles' }
  ];
};