export interface Course {
  id: string;
  title: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  students: number;
  price: number;
  image: string;
  progress?: number;
  categories: string[];
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  progress: {
    completed: number;
    total: number;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}