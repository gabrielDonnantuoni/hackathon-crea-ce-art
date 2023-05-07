/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  redirects () {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
