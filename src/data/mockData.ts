import { Course, Category } from '../types';
import { BookOpen, Code, Palette, ChartBar, Brain, Music } from 'lucide-react';

export const categories: Category[] = [
  { id: '1', name: 'Development', icon: 'Code' },
  { id: '2', name: 'Design', icon: 'Palette' },
  { id: '3', name: 'Business', icon: 'ChartBar' },
  { id: '4', name: 'Psychology', icon: 'Brain' },
  { id: '5', name: 'Music', icon: 'Music' },
  { id: '6', name: 'Education', icon: 'BookOpen' },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Patterns & Best Practices',
    instructor: 'Sarah Johnson',
    level: 'Advanced',
    duration: '12h 30m',
    rating: 4.8,
    students: 1234,
    price: 89.99,
    progress: 45,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categories: ['Development'],
  },
  {
    id: '2',
    title: 'UI/UX Design Principles',
    instructor: 'Michael Chen',
    level: 'Intermediate',
    duration: '8h 45m',
    rating: 4.6,
    students: 856,
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categories: ['Design'],
  },
  {
    id: '3',
    title: 'Data Structures & Algorithms',
    instructor: 'Alex Thompson',
    level: 'Advanced',
    duration: '15h 20m',
    rating: 4.9,
    students: 2341,
    price: 99.99,
    progress: 75,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    categories: ['Development'],
  },
];