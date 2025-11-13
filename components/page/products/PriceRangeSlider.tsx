// components/PriceRangeSlider.tsx

import * as React from 'react';
import { Label } from '@/components/ui/label'; // Assuming shadcn/ui Label
import { Input } from '@/components/ui/input'; // Assuming shadcn/ui Input

interface PriceRangeSliderProps {
  min: number;
  max: number;
  initialMin: number;
  initialMax: number;
  onChange?: (min: number, max: number) => void;
}

export const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({
  min,
  max,
  initialMin,
  initialMax,
  onChange,
}) => {
  const [currentMin, setCurrentMin] = React.useState(initialMin);
  const [currentMax, setCurrentMax] = React.useState(initialMax);

  React.useEffect(() => {
    setCurrentMin(initialMin);
    setCurrentMax(initialMax);
  }, [initialMin, initialMax]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= min && value <= currentMax) {
      setCurrentMin(value);
      onChange?.(value, currentMax);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= max && value >= currentMin) {
      setCurrentMax(value);
      onChange?.(currentMin, value);
    }
  };

  // Simple visual representation of a slider bar
  const progressWidth = ((currentMax - currentMin) / (max - min)) * 100;
  const progressLeft = ((currentMin - min) / (max - min)) * 100;

  return (
    <div className="p-4 rounded-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Price</h3>
      <div className="relative h-1 bg-gray-200 rounded-full mb-6">
        <div 
          className="absolute h-full bg-pink-600 rounded-full" 
          style={{ left: `${progressLeft}%`, width: `${progressWidth}%` }}
        ></div>
        <div 
          className="absolute h-4 w-4 rounded-full bg-pink-600 top-1/2 -translate-y-1/2 shadow-sm"
          style={{ left: `${progressLeft}%` }}
        ></div>
        <div 
          className="absolute h-4 w-4 rounded-full bg-pink-600 top-1/2 -translate-y-1/2 shadow-sm"
          style={{ left: `${progressLeft + progressWidth}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center text-gray-700 text-sm font-medium">
        <span>৳ {currentMin}</span>
        <span>৳ {currentMax}</span>
      </div>
      {/* Optional: Actual input fields for precise control */}
      {/* <div className="flex justify-between mt-4 space-x-2">
        <Input 
          type="number" 
          value={currentMin} 
          onChange={handleMinChange} 
          className="w-1/2" 
        />
        <Input 
          type="number" 
          value={currentMax} 
          onChange={handleMaxChange} 
          className="w-1/2" 
        />
      </div> */}
    </div>
  );
};