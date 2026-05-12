import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow ngrok host for dev server and HMR
  allowedDevOrigins: ['overwarmed-clarifyingly-haven.ngrok-free.dev'],
  experimental: {
    serverActions: {
      allowedOrigins: ['overwarmed-clarifyingly-haven.ngrok-free.dev'],
    },
  },
};

export default nextConfig;
