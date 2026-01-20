# Commerce Demo Kit Walkthrough

## Overview
This kit is a sales-ready Next.js 14 application designed to demonstrate a high-end commerce experience to potential clients. It is built with performance, SEO, and "premium feel" as top priorities.

## Key Features
- **Zero Config Theming**: Change `src/config/siteConfig.ts` to overhaul the entire brand.
- **No Tailwind**: Pure, semantic CSS with modern variables for maximum control.
- **Mock Commerce Engine**: Full cart and product flow without needing a backend.
- **Safe Analytics**: Production-ready event mapping that safe-fails if IDs are missing.

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Local Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000`

3. **Deploy to Vercel**
   - Connect repo.
   - Add environment variables (optional).
   - Click Deploy.

## Customization

### Configuring Brand
Edit `src/config/siteConfig.ts`. This file controls:
- Brand Name & Copy
- Color Palette (Hex codes)
- Product Catalog (Mock data)
- Navigation Links

### Adding Products
Add objects to the `products` array in `siteConfig.ts`. Images should be placed in `public/placeholders/` or hosted externally.

### Analytics
To enable tracking, add these variables in Vercel or `.env.local`:
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`

## Troubleshooting
- **Images not loading?** Ensure they exist in `public/` or use absolute URLs.
- **Cart not saving?** Check browser `localStorage` permissions.
- **Build errors?** Run `npm run lint` to catch TypeScript issues.
