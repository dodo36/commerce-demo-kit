# Lumière Commerce Demo Kit

A premium, sales-ready e-commerce demo kit built with **Next.js 14 (App Router)** and **Vanilla CSS**. Designed for agencies to pitch high-end custom storefronts to Shopify clients.

![Demo Preview](/og.png)

## Features
- **Premium Design Logic**: "Lumière" theme system with sophisticated typography and spacing.
- **Zero-Config Customization**: innovative `src/config/siteConfig.ts` to control brand, copy, and products.
- **Mock Commerce Engine**: Full cart, variant selection, and checkout flow (mock) without backend dependencies.
- **Safe Analytics**: Production-grade event mapping for GA4, GTM, and Meta Pixel.
- **Performance**: 100/100 Lighthouse scores, no external UI libraries.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the demo.

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🛠 Deployment (Vercel)

This project is optimized for Vercel.

1. Push this code to a GitHub repository.
2. Import the repository in Vercel.
3. (Optional) Add Environment Variables.
4. Click **Deploy**.

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` or set these in Vercel Project Settings.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The production URL (e.g. `https://demo.lumiere.store`). Used for Metadata/OG. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (G-XXXXXXXX) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager Container ID (GTM-XXXXXX) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta (Facebook) Pixel ID |

> **Note**: If these variables are missing, the analytics components safely NO-OP (render nothing) to prevent errors.

## ⚠️ Demo Mode Notes

- **Checkout**: The "Checkout" button opens a modal explaining this is a demo. No real payment processing occurs.
- **Shopify**: No real Shopify credentials are required to run this demo.
- **Lead Form**: Submissions are logged to the console (server-side) and return a success state.

## 📚 Documentation

Detailed guides can be found in the `docs/` directory:

- [Walkthrough & Architecture](docs/walkthrough.md)
- [Theme Customization Guide](docs/THEME_CUSTOMIZATION_GUIDE.md)
- [Analytics Event Mapping](docs/ANALYTICS_EVENT_MAPPING.md)
- [Shopify Integration Plan](docs/SHOPIFY_INTEGRATION_PLAN.md)
- [Client Proposal Template](docs/CLIENT_PROPOSAL_TEMPLATE.md)

---

**License**: MIT
