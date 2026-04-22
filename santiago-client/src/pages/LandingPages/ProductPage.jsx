import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((p) => p.name === name);

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
            404 · Not Found
          </p>
          <h1 className="mt-4 font-display text-4xl tracking-wide text-white sm:text-5xl">
            Product not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-blue-100/70">
            The item you&apos;re looking for may have been renamed or taken offline. Head back to
            the catalog to keep browsing.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/products" variant="primary">
              Back to Products
            </Button>
          </div>
        </section>
      </div>
    );
  }

  const stockTone =
    product.stock === 'In stock'
      ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40'
      : product.stock === 'Low stock'
        ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
        : 'bg-blue-400/20 text-blue-200 border-blue-400/40';

  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="mx-auto w-full max-w-6xl pt-2">
        <Button to="/products" variant="ghost">
          ← Back to Products
        </Button>
      </section>

      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-12">
          {/* Image */}
          <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-blue-900/40">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                No Image
              </div>
            )}
            <span
              className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${stockTone}`}
            >
              {product.stock}
            </span>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-none tracking-wide text-white sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-4 font-display text-4xl tracking-wide text-amber-400">
              {product.price}
            </p>

            <div className="mt-6 space-y-4 border-t border-white/10 pt-6 text-sm leading-7 text-blue-100/80 sm:text-base">
              {product.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <Button variant="primary">Add to Cart</Button>
              <Button to="/products" variant="ghost">
                Keep Browsing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
