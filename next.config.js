/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.shopee.co.th',
      },
    ],
  },
}

module.exports = nextConfig
