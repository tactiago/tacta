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
        hostname: 'instagram.**.fbcdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rsbarbara.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
