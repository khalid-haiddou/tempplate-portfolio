# Deployment Guide

This guide will help you deploy your portfolio template to GitHub and Netlify.

## Step 1: Push to GitHub

### 1. Create a GitHub Repository
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `portfolio-template`)
5. Choose Public or Private
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Connect and Push Your Code

Run these commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/gawsdev/portfolio-template.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Netlify

### Option A: Deploy from GitHub (Recommended)

1. Go to [Netlify](https://www.netlify.com) and sign up/sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your repository
6. Configure build settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `/` (root directory)
7. Click "Deploy site"
8. Netlify will automatically deploy your site!

### Option B: Drag and Drop Deployment

1. Go to [Netlify](https://www.netlify.com)
2. Drag and drop your project folder onto the Netlify dashboard
3. Your site will be live immediately!

---

## Step 3: Configure Your Site

### Change Site Name
1. Go to Site settings → General → Site details
2. Click "Change site name"
3. Enter your desired name (e.g., `gawsdev-portfolio`)

### Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

### Environment Variables (if needed)
1. Go to Site settings → Environment variables
2. Add any required environment variables

---

## Multiple Versions

You have 3 versions of your portfolio:
- `index.html` - Original version
- `index-v2.html` - Modern version with light/dark theme
- `index-v3.html` - Pure black version

### To Set Default Page:

1. In Netlify, go to Site settings → Build & deploy → Build settings
2. Add a redirect rule in `_redirects` file or use Netlify's redirect rules:
   - To make `index-v2.html` the default, create a `_redirects` file in the root:
     ```
     /  /index-v2.html  200
     /index  /index-v2.html  200
     ```

### Or Create `netlify.toml`:

Create a `netlify.toml` file in the root directory:

```toml
[[redirects]]
  from = "/"
  to = "/index-v2.html"
  status = 200

[[redirects]]
  from = "/v1"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "/v2"
  to = "/index-v2.html"
  status = 200

[[redirects]]
  from = "/v3"
  to = "/index-v3.html"
  status = 200
```

---

## Continuous Deployment

Once connected to GitHub, Netlify will:
- Automatically deploy when you push changes
- Show deploy previews for pull requests
- Keep deployment history

---

## Useful Commits

After making changes, commit and push:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Netlify will automatically deploy your changes!

