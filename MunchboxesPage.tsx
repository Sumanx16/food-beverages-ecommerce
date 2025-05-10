import React from 'react';
import { Package } from 'lucide-react';
import MunchboxCard from '../components/products/MunchboxCard';
import { munchboxes } from '../data/products';

const MunchboxesPage: React.FC = () => {
  const regularBoxes = munchboxes.filter(box => !box.isMystery);
  const mysteryBoxes = munchboxes.filter(box => box.isMystery);

  return (
    <div className="bg-gray-50">
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5945569/pexels-photo-5945569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="Munchboxes and Mystery Boxes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <Package className="h-8 w-8 text-white mr-3" />
            <h1 className="text-white text-4xl md:text-5xl font-bold">
              Munchboxes & Mystery Boxes
            </h1>
          </div>
          <p className="text-white text-xl max-w-2xl">
            Curated boxes filled with international treats, perfect for gifting or treating yourself
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Curated Munchboxes</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            Each Munchbox is carefully curated to bring you the best selection of international treats. These boxes are perfect for exploring the flavors of specific countries or regions without having to buy individual items.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularBoxes.map((box) => (
              <MunchboxCard key={box.id} munchbox={box} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Mystery Boxes</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">
            For the adventurous foodies! Our Mystery Boxes contain a surprise selection of international snacks and treats. Each box is different, offering a unique tasting experience from around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mysteryBoxes.map((box) => (
              <MunchboxCard key={box.id} munchbox={box} />
            ))}
          </div>
        </section>

        <section className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Munchbox FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What's in a Munchbox?</h3>
              <p className="text-gray-700">
                Each Munchbox contains a carefully curated selection of authentic international snacks, candies, and treats. The exact contents vary by box type, but you can expect 7-15 items depending on the box size.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">What's the difference between Munchboxes and Mystery Boxes?</h3>
              <p className="text-gray-700">
                Munchboxes have a specific theme (like a country or region) and a consistent selection of products. Mystery Boxes contain a surprise assortment that changes with each box, perfect for adventurous eaters!
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Do you offer subscriptions?</h3>
              <p className="text-gray-700">
                Yes! You can subscribe to receive a new box every month at a discounted rate. Visit your account page after creating an account to set up a subscription.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Can I customize my box?</h3>
              <p className="text-gray-700">
                Currently, our boxes come pre-curated. However, you can let us know about any allergies or dietary restrictions, and we'll do our best to accommodate them.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MunchboxesPage;