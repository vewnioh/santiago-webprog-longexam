import { useMemo, useState } from 'react';
import Button from '../../components/Button.jsx';
import ProductList from '../../components/ProductList.jsx';
import products from '../../assets/product-content.js';

const ProductListPage = () => {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(products.map((p) => p.category)));
    return ['All', ...unique];
  }, []);

  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <div className="flex w-full flex-col gap-8">
      {/* Header */}
      <section className="px-4 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
            The Official Catalog
          </p>
          <h1 className="font-display text-5xl leading-none tracking-wide text-white sm:text-6xl">
            Shop <span className="text-amber-400">Campus Essentials</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/75 sm:text-base">
            Practical, officially-licensed items for class, study, commute, and weekend campus life.
            Every product ships from the NU campus store and supports Bulldog athletics programs.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button to="/" variant="ghost">
              Back Home
            </Button>
            <Button to="/about" variant="primary">
              About the Store
            </Button>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400">
                Featured Products
              </p>
              <h2 className="mt-1 font-display text-3xl tracking-wide text-white">
                {active === 'All' ? 'Every Bulldog essential' : active}
              </h2>
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-100/60">
              Showing {filtered.length} of {products.length}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter by category"
            className="mb-8 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={[
                    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors',
                    isActive
                      ? 'bg-amber-400 text-blue-950'
                      : 'border border-white/15 bg-white/5 text-blue-100/80 hover:border-white/40 hover:text-white',
                  ].join(' ')}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <ProductList products={filtered} />
        </div>
      </section>
    </div>
  );
};

export default ProductListPage;
