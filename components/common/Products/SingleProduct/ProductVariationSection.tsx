// components/product/ProductVariationSelectors.tsx

import * as React from 'react';
import { Button } from '@/components/ui/button';

interface Color {
  name: string;
  hex: string;
}

interface ProductVariationSelectorsProps {
  colors: Color[];
  selectedColor: string;
  setSelectedColor: (hex: string) => void;
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

// Helper: Size Selector
const SizeSelector: React.FC<{ items: string[]; selected: string; onSelect: (item: string) => void }> = ({ items, selected, onSelect }) => (
    <div className="flex flex-wrap gap-2">
        {items.map((size) => (
            <Button
                key={size}
                variant={selected === size ? 'default' : 'outline'}
                className={`rounded-lg font-medium py-2 px-4 h-auto transition-all duration-200 
                            ${selected === size ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}
                `}
                onClick={() => onSelect(size)}
            >
                {size}
            </Button>
        ))}
    </div>
);


export const ProductVariationSelectors: React.FC<ProductVariationSelectorsProps> = ({
  colors,
  selectedColor,
  setSelectedColor,
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <>
      {/* --- Variations: Color --- */}
      <div className="mb-6">
        <p className="text-lg font-semibold text-gray-800 mb-3">Select Colors</p>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 
                          ${selectedColor === color.hex ? 'border-pink-600 ring-2 ring-pink-300' : 'border-gray-200 hover:border-gray-400'}
              `}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color.hex)}
              aria-label={`Select color ${color.name}`}
            ></button>
          ))}
        </div>
      </div>

      {/* --- Variations: Size --- */}
      <div className="mb-8">
        <p className="text-lg font-semibold text-gray-800 mb-3">Choose Size</p>
        <SizeSelector 
            items={sizes} 
            selected={selectedSize} 
            onSelect={setSelectedSize} 
        />
      </div>
    </>
  );
};