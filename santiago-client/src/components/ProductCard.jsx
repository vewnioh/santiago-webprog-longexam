import Button from './Button';

const ProductCard = ({ product, index }) => {
  return (
    <article className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:bg-white/10">
      {/* Image */}
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-blue-900/40">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-16 w-16 items-center justify-center border-2 border-white/20 bg-white/5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Item
          </div>
        )}

        {product.stock && product.stock !== 'In stock' && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.22em] text-blue-950 shadow">
            {product.stock}
          </span>
        )}
      </div>

      {/* Meta */}
      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
        {product.category} · {String(index + 1).padStart(2, '0')}
      </p>

      {/* Title & Price */}
      <h3 className="mt-2 text-lg font-bold leading-snug text-white group-hover:text-amber-300">
        {product.title}
      </h3>
      <p className="mt-1 font-display text-2xl tracking-wide text-amber-400">{product.price}</p>

      {/* Snippet */}
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-blue-100/70">
        {product.content?.[0] ?? 'No description available.'}
      </p>

      {/* Action */}
      <div className="mt-5 pt-1">
        <Button to={`/products/${product.name}`} variant="primary" className="w-full">
          View Product
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
