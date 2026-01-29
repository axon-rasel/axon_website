/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure trailingSlash is true if you have subpages
  trailingSlash: true, 
};

export default nextConfig;
