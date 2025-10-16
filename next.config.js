module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/davidnavarro.github.io',
  assetPrefix: '/davidnavarro.github.io/',
  eslint: { ignoreDuringBuilds: true },   // <- add this
};