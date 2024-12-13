import React from 'react';
import { Clock, Book, Trophy } from 'lucide-react';
import Card from '../common/Card';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function StatCard({ icon, label, value, trend }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        icon={<Clock className="h-6 w-6 text-blue-600" />}
        label="Learning Hours"
        value="32.5h"
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        icon={<Book className="h-6 w-6 text-blue-600" />}
        label="Courses in Progress"
        value="4"
      />
      <StatCard
        icon={<Trophy className="h-6 w-6 text-blue-600" />}
        label="Certificates Earned"
        value="6"
        trend={{ value: 2, isPositive: true }}
      />
    </div>
  );
}