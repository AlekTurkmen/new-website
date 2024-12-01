/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/relevancy-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/relevancy-landing' : '',
  trailingSlash: true,
}

module.exports = nextConfig