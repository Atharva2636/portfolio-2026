/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, // Needed for static hosting
  },
};

export default nextConfig;