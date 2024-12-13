import React from 'react';
import { Bell, Search } from 'lucide-react';
import Button from '../common/Button';

const user = {
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        <div className="flex items-center space-x-6">
          <Button variant="outline" size="sm">
            Upgrade Pro
          </Button>

          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-8 w-8 rounded-full"
            />
            <span className="font-medium">{user.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
}