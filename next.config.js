const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
  basePath: '/POAP-Pathway',
  assetPrefix: '/POAP-Pathway',
  reactStrictMode: true,
  images: { unoptimized: true },
});
