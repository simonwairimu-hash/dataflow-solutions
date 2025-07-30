import type { NextConfig } from "next";
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  
  typescript: {
    
    // ignoreBuildErrors: true,
  },
};

export default nextConfig;
