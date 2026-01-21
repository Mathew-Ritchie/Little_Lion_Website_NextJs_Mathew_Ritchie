/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // remove `output: 'export'`
  images: {
    unoptimized: false, // optional, let Next.js handle images
  },
};

module.exports = nextConfig;