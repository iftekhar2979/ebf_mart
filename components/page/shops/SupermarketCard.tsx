// components/SupermarketCard.tsx

"use client"; // This component uses client-side interactivity (useState, GSAP)

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin } from 'lucide-react';
// import { Supermarket } from '@/data/supermarkets';

// import { useGSAP } from '@gsap';
import gsap from 'gsap';
import { Supermarket } from './data/supermakets';

interface SupermarketCardProps {
  supermarket: Supermarket;
  // Optional: A handler for when the favorite icon is clicked
  onToggleFavorite?: (id: string) => void; 
}

export const SupermarketCard: React.FC<SupermarketCardProps> = ({ 
  supermarket, 
  onToggleFavorite 
}) => {
  const [isFavorite, setIsFavorite] = React.useState(supermarket.isFavorite);
//   const cardRef = React.useRef<HTMLDivElement>(null);
//   const heartRef = React.useRef<SVGSVGElement>(null);

//   // GSAP Entrance Animation
//   useGSAP(() => {
//     gsap.from(cardRef.current, { 
//       opacity: 0, 
//       y: 50, 
//       duration: 0.6, 
//       ease: 'power3.out',
//       delay: Math.random() * 0.3 // Staggered entrance
//     });
//   }, []);

  // GSAP Heart Click Animation
  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev);
    onToggleFavorite?.(supermarket.id); // Call parent handler if provided

    // gsap.timeline()
    //   .to(heartRef.current, { 
    //     scale: 1.2, 
    //     duration: 0.15, 
    //     ease: "back.out(3)", 
    //     yoyo: true, 
    //     repeat: 1 
    //   })
    //   .to(heartRef.current, { 
    //     fill: isFavorite ? 'none' : '#ec4899', // Fill based on new state
    //     stroke: isFavorite ? '#a1a1aa' : '#ec4899', // Stroke based on new state
    //     duration: 0.2
    //   }, "<"); // Animate fill/stroke at the same time as scale out
  };

  return (
    <div 
    //   ref={cardRef}
      className="relative w-full rounded-xl overflow-hidden bg-white shadow-lg 
                 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative w-full h-40 md:h-48 overflow-hidden">
        <Image
          src={supermarket.imageUrl}
          alt={supermarket.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        
        {/* Favorite Icon */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/70 
                     hover:bg-white transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            // ref={heartRef}
            className="h-6 w-6 transition-colors duration-200"
            fill={isFavorite ? '#ec4899' : 'none'} // Pink-600
            stroke={isFavorite ? '#ec4899' : '#a1a1aa'} // Gray-400 for outline
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
       <Link href={`/shops/${supermarket.id}`} className="text-lg font-semibold text-gray-800 mb-2 truncate" >
          {supermarket.name}
        </Link>
        <div className="flex items-center text-gray-500 text-sm">
          <MapPin className="h-4 w-4 mr-1 text-pink-500 shrink-0" />
          <span className="truncate">{supermarket.location}</span>
        </div>
      </div>
    </div>
  );
};