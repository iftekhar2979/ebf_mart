// components/product/ProductImageGallery.tsx

import * as React from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  mainImageUrl: string;
  thumbnailUrls: string[];
  productName: string;
  setMainImage: (url: string) => void;
  // Ref from parent for GSAP
  ref?: React.Ref<HTMLDivElement>;
}

export const ProductImageGallery = React.forwardRef<HTMLDivElement, ProductImageGalleryProps>(
  ({ mainImageUrl, thumbnailUrls, productName, setMainImage }, ref) => {
    return (
      <div ref={ref} className="flex space-x-4">
        
        {/* Thumbnails Column */}
        <div className="flex flex-col space-y-4 w-20 shrink-0">
          {thumbnailUrls.map((url, index) => (
            <div
              key={index}
              className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 cursor-pointer 
                          transition-all duration-300 shadow-md 
                          ${mainImageUrl.includes(url) ? 'border-pink-600' : 'border-transparent hover:border-gray-200'}
              `}
              onClick={() => setMainImage(url)}
            >
              <Image src={url} alt={`${productName} Thumbnail ${index + 1}`} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="relative flex-grow h-[550px] rounded-xl overflow-hidden shadow-2xl">
          <Image 
            key={mainImageUrl}
            src={mainImageUrl} 
            alt={productName} 
            fill 
            style={{ objectFit: 'cover' }} 
            className="transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    );
  }
);
ProductImageGallery.displayName = 'ProductImageGallery';