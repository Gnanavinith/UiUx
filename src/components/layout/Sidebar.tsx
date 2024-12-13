import React from 'react';
import { Home, BookOpen, Award, Settings, LogOut } from 'lucide-react';
import { categories } from '../../data/mockData';

const mainLinks = [
  { icon: Home, label: 'Dashboard' },
  { icon: BookOpen, label: 'My Courses' },
  { icon: Award, label: 'Certificates' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center space-x-2 mb-8">
        <BookOpen className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold">EduHub</span>
      </div>

      <nav className="space-y-8">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Main Menu
          </h3>
          <ul className="space-y-2">
            {mainLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <span>{category.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8">
          <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-red-600 hover:bg-red-50">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}