const repo = 'davidnavarro.github.io';

module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: `/${repo}`,
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true, // if you show SVGs
  },
};
