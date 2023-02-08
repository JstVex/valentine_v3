/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**/**/**/**',
      },
      {
        protocol: 'https',
        hostname: 'dsm01pap007files.storage.live.com',
        port: '',
        pathname: '/**/**/**/**',
      }
    ],
  },
}

module.exports = nextConfig
