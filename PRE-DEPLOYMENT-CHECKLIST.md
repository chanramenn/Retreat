# Pre-Deployment Checklist for Vipassana Retreats Website

## ✅ Environment Variables
- [x] Updated `.env.production` with production API keys
- [x] Verified Web3Forms access key is correct (8bac3045-241d-4d05-9fa1-d5d0078de2c3)
- [x] Verified Yandex Maps API key is working (0bccd4da-a4b4-4855-b246-316c5f545fca)
- [x] Updated domain URLs in environment files to https://vipassana-retreats.netlify.app

## ✅ SEO & Meta Tags
- [x] Updated `public/sitemap.xml` with actual domain (https://vipassana-retreats.netlify.app)
- [x] Updated `public/robots.txt` with actual domain
- [x] Updated meta tags in `index.html` with proper domain and image paths
- [x] Added og:url and twitter:url meta tags

## ✅ Code Improvements
- [x] Fixed TypeScript type issues in Contacts.tsx
- [x] Removed unused imports in Contacts.tsx
- [x] Ensured API keys are loaded from environment variables

## 📋 Build & Deployment Steps

### 1. Run Type Check
```bash
npm run type-check
```

### 2. Run Linting
```bash
npm run lint
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build Locally
```bash
npm run preview
```

### 5. Deploy to Netlify
- Push your changes to GitHub
- Connect your GitHub repository to Netlify
- Netlify will automatically deploy your site using the settings in `netlify.toml`

## 📋 Post-Deployment Tasks

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

### 3. Analytics
- [ ] Set up Google Analytics or other analytics tool (optional)
- [ ] Monitor form submissions

## 📋 Troubleshooting Common Issues

### 1. Environment Variables
If environment variables aren't working:
- Check that they are prefixed with `VITE_` (required for Vite to expose them to the client)
- Verify they are correctly set in Netlify's environment variables section
- Make sure the `.env.production` file is being used during build

### 2. Routing Issues
If routes aren't working after deployment:
- Verify the `_redirects` file or the redirects in `netlify.toml` are correctly set up
- Check that the BrowserRouter is configured correctly

### 3. API Issues
If APIs aren't working:
- Check browser console for CORS errors
- Verify API keys are correct
- Test API endpoints directly to ensure they're operational