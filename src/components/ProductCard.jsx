export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition hover:border-primary">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Product title */}
      <h2 className="text-sm font-semibold truncate text-primary">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-secondary font-medium mt-1">${product.price}</p>

      {/* Category */}
      <p className="text-accent text-xs mt-1 capitalize">{product.category}</p>

      {/* Rating */}
      <p className="text-yellow-500 font-semibold mt-1">
        ⭐ {product.rating?.rate} ({product.rating?.count})
      </p>
    </div>
  );
}
