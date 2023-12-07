const million = require('million/compiler')

const nextConfig = {
  images: {
    domains: ['blitz-cdn.blitz.gg', 'cruip-tutorials.vercel.app']
  },
  reactStrictMode: true
}

const millionConfig = {
  auto: true
  // if you're using RSC:
  // auto: { rsc: true },
}

module.exports = million.next(nextConfig, millionConfig)
