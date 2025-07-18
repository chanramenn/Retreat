# Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Update `.env.production` with your production API keys
- [ ] Verify Web3Forms access key is correct
- [ ] Verify Yandex Maps API key is working
- [ ] Update domain URLs in environment files

### 2. Build Optimization
- [ ] Run `npm run lint:fix` to fix any linting issues
- [ ] Run `npm run type-check` to verify TypeScript types
- [ ] Test production build locally with `npm run build:prod && npm run preview`

### 3. SEO & Meta Tags
- [ ] Update `public/sitemap.xml` with your actual domain
- [ ] Update `public/robots.txt` with your actual domain
- [ ] Verify meta tags in `index.html` are correct

### 4. Performance
- [ ] Optimize images in `public/images/` (consider WebP format)
- [ ] Test loading speeds
- [ ] Verify all images are properly sized

## Deployment Platforms

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Build settings are already configured in `netlify.toml`
3. Environment variables will be set automatically from the config
4. Deploy command: `npm run build`
5. Publish directory: `dist`

### Vercel
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `VITE_WEB3FORMS_ACCESS_KEY`
   - `VITE_YANDEX_MAPS_API_KEY`
   - `VITE_APP_TITLE`
   - `VITE_APP_URL`
3. Build command: `npm run build:prod`
4. Output directory: `dist`

### Manual Deployment
1. Run `npm run build:prod`
2. Upload `dist/` folder contents to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## Post-Deployment

### 1. Testing
- [ ] Test all pages load correctly
- [ ] Test contact form submission
- [ ] Test map functionality
- [ ] Test responsive design on mobile devices
- [ ] Test all navigation links

### 2. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test page loading speeds with Google PageSpeed Insights

### 3. Monitoring
- [ ] Set up error monitoring (optional)
- [ ] Monitor form submissions
- [ ] Check analytics setup (if needed)

## Troubleshooting

### Common Issues
1. **White screen after deployment**: Check browser console for errors, usually related to routing
2. **API keys not working**: Verify environment variables are set correctly
3. **Images not loading**: Check image paths and file names
4. **Form not submitting**: Verify Web3Forms API key and network requests

### Build Errors
- Run `npm run type-check` to identify TypeScript issues
- Run `npm run lint` to identify code quality issues
- Check that all imports are correct and files exist