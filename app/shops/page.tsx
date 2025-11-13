// app/favorite-supermarkets/page.tsx

// import { Breadcrumbs } from '@/components/ui/breadcrumbs';
// import { FavoriteSupermarketsGrid } from '@/components/FavoriteSupermarketsGrid';
// import { fakeSupermarkets } from '@/data/supermarkets'; // Your fake data

// This is a client component because the grid and cards have client-side interactivity
"use client";
import { AppPromoBanner } from "@/components/common/banner/AppPromoBanner";
import { promoData } from "@/components/common/banner/data/promoData";
import { fakeSupermarkets } from "@/components/page/shops/data/supermakets";
import { FavoriteSupermarketsGrid } from "@/components/page/shops/SupermarketGrid";
import { Breadcrumbs } from "@/components/ui/Breadcumbs";

 

export default function FavoriteSupermarketsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Supermarkets", href: "/supermarkets" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} className="mb-6" />

      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center text-pink-600 mb-10 tracking-wide">
        SUPERMARKET
      </h1>

      {/* Supermarket Grid */}
      <FavoriteSupermarketsGrid supermarkets={fakeSupermarkets} />

      
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