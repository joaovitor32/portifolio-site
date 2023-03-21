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
    AWS_ACCESS_KEY: 'AKIAVWL35TR52B555S5H',
    AWS_SECRET_KEY: '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',
    AWS_REGION: 'us-east-1',
    TO_MAIL: 'joaovitormunizlopes@gmail.com',
  },
  reactStrictMode: false,

  images: {
    domains: ['localhost'],
    minimumCacheTTL: 60,
  },
};

const pwaConfig = withPWA(nextConfig);

module.exports = pwaConfig;
