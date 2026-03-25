# Suhasini Ramesh - Portfolio

Professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Editorial typography-first design
- Muted purple color scheme
- Side navigation with smooth scrolling
- Local image storage (no CDN dependencies)
- Fully responsive
- Production-ready

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: DM Serif Display + IBM Plex Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repository
git clone <your-repo-url>
cd suhasini-ramesh-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
suhasini-ramesh-portfolio/
├── app/
│   ├── components/
│   │   ├── SideNav.tsx        # Side navigation
│   │   ├── Hero.tsx           # Landing section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Tech stack
│   │   ├── Experience.tsx     # Work history
│   │   ├── Projects.tsx       # Project showcase
│   │   └── Contact.tsx        # Contact info
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Main page
├── public/
│   └── logos/                 # Tech logos (local)
├── next.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Adding Tech Logos

1. Download logos as SVG/PNG
2. Place in `public/logos/`
3. Update paths in `Skills.tsx`

Example:
```typescript
{ name: 'React', icon: '/logos/react.svg' }
```

## Customization

### Update Personal Info

Edit these files:
- `app/components/Hero.tsx` - Name, title, intro
- `app/components/About.tsx` - Bio, education
- `app/components/Experience.tsx` - Work history
- `app/components/Projects.tsx` - Project list
- `app/components/Contact.tsx` - Contact details

### Change Colors

Edit `tailwind.config.js`:
```javascript
purple: {
  400: '#b89dd4',  // Light
  500: '#9975c0',  // Mid
  600: '#7d5ba6',  // Main
}
```

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push

# Import on Vercel
# vercel.com → Import → Deploy
```

### GitHub Pages

```bash
npm run build
# Deploy /out directory
```

### Other Platforms

Build output is in `/out` directory after `npm run build`.

## Design Philosophy

- **Typography First**: Content-driven design
- **No Cards**: Clean borders and spacing
- **Minimal Animations**: Subtle, professional
- **Generous Whitespace**: Breathing room
- **Professional**: No playful UI elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 90+
- No external image dependencies
- Optimized animations
- Production build minified

## License

MIT License - See LICENSE file

## Contact

**Suhasini Ramesh**
- Email: suhasiniramesh1911@gmail.com
- Location: Berlin, Germany
- GitHub: rameshsuhasini
- LinkedIn: suhasini-ramesh-be-mba

---

Built with professional standards and attention to detail.
