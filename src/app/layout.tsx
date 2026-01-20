import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cartStore";
import Analytics from "@/components/Analytics";
import { siteConfig } from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"], variable: '--font-primary' });

// Ensure a valid URL for metadataBase, fallback to localhost in dev if needed, 
// but for production it should ideally be the real domain.
const dbUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? process.env.NEXT_PUBLIC_SITE_URL
    : `https://${siteConfig.brand.domain}`;

export const metadata: Metadata = {
    metadataBase: new URL(dbUrl.startsWith('http') ? dbUrl : `https://${dbUrl}`),
    title: siteConfig.brand.name,
    description: siteConfig.landing.hero.subheadline,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        siteName: siteConfig.brand.name,
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: siteConfig.brand.name,
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.brand.name,
        description: siteConfig.landing.hero.subheadline,
        images: ["/og.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <CartProvider>
                    <Analytics />
                    <Header />
                    <main style={{ minHeight: 'calc(100vh - var(--header-height))' }}>
                        {children}
                    </main>
                    <Footer />
                </CartProvider>
            </body>
        </html>
    );
}
