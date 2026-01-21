/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',       // enable static export
  images: { unoptimized: true },  // needed if you use <Image>
};

module.exports = nextConfig;