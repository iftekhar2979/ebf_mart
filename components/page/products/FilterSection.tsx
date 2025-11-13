// components/FilterSection.tsx

import * as React from 'react';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterItem {
  label: string;
  value: string;
}

interface FilterSectionProps {
  title: string;
  items: FilterItem[];
  icon?: React.ElementType; // Optional icon for the title
  onSelect?: (value: string) => void;
  selectedItem?: string;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ 
  title, 
  items, 
  icon: Icon, 
  onSelect, 
  selectedItem 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        {Icon && <Icon className="h-5 w-5 mr-2 text-pink-600" />}
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li 
            key={item.value} 
            className={`flex justify-between items-center py-2 px-3 rounded-md transition-colors duration-200 cursor-pointer
              ${selectedItem === item.value ? 'bg-pink-50 text-pink-700 font-medium' : 'hover:bg-gray-50 text-gray-600'}
            `}
            onClick={() => onSelect?.(item.value)}
          >
            <span>{item.label}</span>
            <ChevronRight className={`h-4 w-4 ${selectedItem === item.value ? 'text-pink-600' : 'text-gray-400'}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};