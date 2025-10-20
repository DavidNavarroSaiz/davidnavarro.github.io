# 🚀 Deployment Guide

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Production Deployment

### GitHub Pages

```bash
# Build for GitHub Pages
npm run build:github

# The build will be in ./out directory
# GitHub Actions will automatically deploy this
```

### Other Platforms (Vercel, Netlify)

```bash
# Standard build
npm run build

# The build will be in ./out directory
```

## Environment Configuration

### Local Development
- `NODE_ENV=development`
- `basePath=""` (empty)
- `assetPrefix=""` (empty)
- HMR works correctly

### GitHub Pages Production
- `NODE_ENV=production`
- `GITHUB_ACTIONS=true`
- `basePath="/davidnavarro.github.io"`
- `assetPrefix="/davidnavarro.github.io/"`

### Other Production Platforms
- `NODE_ENV=production`
- `basePath=""` (empty)
- `assetPrefix=""` (empty)

## Troubleshooting

### HMR Issues in Development
If you see WebSocket connection errors:
1. Restart the development server
2. Clear browser cache
3. Check that `basePath` is empty in development

### Build Issues
1. Check environment variables
2. Verify `next.config.js` configuration
3. Run `npm run build:github` for GitHub Pages specifically

## File Structure
```
├── .github/workflows/deploy.yml  # GitHub Actions
├── next.config.js                # Next.js configuration
├── package.json                  # Build scripts
└── out/                          # Build output
```
