/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gitmorph',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
