# Shopify Integration Plan

## Overview
This demo kit is designed to separate the "Frontend Experience" from the "Backend Engine". While currently running in mock mode, it is architected to switch to Shopify Headless (Storefront API) or a Liquid Theme integration seamlessly.

## Route A: Headless (Recommended for this Stack)
Since this is a Next.js application, the most natural path is using Shopify's Storefront API.

### Steps to Activate:
1. **Install Shopify SDK**
   ```bash
   npm install @shopify/shopify-api
   ```
2. **Environment Setup**
   - `SHOPIFY_STORE_DOMAIN`
   - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
3. **Replace `siteConfig.products`**
   - Create `src/lib/shopify.ts` to fetch products.
   - Update `src/app/products/page.tsx` to `await getProducts()`.
4. **Checkout**
   - Use `shopify.checkout.create()` mutation.
   - Redirect user to the `webUrl` returned by Shopify.

## Route B: Liquid Theme (Hybrid)
If you prefer to move this design into a standard Shopify Theme.

### Steps:
1. **Export Assets**
   - CSS tokens from `globals.css` -> `settings_schema.json`.
2. **Port Components**
   - `Header.tsx` -> `header.liquid`.
   - `ProductCard.tsx` -> `product-card.liquid`.
3. **Caveats**
   - You lose the instant page transitions of Next.js.
   - You must rewrite React state logic (Cart) into Vanilla JS or Alpine.js.

## Data Model Mapping
| Demo Field | Shopify Field |
| --- | --- |
| `handle` | `handle` |
| `title` | `title` |
| `price` | `variants.edges[0].node.price` |
| `options` | `options` (name/values) |
| `images` | `images` (edges) |
| `analyticsCategory` | `product_type` |
