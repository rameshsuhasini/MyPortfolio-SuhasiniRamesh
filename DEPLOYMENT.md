# Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## Vercel (Recommended - Easiest)

### Why Vercel?
- Made by Next.js creators
- Zero configuration
- Automatic deployments
- Free for personal projects

### Steps

1. **Push to GitHub** (see GITHUB_SETUP.md)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New..." → "Project"
   - Import your repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Done!**
   - Your site is live at: `https://suhasini-ramesh-portfolio.vercel.app`
   - Updates deploy automatically on git push

### Custom Domain

1. In Vercel project settings
2. Domains → Add Domain
3. Follow DNS configuration steps

## Netlify

### Steps

1. **Push to GitHub**

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Deploy

3. **Site URL**
   - `https://suhasini-ramesh-portfolio.netlify.app`

## GitHub Pages

### Automatic Deployment

1. **Setup GitHub Actions**
   - Create `.github/workflows/deploy.yml`
   - Copy content from GITHUB_SETUP.md

2. **Enable Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions
   - Save

3. **Deploy**
   - Push to main branch
   - Actions run automatically
   - Site live at: `https://YOUR_USERNAME.github.io/suhasini-ramesh-portfolio`

### Manual Deployment

```bash
# Build
npm run build

# Deploy out/ folder
npx gh-pages -d out
```

Enable Pages:
- Settings → Pages
- Source: gh-pages branch
- Save

## Custom Domain Setup

### For Vercel/Netlify

1. **Buy Domain** (Namecheap, Google Domains, etc.)

2. **Add Domain in Platform**
   - Project Settings → Domains
   - Add your domain

3. **Update DNS Records**
   - Follow platform instructions
   - Usually add A/CNAME records
   - Wait for DNS propagation (up to 24 hours)

### For GitHub Pages

1. **Add CNAME file**
```bash
echo "yourdomain.com" > public/CNAME
git add public/CNAME
git commit -m "Add custom domain"
git push
```

2. **Update DNS**
   - Add A records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or CNAME: `YOUR_USERNAME.github.io`

## Environment Variables

If you need environment variables:

### Vercel
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Netlify
1. Site Settings → Build & deploy → Environment
2. Add variables
3. Trigger new deploy

### GitHub Pages
Add to workflow file:
```yaml
env:
  NEXT_PUBLIC_API_KEY: ${{ secrets.API_KEY }}
```

## Performance Optimization

### Before Deployment

```bash
# Check build
npm run build

# Check size
npm run build && du -sh out/

# Test production build locally
npm run start
```

### Image Optimization

Logos already local and optimized. For additional images:
- Use WebP format
- Compress before adding
- Max width: 2000px

### Lighthouse Check

1. Deploy site
2. Run Lighthouse in Chrome DevTools
3. Address any issues
4. Target: 90+ scores

## Monitoring

### Vercel Analytics

- Free in Vercel dashboard
- Page views, performance
- No setup required

### Google Analytics (Optional)

1. Get GA4 tracking ID
2. Add to `app/layout.tsx`:

```typescript
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

Check:
- Correct paths (`/logos/name.svg`)
- Files exist in `/public`
- Proper extensions

### Slow First Load

- Already using static export
- Images are local
- Minimal dependencies

### HTTPS Certificate

- Automatic on all platforms
- May take 5-10 minutes initially

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All sections navigate properly
- [ ] Side navigation works
- [ ] Projects expand on hover
- [ ] Links open correctly
- [ ] Mobile responsive
- [ ] Fast load time
- [ ] No console errors

## Updating Deployed Site

### Vercel/Netlify
```bash
git add .
git commit -m "Update content"
git push
# Auto-deploys
```

### GitHub Pages
```bash
git add .
git commit -m "Update content"
git push
# GitHub Action runs automatically
```

## Rollback (If Needed)

### Vercel
1. Deployments tab
2. Find previous deployment
3. Click "Promote to Production"

### Netlify
1. Deploys tab
2. Find previous deploy
3. Click "Publish deploy"

### GitHub Pages
```bash
git revert HEAD
git push
```

---

## Quick Deploy Commands

```bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy --prod

# GitHub Pages
npm run build
npx gh-pages -d out
```

Your portfolio is ready for production deployment! 🚀
