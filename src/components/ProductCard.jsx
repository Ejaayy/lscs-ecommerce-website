export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />
      <h2 className="text-sm font-semibold truncate">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="text-xs text-gray-400">{product.category}</p>
      <p className="text-yellow-500">⭐ {product.rating?.rate}</p>
    </div>
  );
}