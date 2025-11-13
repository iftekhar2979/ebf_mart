// components/AppPromoBanner.tsx

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 

// --- Type Definition ---
interface AppPromoBannerProps {
  /** The URL for the background image. */
  imageUrl: string;
  /** The main, large title text. */
  title: string;
  /** The smaller subtitle text. */
  subtitle: string;
  /** The text displayed on the CTA button. */
  ctaLabel: string;
  /** The link destination for the CTA button (e.g., download link). */
  ctaLink: string;
}

export const AppPromoBanner: React.FC<AppPromoBannerProps> = ({
  imageUrl,
  title,
  subtitle,
  ctaLabel,
  ctaLink,
}) => {

  return (
    <div 
      // *** MODIFIED: Set fixed height h-[233px] ***
      className="relative px-4 w-full h-[233px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
    >
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        // layout="fill" (Recommended for Next.js 13+ with fill prop)
        fill // Use the 'fill' prop for Next.js 13+
        objectFit="cover" // This ensures the image always covers the 233px height
        quality={75}
        className="brightness-75" 
        priority 
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> 
      
      {/* Content Container */}
      <div 
        // *** MODIFIED: Center content vertically within the fixed height ***
        className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row items-center justify-between h-full"
      >
        
        {/* Text Content */}
        <div className="max-w-2xl mb-4 md:mb-0">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-2 drop-shadow-lg">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-gray-100/90 drop-shadow-md line-clamp-2">
            {subtitle}
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="shrink-0">
          {/* <Link href={ctaLink} passHref legacyBehavior> */}
            <Button 
              asChild
              className="bg-pink-600 hover:bg-pink-700 text-white text-md font-bold py-4 px-6 rounded-full shadow-xl transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              {/* <a onClick={() => console.log(`CTA clicked for: ${title}`)}> */}
                {ctaLabel}
              {/* </a> */}
            </Button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};