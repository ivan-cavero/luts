const { withAxiom } = require('next-axiom')

let nextConfig = {
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

if (process.env.AXIOM_ENABLED === 'true') {
  nextConfig = withAxiom(nextConfig)
}

module.exports = nextConfig
