import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('./'),
      '@/components': path.resolve('./components'),
      '@/constants': path.resolve('./constants'),
      '@/styles': path.resolve('./styles'),
      '@/utils': path.resolve('./utils'),
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '*',
      },
    ],
  },
};

export default nextConfig;
