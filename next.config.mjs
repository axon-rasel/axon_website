/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // <--- THIS IS THE MISSING PIECE
  images: {
    unoptimized: true,   // Required for static exports
  },
};

export default nextConfig;
