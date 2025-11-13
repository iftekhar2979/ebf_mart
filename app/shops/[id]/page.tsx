// app/supermarket/[id]/page.tsx

'use client';

import * as React from 'react';
import Image from 'next/image';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { Breadcrumbs } from '@/components/ui/Breadcumbs';
import { fakeProducts, supermarketDetails } from '@/components/config/products';
import { ProductCard } from '@/components/common/Products/Card';
import { AppPromoBanner } from '@/components/common/banner/AppPromoBanner';
import { promoData } from '@/components/common/banner/data/promoData';

// // --- Import Reusable Components & Data ---
// import { Breadcrumbs } from '@/components/ui/breadcrumbs'; 
// import { ProductCard } from '@/components/ProductCard'; // Your animated card
// import { fakeProducts, supermarketDetails } from '@/data/supermarket-products';
// ----------------------------------------

// Breadcrumbs data
const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Supermarket', href: '/supermarket/1' },
];

export default function SupermarketDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = React.useState<'products' | 'reviews'>('products');
  const pageRef = React.useRef<HTMLDivElement>(null);

//   // GSAP Page Entrance Animation
//   React.useEffect(() => {
//     if (pageRef.current) {
//       gsap.from(pageRef.current, { 
//         opacity: 0, 
//         y: 20, 
//         duration: 0.8, 
//         ease: 'power3.out' 
//       });
//     }
//   }, []);

  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    // Optional: GSAP fade animation for tab content switch
    gsap.from('#tab-content', { opacity: 0, duration: 0.3, ease: 'power1.out' });
  };

  const TabButton: React.FC<{ tab: typeof activeTab, label: string }> = ({ tab, label }) => (
    <Button
      variant="ghost"
      onClick={() => handleTabChange(tab)}
      className={`text-base font-semibold pb-3 rounded-none border-b-2 
        ${activeTab === tab 
          ? 'border-pink-600 text-pink-600 hover:bg-transparent' 
          : 'border-transparent text-gray-500 hover:text-gray-700'
        }
      `}
      style={{ transition: 'color 0.3s, border-color 0.3s' }}
    >
      {label}
    </Button>
  );

  return (
    <div ref={pageRef} className="min-h-screen">
      
      {/* Container for the main content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10" style={{ color: '#ff69b4' }}>
          SUPERMARKET
        </h1>

        {/* Supermarket Header Section */}
        <div className="max-w-4xl mx-auto border-b pb-6 mb-8">
          <div className="flex justify-between items-start">
            <div className="flex items-start space-x-4">
              
              {/* Logo/Image */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-gray-200 shadow-md">
                  <Image
                      src={supermarketDetails.logoUrl}
                      alt={supermarketDetails.name}
                      fill
                      sizes="80px"
                      style={{ objectFit: 'cover' }}
                      priority 
                  />
              </div>
              
              {/* Details */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{supermarketDetails.name}</h2>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-2 text-pink-500" />
                  <span>{supermarketDetails.location}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Clock className="h-4 w-4 mr-2 text-pink-500" />
                  <span>{supermarketDetails.hours}</span>
                </div>
              </div>
            </div>
            
            {/* Favorite Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 text-pink-600 border-pink-600 hover:bg-pink-50 hover:border-pink-700 shrink-0"
              aria-label="Toggle favorite supermarket"
              onClick={() => console.log('Supermarket favorited!')}
            >
              <Heart className="h-5 w-5 fill-pink-600" />
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-4xl mx-auto flex justify-start space-x-8 border-b border-gray-200 mb-8">
          <TabButton tab="products" label="Supermarket Product" />
          <TabButton tab="reviews" label="Rating & Reviews" />
        </div>

        {/* Content Area */}
        <div id="tab-content">
          {activeTab === 'products' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-16">
              {/* Renders the animated ProductCard component */}
              {fakeProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  {...product} // Passes all product details
                  index={index} // Critical for GSAP staggered animation
                />
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="p-8 text-center text-gray-600 bg-gray-50 rounded-lg max-w-4xl mx-auto">
              <p className="text-lg font-medium">Rating & Reviews content will load here.</p>
              <p>This section is currently a placeholder.</p>
            </div>
          )}
        </div>
      </div>
      <div className="mx-16 my-10">
            
                      <AppPromoBanner
                    imageUrl={promoData.imageUrl}
                    title={promoData.title}
                    subtitle={promoData.subtitle}
                    ctaLabel={promoData.ctaLabel}
                    ctaLink={promoData.ctaLink}
                  />
                  </div>
    </div>
  );
}