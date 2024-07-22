import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve('@/'),
      '@/components': path.resolve('@/components'),
      '@/shared': path.resolve('@/components/shared'),
      '@/ui': path.resolve('@/components/ui'),
      '@/constants': path.resolve('@/constants'),
      '@/styles': path.resolve('@/styles'),
      '@/lib': path.resolve('@/lib'),
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
