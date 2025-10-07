import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co', 'cdn.yoursite.com'], // External image domains you trust
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [320, 420, 768, 1024, 1200], // Default responsive breakpoints
    imageSizes: [16, 32, 48, 64, 96],         // Fixed image sizes (icons, avatars, etc.)
  },
};

export default nextConfig;
