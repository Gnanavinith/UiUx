import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardStats from './components/dashboard/DashboardStats';
import CourseCard from './components/courses/CourseCard';
import { courses } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
            <DashboardStats />
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <button className="text-blue-600 hover:text-blue-700">
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;