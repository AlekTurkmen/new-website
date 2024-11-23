/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/belvedere-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/belvedere-landing' : '',
  trailingSlash: true,
}

module.exports = nextConfig 