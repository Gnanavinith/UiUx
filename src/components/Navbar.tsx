import React from 'react';
import { Plane, Search, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TravelHub</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Flights</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Hotels</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Packages</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">Deals</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}