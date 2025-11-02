# Netlify Deployment Guide

## Automatic Deployment from GitHub

Netlify automatically deploys your site when you push to GitHub. Follow these steps:

## Step 1: Deploy to Netlify (Recommended Method)

### Method 1: Deploy from GitHub (Automatic Deployments)

1. **Go to Netlify**: https://www.netlify.com
2. **Sign up/Sign in** (You can use your GitHub account)
3. **Click**: "Add new site" → "Import an existing project"
4. **Choose**: "Deploy with GitHub"
5. **Authorize** Netlify to access your GitHub account
6. **Select your repository**: `khalid-haiddou/tempplate-portfolio`
7. **Configure build settings**:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `/` (root directory)
8. **Click**: "Deploy site"

✅ **Done!** Netlify will automatically deploy every time you push to GitHub!

---

## Step 2: Configure GitHub Actions (Optional)

If you want to use GitHub Actions for additional deployment control:

### Get Your Netlify Credentials

1. **Get Netlify Auth Token**:
   - Go to: https://app.netlify.com/user/applications
   - Click "New access token"
   - Give it a name (e.g., "GitHub Actions")
   - Copy the token

2. **Get Netlify Site ID**:
   - Go to your Netlify site dashboard
   - Go to: Site settings → General → Site details
   - Copy the "Site ID"

### Add Secrets to GitHub

1. **Go to your GitHub repository**: https://github.com/khalid-haiddou/tempplate-portfolio
2. **Click**: Settings → Secrets and variables → Actions
3. **Click**: "New repository secret"
4. **Add two secrets**:
   - Name: `NETLIFY_AUTH_TOKEN` → Value: (paste your Netlify auth token)
   - Name: `NETLIFY_SITE_ID` → Value: (paste your Netlify site ID)

---

## How It Works

### Automatic Deployment (Netlify Default)
- ✅ Pushes to `main` branch → Auto-deploy to Netlify
- ✅ Pull requests → Deploy preview
- ✅ No GitHub Actions needed

### GitHub Actions (If Configured)
- ✅ Additional control over deployment
- ✅ Custom build processes
- ✅ Multiple deployment environments

---

## Testing Deployment

After setup, test it:

```bash
# Make a small change
echo "<!-- Updated -->" >> index-v2.html

# Commit and push
git add .
git commit -m "Test deployment"
git push origin main
```

Check Netlify dashboard - you should see a new deployment automatically!

---

## Your Site URLs

After deployment:
- **Production**: `https://your-site-name.netlify.app`
- **Version 1**: `https://your-site-name.netlify.app/v1`
- **Version 2**: `https://your-site-name.netlify.app/v2`
- **Version 3**: `https://your-site-name.netlify.app/v3`

---

## Custom Domain (Optional)

1. Go to: Site settings → Domain management
2. Click: "Add custom domain"
3. Follow the instructions

---

## Troubleshooting

### If deployments don't trigger:
- Check Netlify build logs
- Verify GitHub repository connection
- Check build settings in Netlify

### If GitHub Actions fail:
- Verify secrets are set correctly
- Check workflow file syntax
- Review GitHub Actions logs

