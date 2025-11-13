// app/product/[id]/page.tsx

import { AppPromoBanner } from '@/components/common/banner/AppPromoBanner';
import { promoData } from '@/components/common/banner/data/promoData';
import ProductGrid from '@/components/common/Products/ProductGrid';
import { ProductDetailView } from '@/components/common/Products/SingleProduct/ProductDetailView';
import * as React from 'react';

// --- Import Reusable Components ---

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  
  // Note: In a real application, you would use params.id to fetch the specific product data.
  // For now, ProductDetailView uses mock data internally.
  const handleAppDownload = () => {
    console.log('Redirecting user to app download link.');
    // Example: router.push('/download-app');
  };

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 1. Main Product Section (Header/Navbar would go above this) */}
      <main className="flex-grow">
        <ProductDetailView/>
      </main>

  <ProductGrid category="You Might also Like"/>
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