/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,   // safer React checks
  swcMinify: true,         // fast minification
  assetPrefix: '/',        // ensures CSS/JS load relative to your domain
  output: 'standalone',    // recommended for Netlify
};

export default nextConfig;