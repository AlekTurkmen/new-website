/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/belvedere-landing',
  assetPrefix: '/belvedere-landing',
}

module.exports = nextConfig 