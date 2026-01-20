# Analytics Event Mapping

This document outlines the standard event implementation for the Lumière commerce kit. We use a unified `track()` dispatcher to send events to all active providers simultaneously.

## Provider Configuration
| Provider | ID Source | Notes |
| s--- | --- | --- |
| GA4 | `NEXT_PUBLIC_GA_ID` | Standard G-XXXXXXXX format |
| GTM | `NEXT_PUBLIC_GTM_ID` | GTM-XXXXXX container |
| Meta Pixel | `NEXT_PUBLIC_META_PIXEL_ID` | Pixel ID |

## Event Dictionary

### 1. Page View
Automatically triggered on route change via Next.js router listeners or GTM history change.
- **GA4**: `page_view`
- **Meta**: `PageView`

### 2. View Item (Product View)
Triggered when a PDP loads.
- **Trigger**: `useEffect` on `src/app/products/[handle]/page.tsx`
- **GA4**: `view_item`
- **Meta**: `ViewContent`
- **Params**:
  ```json
  {
    "currency": "USD",
    "value": 150.00,
    "items": [{ "item_id": "prod_01", "item_name": "Coat", "price": 150.00 }]
  }
  ```

### 3. Add to Cart
Triggered on "Add to Cart" button click.
- **Trigger**: ProductCard quick add or PDP button.
- **GA4**: `add_to_cart`
- **Meta**: `AddToCart`
- **Params**: Includes full item object.

### 4. View Cart
Triggered when Cart page is viewed.
- **Trigger**: `useEffect` on `src/app/cart/page.tsx`
- **GA4**: `view_cart`
- **Meta**: `ViewContent`

### 5. Begin Checkout
Triggered when clicking "Checkout" in Cart.
- **Trigger**: Button click.
- **GA4**: `begin_checkout`
- **Meta**: `InitiateCheckout`

### 6. Lead (Contact Form)
Triggered on successful form submission.
- **Trigger**: `/api/contact` returns 200.
- **GA4**: `generate_lead`
- **Meta**: `Lead`
