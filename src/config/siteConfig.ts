import { LucideIcon, ShieldCheck, Truck, RotateCcw, Star, Package, CreditCard } from 'lucide-react';

export type Product = {
    id: string;
    handle: string;
    title: string;
    subtitle: string;
    price: number;
    compareAtPrice?: number;
    badges: string[];
    tags: string[];
    images: string[];
    options: { name: string; values: string[] }[];
    variants: { id: string; title: string; available: boolean; price: number }[];
    description: string;
    features: string[];
    materials: string;
    care: string;
    shippingCopy: string;
    returnsCopy: string;
    analyticsCategory: string;
};

export const siteConfig = {
    brand: {
        name: "LUMIÈRE",
        shortName: "LUMIÈRE",
        domain: "videodemos.store",
        supportEmail: "hello@lumiere.store",
        legal: {
            companyName: "Lumière Commerce Demo, Inc.",
            address: "123 Fashion Ave, New York, NY 10001",
        },
        social: {
            instagram: "https://instagram.com",
            twitter: "https://twitter.com",
            tiktok: "https://tiktok.com",
        }
    },
    theme: {
        colors: {
            accent: "#1a1a1a", // Deep black/charcoal
            accent2: "#8e8e8e", // Muted secondary
            bg: "#ffffff",
            text: "#111111",
            surface: "#f9f9f9",
            border: "#e5e5e5",
        }
    },
    landing: {
        hero: {
            headline: "The New Standard in Modern Essentials",
            subheadline: "Elevated design for the everyday. Premium materials, sustainable production, and timeless aesthetics.",
            primaryCta: "Shop Collection",
            secondaryCta: "Read Our Story",
        },
        trust: [
            {
                icon: Truck,
                title: "Fast Shipping",
                desc: "Free 2-day shipping on orders over $150"
            },
            {
                icon: RotateCcw,
                title: "Easy Returns",
                desc: "30-day hassle-free return policy"
            },
            {
                icon: ShieldCheck,
                title: "Secure Checkout",
                desc: "Bank-level encryption for your data"
            }
        ],
        valueProps: [
            { icon: Star, title: "Premium Quality", desc: "Sourced from the finest mills in Italy and Japan." },
            { icon: Package, title: "Sustainable Packaging", desc: "100% recycled and biodegradable materials." },
            { icon: CreditCard, title: "Transparent Pricing", desc: "No hidden makeups. Direct to consumer." },
            { icon: Star, title: "Expert Craftsmanship", desc: "Hand-finished by master tailors." },
            { icon: Star, title: "Timeless Design", desc: "Styles that never go out of fashion." },
            { icon: Star, title: "Lifetime Guarantee", desc: "We stand behind our products forever." },
        ],
        testimonials: [
            {
                text: "The quality needs to be seen to be believed. Absolutely stunning pieces.",
                author: "Sarah J.",
                role: "Verified Buyer"
            },
            {
                text: "Minimalist perfection. I've replaced my entire wardrobe with Lumière.",
                author: "Michael T.",
                role: "Architect"
            },
            {
                text: "Fast shipping and the packaging was a delight to open. Highly recommend.",
                author: "Jessica L.",
                role: "Designer"
            }
        ],
        faq: [
            { q: "Where do you ship?", a: "We ship worldwide via DHL Express." },
            { q: "What is your return policy?", a: "Unworn items can be returned within 30 days." },
            { q: "How do I care for my garments?", a: "Check the care label. Most items are machine wash cold." },
            { q: "Do you offer gift wrapping?", a: "Yes, select it at checkout for a small fee." },
            { q: "Where are your products made?", a: "Ethically manufactured in Portugal and Japan." },
            { q: "How can I contact support?", a: "Email us at support@lumiere.store." },
        ]
    },
    products: [
        {
            id: "prod_01",
            handle: "merino-wool-coat",
            title: "The Merino Wool Coat",
            subtitle: "Winter Essential",
            price: 295,
            compareAtPrice: 450,
            badges: ["Best Seller", "New"],
            tags: ["coat", "wool", "winter"],
            images: ["/placeholders/coat-1.jpg", "/placeholders/coat-2.jpg"],
            options: [
                { name: "Size", values: ["XS", "S", "M", "L", "XL"] },
                { name: "Color", values: ["Camel", "Charcoal", "Black"] }
            ],
            variants: [], // Will generate mock variants in helper
            description: "A timeless coat crafted from 100% Merino wool. Features a relaxed fit, notched lapels, and deep pockets.",
            features: ["100% Merino Wool", "Fully Lined", "Internal Pocket", "Dry Clean Only"],
            materials: "Shell: 100% Wool. Lining: 100% Viscose.",
            care: "Dry clean only. Do not wash. Do not bleach.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Apparel"
        },
        {
            id: "prod_02",
            handle: "oxford-shirt",
            title: "Classic Oxford Shirt",
            subtitle: "Everyday Staple",
            price: 85,
            badges: ["Essential"],
            tags: ["shirt", "cotton"],
            images: ["/placeholders/shirt-1.jpg"],
            options: [
                { name: "Size", values: ["S", "M", "L", "XL"] },
                { name: "Color", values: ["White", "Blue"] }
            ],
            variants: [],
            description: "Crisp, breathable, and built to last. Our Oxford shirt is the foundation of any wardrobe.",
            features: ["Organic Cotton", "Mother of Pearl Buttons", "Tailored Fit"],
            materials: "100% Organic Cotton",
            care: "Machine wash cold. Tumble dry low.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Apparel"
        },
        {
            id: "prod_03",
            handle: "selvedge-denim",
            title: "Japanese Selvedge Denim",
            subtitle: "Raw & Rigid",
            price: 180,
            compareAtPrice: 220,
            badges: ["Limited"],
            tags: ["pants", "denim"],
            images: ["/placeholders/denim-1.jpg"],
            options: [
                { name: "Waist", values: ["28", "30", "32", "34", "36"] },
                { name: "Length", values: ["30", "32", "34"] }
            ],
            variants: [],
            description: "14oz raw selvedge denim from Okayama, Japan. Will fade beautifully with wear.",
            features: ["14oz Raw Denim", "Button Fly", "Chain Stitched Hem"],
            materials: "100% Cotton",
            care: "Wash infrequently. Cold soak only.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Apparel"
        },
        {
            id: "prod_04",
            handle: "leather-tote",
            title: "Everyday Leather Tote",
            subtitle: "Full Grain Leather",
            price: 245,
            badges: [],
            tags: ["bag", "accessory"],
            images: ["/placeholders/tote-1.jpg"],
            options: [
                { name: "Color", values: ["Black", "Tan", "Olive"] }
            ],
            variants: [],
            description: "Vegetable tanned leather that develops a unique patina over time. Fits a 15-inch laptop.",
            features: ["Full Grain Leather", "Solid Brass Hardware", "Internal Zip Pocket"],
            materials: "100% Leather",
            care: "Condition with leather balm every 6 months.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Accessories"
        },
        {
            id: "prod_05",
            handle: "cashmere-sweater",
            title: "The Cashmere Crew",
            subtitle: "Softest Touch",
            price: 150,
            badges: ["Winter"],
            tags: ["knitwear", "cashmere"],
            images: ["/placeholders/sweater-1.jpg"],
            options: [
                { name: "Size", values: ["XS", "S", "M", "L", "XL"] },
                { name: "Color", values: ["Grey", "Navy", "Oatmeal"] }
            ],
            variants: [],
            description: "Grade-A Mongolian cashmere. Lightweight yet incredibly warm.",
            features: ["100% Cashmere", "Ribbed Cuffs", "Regular Fit"],
            materials: "100% Cashmere",
            care: "Hand wash cold. Lay flat to dry.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Apparel"
        },
        {
            id: "prod_06",
            handle: "chino-pant",
            title: "Modern Chino",
            subtitle: "Work to Weekend",
            price: 95,
            badges: [],
            tags: ["pants", "chino"],
            images: ["/placeholders/chino-1.jpg"],
            options: [
                { name: "Waist", values: ["30", "32", "34", "36"] },
                { name: "Color", values: ["Khaki", "Navy", "Olive"] }
            ],
            variants: [],
            description: "Stretch cotton twill for ultimate comfort and durability.",
            features: ["Stretch Cotton", "Slim Straight Fit", "Garment Dyed"],
            materials: "98% Cotton, 2% Elastane",
            care: "Machine wash warm.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Apparel"
        },
        {
            id: "prod_07",
            handle: "leather-sneaker",
            title: "Low Top Sneaker",
            subtitle: "Handmade in Italy",
            price: 215,
            badges: ["Premium"],
            tags: ["shoes", "footwear"],
            images: ["/placeholders/sneaker-1.jpg"],
            options: [
                { name: "Size", values: ["40", "41", "42", "43", "44", "45"] }
            ],
            variants: [],
            description: "Minimalist sneakers made from Italian nappa leather. Margom rubber sole.",
            features: ["Italian Leather", "Margom Sole", "Leather Lined"],
            materials: "Leather Upper, Rubber Sole",
            care: "Wipe clean with damp cloth.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Footwear"
        },
        {
            id: "prod_08",
            handle: "silk-scarf",
            title: "Printed Silk Scarf",
            subtitle: "Artisan Made",
            price: 65,
            badges: [],
            tags: ["accessory", "silk"],
            images: ["/placeholders/scarf-1.jpg"],
            options: [
                { name: "Pattern", values: ["Geometric", "Floral"] }
            ],
            variants: [],
            description: "Hand-rolled edges and vibrant prints. The perfect finishing touch.",
            features: ["100% Silk", "Hand Rolled", "Made in France"],
            materials: "100% Silk",
            care: "Dry clean only.",
            shippingCopy: "Ships within 24 hours.",
            returnsCopy: "Free returns within 30 days.",
            analyticsCategory: "Accessories"
        }
    ],
    crossSellMap: {
        "merino-wool-coat": ["cashmere-sweater", "oxford-shirt", "chino-pant"],
        "oxford-shirt": ["chino-pant", "merino-wool-coat"],
        "selvedge-denim": ["leather-sneaker", "oxford-shirt"],
    } as Record<string, string[]>,
    integrations: {
        shopify: { mode: "mock", notes: "Headless-ready plan in docs" },
    }
};

// Helper to generate variants if empty
siteConfig.products.forEach(p => {
    if (p.variants.length === 0 && p.options.length > 0) {
        // Simple generation for 1-2 options for demo data
        const opt1 = p.options[0];
        const opt2 = p.options[1];

        if (opt2) {
            opt1.values.forEach(v1 => {
                opt2.values.forEach(v2 => {
                    p.variants.push({
                        id: `var_${p.id}_${v1}_${v2}`.toLowerCase().replace(/\s+/g, '-'),
                        title: `${v1} / ${v2}`,
                        available: true,
                        price: p.price
                    });
                });
            });
        } else {
            opt1.values.forEach(v1 => {
                p.variants.push({
                    id: `var_${p.id}_${v1}`.toLowerCase().replace(/\s+/g, '-'),
                    title: v1,
                    available: true,
                    price: p.price
                });
            });
        }
    }
});
