// components/ReviewCard.tsx

import * as React from 'react';
import { FaStar } from 'react-icons/fa'; // Using react-icons for star rating

interface ReviewCardProps {
  reviewerName: string;
  rating: number; // e.g., 4.5
  reviewText: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  reviewerName,
  rating,
  reviewText,
}) => {
  const fullStars = Math.floor(rating);
  const totalReviews = 5;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 transition-shadow duration-300 hover:shadow-lg">
      
      {/* Rating Display */}
      <div className="flex items-center mb-3">
        <span className="text-lg font-bold mr-2 text-gray-800">{rating.toFixed(1)}</span>
        
        {/* Stars */}
        <div className="flex text-pink-600">
          {Array.from({ length: totalReviews }).map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${i < fullStars ? 'text-pink-600' : 'text-gray-300'} ${
                // Optional: add a half-star effect if needed, though the design uses full blocks
                i === fullStars && rating % 1 !== 0 ? 'opacity-50' : '' 
              }`}
            />
          ))}
        </div>
      </div>

      {/* Reviewer Name */}
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        {reviewerName}
      </h3>

      {/* Review Text */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {reviewText}
      </p>
    </div>
  );
};