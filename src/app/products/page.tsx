import { siteConfig } from '@/config/siteConfig';
import { ProductCard } from '@/components/product/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Shop All | ${siteConfig.brand.name}`,
};

export default function ProductsPage() {
    return (
        <div className="section">
            <div className="container">
                <div className="mb-8 p-4 border-b border-gray-200">
                    <h1 className="text-3xl font-bold mb-2">All Products</h1>
                    <p className="text-muted">Explore our latest collection.</p>
                </div>

                {/* Mock Toolbar */}
                <div className="flex justify-between mb-8 text-sm">
                    <div className="flex gap-4">
                        <span className="font-bold">Filter:</span>
                        <span className="cursor-pointer hover:text-black text-muted">All</span>
                        <span className="cursor-pointer hover:text-black text-muted">Apparel</span>
                        <span className="cursor-pointer hover:text-black text-muted">Accessories</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="font-bold">Sort:</span>
                        <span className="cursor-pointer">Featured</span>
                    </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {siteConfig.products.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}
