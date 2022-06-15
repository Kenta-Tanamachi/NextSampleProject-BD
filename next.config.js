/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.jp', 'raw.githubusercontent.com'],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
