/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  assetPrefix: '/', // Ensures CSS/JS assets load relative to your domain over HTTPS
};

export default nextConfig;
