import React from 'react';
import { Star, Clock, Users } from 'lucide-react';
import { Course } from '../../types';
import Card from '../common/Card';
import Button from '../common/Button';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.progress && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              className="h-full bg-green-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
            {course.level}
          </span>
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="h-4 w-4 mr-1" />
          {course.duration}
          <Users className="h-4 w-4 ml-4 mr-1" />
          {course.students.toLocaleString()} students
        </div>
        
        <p className="text-sm text-gray-600 mb-2">
          by <span className="font-medium">{course.instructor}</span>
        </p>
        
        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold">${course.price}</span>
            {course.progress && (
              <span className="text-sm text-gray-600">
                {course.progress}% complete
              </span>
            )}
          </div>
          
          <Button
            variant={course.progress ? 'outline' : 'primary'}
            className="w-full"
          >
            {course.progress ? 'Continue Learning' : 'Enroll Now'}
          </Button>
        </div>
      </div>
    </Card>
  );
}