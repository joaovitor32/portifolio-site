/* eslint-disable @typescript-eslint/no-var-requires */

const isProd = false;

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
});

const nextConfig = {
  env: {
    NEXT_PUBLIC_GITHUB_API: process.env.NEXT_PUBLIC_GITHUB_API,
    NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN: process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN,
    NEXT_PUBLIC_USERNAME: process.env.NEXT_PUBLIC_USERNAME,
  },
  publicRuntimeConfig: {
    AWS_ACCESS_KEY: '',
    AWS_SECRET_KEY: '',
    AWS_REGION: '',
    TO_MAIL: '',
  },
  reactStrictMode: false,

  images: {
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },
};

const pwaConfig = withPWA(nextConfig);

module.exports = pwaConfig;
