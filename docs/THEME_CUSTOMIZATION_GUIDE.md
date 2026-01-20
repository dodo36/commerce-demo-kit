# Theme Customization Guide

## 1. Changing Colors & Fonts
All design tokens are centralized in `src/styles/globals.css`.
- **Colors**: Update the RGB/Hex values in `:root`.
- **Fonts**: We use `next/font`. To change the font family, update `src/app/layout.tsx`.

## 2. Editing Copy & Branding
Go to `src/config/siteConfig.ts`.
- Change `brand.name` to update the logo text.
- Update `landing.hero` for the main headline.
- Edit `landing.valueProps` to change the icons and features.

## 3. Product Management (Demo Mode)
To add or remove products in the demo:
1. Open `src/config/siteConfig.ts`.
2. Scroll to the `products` array.
3. Add a new object following the `Product` type interface.
4. Ensure `handle` is unique.
5. Place images in `public/placeholders/` and reference them by path.

## 4. Advanced Component Styling
We use Vanilla CSS Modules and utility classes.
- **Global Styles**: `src/styles/globals.css` (Grid, Buttons, Inputs).
- **Component Styles**: Check if the component has a specific `.module.css` (e.g., `button.module.css`) or uses inline styles/global classes.
