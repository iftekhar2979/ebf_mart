// components/product/ProductInfoSection.tsx

import * as React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface ProductInfoSectionProps {
  name: string;
  description: string;
  rating: number;
  price: number;
  stock: number;
  shopLogo: string;
  // Ref from parent for GSAP
  ref?: React.Ref<HTMLDivElement>;
}

export const ProductInfoSection = React.forwardRef<HTMLDivElement, ProductInfoSectionProps>(
  ({ name, description, rating, price, stock, shopLogo }, ref) => {
    return (
      <div ref={ref} className="p-4 relative">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{name}</h1>
        
        {/* Rating */}
        <div className="flex items-center text-xl text-pink-600 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`h-5 w-5 ${i < Math.floor(rating) ? 'text-pink-600' : 'text-gray-300'}`}
            />
          ))}
          <span className="ml-3 text-gray-600 text-lg font-medium">{rating.toFixed(1)}/5</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        
        {/* Shop Avatar (Floating/Absolute Positioning) */}
        <div className="absolute top-10 right-10 bg-white p-3 rounded-full shadow-lg border border-gray-100 flex items-center space-x-2 hidden lg:flex">
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src={shopLogo} alt="Shop Logo" fill style={{ objectFit: 'cover' }} />
          </div>
          <span className="text-sm font-semibold text-gray-700">Stock Available</span>
        </div>
        
        {/* Price & Stock */}
        <div className="flex justify-between items-center mb-6">
           <span className="text-4xl font-extrabold text-pink-600">৳{price}</span>
           <span className="text-sm text-gray-500 font-semibold">{stock} left</span>
        </div>
      </div>
    );
  }
);
ProductInfoSection.displayName = 'ProductInfoSection';