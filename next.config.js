const repo = 'davidnavarro.github.io';

module.exports = {
  reactStrictMode: true,
  output: 'export',            // ahora sí válido con Next 13.4+
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  // evita que ESLint rompa el build mientras corriges
  eslint: { ignoreDuringBuilds: true },
};