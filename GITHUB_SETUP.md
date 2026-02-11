# GitHub Setup Guide

## Initial Setup

### 1. Create GitHub Repository

```bash
# On GitHub.com
1. Click "+" → "New repository"
2. Name: "suhasini-ramesh-portfolio"
3. Description: "Professional portfolio - Frontend Developer"
4. Public repository
5. Do NOT initialize with README
6. Create repository
```

### 2. Initialize Local Repository

```bash
cd suhasini-ramesh-portfolio

git init
git add .
git commit -m "Initial commit: Professional portfolio"
```

### 3. Connect to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/suhasini-ramesh-portfolio.git
git branch -M main
git push -u origin main
```

## GitHub Pages Deployment

### Option 1: GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

Enable GitHub Pages:
1. Settings → Pages
2. Source: GitHub Actions
3. Save

### Option 2: Manual Deploy

```bash
npm run build

# Push out/ directory to gh-pages branch
git subtree push --prefix out origin gh-pages
```

## Ongoing Updates

### Making Changes

```bash
# Make your changes
git add .
git commit -m "Update: description of changes"
git push
```

### Common Workflows

**Update content:**
```bash
git add app/components/
git commit -m "Update: project information"
git push
```

**Add images:**
```bash
git add public/logos/
git commit -m "Add: tech stack logos"
git push
```

**Change styling:**
```bash
git add app/globals.css tailwind.config.js
git commit -m "Style: update color scheme"
git push
```

## Repository Settings

### Recommended Settings

1. **Branch Protection**
   - Settings → Branches
   - Add rule for `main`
   - Require pull request reviews (optional)

2. **Topics**
   - Add topics: `portfolio`, `nextjs`, `typescript`, `frontend`

3. **Description**
   - "Professional portfolio showcasing 9+ years of frontend development"

4. **Website**
   - Add deployed URL

## .gitignore

Already included in project. Key exclusions:
- `/node_modules`
- `/.next`
- `/out` (for some workflows)
- `.env*.local`

## Best Practices

### Commit Messages

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Styling changes
- `refactor:` Code refactoring

Examples:
```bash
git commit -m "feat: add new project to portfolio"
git commit -m "fix: correct experience dates"
git commit -m "style: adjust mobile spacing"
git commit -m "docs: update README"
```

### Branching Strategy

For solo work:
```bash
# Work directly on main
git add .
git commit -m "your message"
git push
```

For collaboration:
```bash
# Create feature branch
git checkout -b feature/new-section
# Make changes
git add .
git commit -m "feat: add testimonials section"
git push -u origin feature/new-section
# Create pull request on GitHub
```

## Troubleshooting

### Build fails on GitHub

Check:
1. Node version (should be 18+)
2. Dependencies installed correctly
3. Build works locally (`npm run build`)

### Images not loading

Ensure:
1. Images in `/public` directory
2. Paths start with `/` (e.g., `/logos/react.svg`)
3. Correct file extensions

### Deployment not updating

```bash
# Clear Next.js cache
rm -rf .next
npm run build
git add .
git commit -m "fix: rebuild for deployment"
git push
```

## Additional Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Vercel Deployment](https://vercel.com/docs)

---

Your portfolio is production-ready and GitHub-optimized!
