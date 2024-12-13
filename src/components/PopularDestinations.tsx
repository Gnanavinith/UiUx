import React from 'react';

const destinations = [
  {
    id: 1,
    title: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$899',
  },
  {
    id: 2,
    title: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-6e249e7d84f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$1299',
  },
  {
    id: 3,
    title: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    price: '$1499',
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-xl font-semibold text-white">{destination.title}</h3>
                  <p className="text-white font-medium">Starting from {destination.price}</p>
                </div>
              </div>
              <div className="p-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                  View Deals
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}