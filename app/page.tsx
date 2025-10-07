// import { NavigationMenus } from "@/components/common/Navbar";
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
    <ProductGrid/>
    </>
  );
}
