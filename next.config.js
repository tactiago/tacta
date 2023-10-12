/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'instagram.fcgh51-1.fna.fbcdn.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
