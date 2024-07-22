const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/constants': path.resolve(__dirname, 'constants'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/utils': path.resolve(__dirname, 'utils'),
    };
    return config;
  },
};

module.exports = nextConfig;
