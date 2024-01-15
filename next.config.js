/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

// const nextConfig = {}

// module.exports = nextConfig

module.exports = withNextIntl({
  //  Other Next.js configuration ...
  //  NextJS конфигурациясини шу ерга езсангиз булади

  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.edgestore.dev',
        pathname: '/**',
      },
    ],
    // minimumCacheTTL: 600,
  },
  

});
