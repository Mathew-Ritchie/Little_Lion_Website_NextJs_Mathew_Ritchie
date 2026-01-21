/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',          // enable static export
  images: {
    unoptimized: true,       // required if using <Image> components
  },
};

module.exports = nextConfig;