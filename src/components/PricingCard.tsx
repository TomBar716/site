import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: number;
  features: string[];
  users: number;
  yearlyDiscount?: boolean;
}

export function PricingCard({ title, price, features, users, yearlyDiscount = false }: PricingCardProps) {
  const yearlyPrice = yearlyDiscount ? price * 12 * 0.95 : price * 12;

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-red-500">${price}</span>
        <span className="text-gray-400">/month</span>
        <div className="text-sm text-gray-400 mt-1">
          or ${yearlyPrice}/year (5% off)
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-white font-semibold">
          Up to {users} team members
        </div>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <Check className="w-5 h-5 text-red-500 mr-2" />
            {feature}
          </div>
        ))}
      </div>
      <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors">
        Get Started
      </button>
    </div>
  );
}