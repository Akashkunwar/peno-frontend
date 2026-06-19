"use client";
import { useState, useMemo } from "react";
import { products } from "@/data";
import { ProductCard } from "@/components/sections/shop/product-card";
import { SlidersHorizontal, X, Search } from "lucide-react";

const cats = [...new Set(products.map(p => p.category))];
const cols = [...new Set(products.map(p => p.collection))];
const sorts = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
  { label: "Best Rated", value: "rating" },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");
  const [col, setCol] = useState("");
  const [sort, setSort] = useState("featured");
  const [pr, setPr] = useState<[number, number]>([0, 15000]);
  const [showF, setShowF] = useState(false);

  const filtered = useMemo(() => {
    let r = [...products];
    if (search) {
      const q = search.toLowerCase();
      r = r.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }
    if (cat) r = r.filter(p => p.category === cat);
    if (col) r = r.filter(p => p.collection === col);
    r = r.filter(p => p.price >= pr[0] && p.price <= pr[1]);
    if (sort === "price-asc") r.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") r.sort((a, b) => b.price - a.price);
    else if (sort === "newest") r.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    else if (sort === "rating") r.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    else r.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
    return r;
  }, [search, cat, col, sort, pr]);

  const clr = () => { setSearch(""); setCat(""); setCol(""); setPr([0, 15000]); setSort("featured"); };
  const af = [search, cat, col].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-cream">
      <div className="pt-36 pb-12 md:pb-16">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-accent/60" />
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-ink-muted">Our Shop</p>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] tracking-[-0.01em]">All Products</h1>
          <p className="text-ink-muted mt-4 max-w-lg">Thoughtfully curated gifts for every occasion.</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pb-24">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <div className="flex-1 min-w-[200px] max-w-md relative">
            <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-cream-dark border border-ink/10 text-ink text-sm pl-11 pr-4 py-3 rounded-sm outline-none focus:border-ink/30 transition-colors placeholder:text-ink-muted/50"
            />
          </div>
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="bg-cream-dark border border-ink/10 text-ink text-sm px-4 py-3 rounded-sm outline-none focus:border-ink/30 cursor-pointer appearance-none pr-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235C5C5C' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {sorts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
          <button
            onClick={() => setShowF(!showF)}
            className="flex items-center gap-2 bg-cream-dark border border-ink/10 text-ink text-sm px-4 py-3 rounded-sm hover:border-ink/30 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />Filters
            {af > 0 && <span className="bg-velvet text-cream text-[10px] w-5 h-5 rounded-full flex items-center justify-center">{af}</span>}
          </button>
        </div>

        {showF && (
          <div className="bg-cream-dark border border-ink/5 rounded-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-serif text-lg">Refine</h3>
              <button onClick={clr} className="text-xs text-ink-muted hover:text-ink transition-colors flex items-center gap-1">
                <X className="w-3 h-3" />Clear all
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCat("")} className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${!cat ? "bg-velvet text-cream" : "bg-cream text-ink-muted hover:bg-cream-dark"}`}>All</button>
                  {cats.map(c => (
                    <button key={c} onClick={() => setCat(c === cat ? "" : c)} className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${c === cat ? "bg-velvet text-cream" : "bg-cream text-ink-muted hover:bg-cream-dark"}`}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3 block">Collection</label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setCol("")} className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${!col ? "bg-velvet text-cream" : "bg-cream text-ink-muted hover:bg-cream-dark"}`}>All</button>
                  {cols.map(c => (
                    <button key={c} onClick={() => setCol(c === col ? "" : c)} className={`text-xs px-3 py-1.5 rounded-sm transition-colors ${c === col ? "bg-velvet text-cream" : "bg-cream text-ink-muted hover:bg-cream-dark"}`}>{c}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mb-3 block">Price Range</label>
                <input type="range" min={0} max={15000} step={500} value={pr[1]} onChange={e => setPr([0, Number(e.target.value)])} className="w-full accent-velvet" />
                <p className="text-xs text-ink-muted mt-1">Up to ₹{pr[1].toLocaleString("en-IN")}</p>
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-ink-muted mb-8">{filtered.length} {filtered.length === 1 ? "product" : "products"}</p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-ink-muted text-lg font-serif">No products found.</p>
            <button onClick={clr} className="mt-4 text-sm text-accent hover:text-accent-dark transition-colors underline underline-offset-4">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  );
}
