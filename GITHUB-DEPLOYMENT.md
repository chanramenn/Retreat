# GitHub Pages Deployment Guide

This guide will help you deploy your React application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Setup

Your project has already been configured for GitHub Pages deployment with the following:

1. **HashRouter**: The app uses HashRouter instead of BrowserRouter for better compatibility with GitHub Pages.
2. **Base URL**: The Vite config has been updated with `base: './'` to ensure assets are loaded correctly.
3. **404.html**: A custom 404 page has been added to handle client-side routing.
4. **CNAME**: A CNAME file has been added for your custom domain (retreaty.space).
5. **GitHub Actions**: A workflow file has been added to automate deployment.

## Deployment Methods

You have two options for deploying to GitHub Pages:

### Option 1: Manual Deployment (using gh-pages package)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   This will build your project and push the `dist` folder to the `gh-pages` branch.

### Option 2: Automated Deployment (using GitHub Actions)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. **Set up GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages"
   - Under "Source", select "GitHub Actions"

3. **Add repository secrets for environment variables**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Click on "Secrets and variables" > "Actions"
   - Add the following secrets:
     - `VITE_WEB3FORMS_ACCESS_KEY`: Your Web3Forms access key
     - `VITE_YANDEX_MAPS_API_KEY`: Your Yandex Maps API key

4. **The GitHub Actions workflow will automatically deploy your site when you push to the main branch.**

## Custom Domain Setup

1. **Configure your domain provider**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

2. **Verify your custom domain in GitHub**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages"
   - Under "Custom domain", enter your domain (retreaty.space)
   - Check "Enforce HTTPS" for secure connections

## Troubleshooting

### Images or assets not loading
- Make sure all asset paths are relative
- Check that the `base` option in `vite.config.ts` is set to `'./'`

### Routing issues
- Make sure you're using HashRouter instead of BrowserRouter
- Check that all links in your app use relative paths

### Custom domain not working
- Verify DNS settings with your domain provider
- Make sure the CNAME file exists in the `public` folder
- Check that GitHub Pages is configured to use your custom domain

### Deployment failing
- Check GitHub Actions logs for errors
- Verify that all environment variables are set correctly
- Make sure your repository has the correct permissions for GitHub Actions