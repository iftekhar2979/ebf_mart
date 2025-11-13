// import { NavigationMenus } from "@/components/common/Navbar";
import CategoryGrid from "@/components/common/Categories/CategoriesGrid";
import Navbar from "@/components/common/Navbar";
import ProductGrid from "@/components/common/Products/ProductGrid";
import ReelsSection from "@/components/common/Reels/Reels";
import HeroSection from "@/components/page/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ReelsSection/>
    <ProductGrid category="Trending Product"/>
     <ProductGrid category="Discounted Product"/>
        <ProductGrid category="All Product"/>

          <CategoryGrid />
    </>
  );
}
