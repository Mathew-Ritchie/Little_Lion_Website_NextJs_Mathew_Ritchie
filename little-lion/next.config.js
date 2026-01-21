/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // static export
  images: {
    unoptimized: true, // <-- disable Next.js image optimization
  },
};

module.exports = nextConfig;