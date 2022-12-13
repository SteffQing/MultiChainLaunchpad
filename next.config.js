/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["astar.network", "moonbeam.network"],
  },
};

module.exports = nextConfig;
