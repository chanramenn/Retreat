# Files to Remove

These files are not necessary for GitHub Pages deployment:

## Netlify-specific files
- `netlify.toml` - Netlify configuration file, not needed for GitHub Pages

## Duplicate or redundant documentation
- `DEPLOYMENT.md` - Replaced by GITHUB-DEPLOYMENT.md
- `PRE-DEPLOYMENT-CHECKLIST.md` - No longer needed as we have a GitHub-specific guide

## Bun-related files (if you're using npm)
- `bun.lockb` - Bun lockfile, not needed if you're using npm

## Miscellaneous files
- `.DS_Store` files - macOS system files
- Any `.heic` files in public/images - These might not be supported by all browsers

## Optional cleanup (if you want to be thorough)
- Unused images in public/images folder
- Unused UI components in src/components/ui/

## Keep these important files
- `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment
- `public/CNAME` - Required for custom domain
- `public/404.html` - Required for client-side routing
- `public/robots.txt` - Important for SEO
- `public/sitemap.xml` - Important for SEO
- All source code files in src/
- Configuration files: vite.config.ts, tsconfig.json, etc.
- package.json and package-lock.json