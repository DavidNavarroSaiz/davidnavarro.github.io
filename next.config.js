const isDev = process.env.NODE_ENV === 'development';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

module.exports = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { 
    unoptimized: true,
  },
  // Only use basePath for GitHub Pages in production
  basePath: isGitHubPages ? '/davidnavarro.github.io' : '',
  assetPrefix: isGitHubPages ? '/davidnavarro.github.io/' : '',
  eslint: { ignoreDuringBuilds: true },
};