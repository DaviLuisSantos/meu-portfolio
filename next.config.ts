import nextI18NextConfig from './next-i18next.config';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  reactStrictMode: true,
  i18n: nextI18NextConfig.i18n,
};

export default nextConfig;