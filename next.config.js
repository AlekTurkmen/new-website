/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/relevancy-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/relevancy-landing' : '',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig