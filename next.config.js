const { withAxiom } = require('next-axiom')

const nextConfig = {
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  },
  images: {
    domains: ['blitz-cdn.blitz.gg', 'cruip-tutorials.vercel.app']
  }
}

module.exports = withAxiom(nextConfig)
