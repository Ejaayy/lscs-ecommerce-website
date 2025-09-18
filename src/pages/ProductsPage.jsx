//Import necessary stuff
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Navbar from "../components/NavBar.jsx";

export default function ProductsPage() {
  const [products, setProducts] = useState([]); // will hold the list of products from the API
  const [loading, setLoading] = useState(true); // tracks if data is still being fetched
  const [error, setError] = useState(null); // stores any error message if API fails

  //runs after the component is loaded
  useEffect(() => {
    fetch("https://fakestoreapi.com/products") //call api
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  //if data loaded correctly, load this
  return (
    <div>
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 relative bg-neutral">
        {products.map((product) => (
            <div
            key={product.id}
            className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition hover:border-primary"
            >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-sm font-semibold truncate text-primary">{product.title}</h2>
            <p className="text-gray-700 font-medium">${product.price}</p>
            <p className="text-xs text-secondary">{product.category}</p>
            <p className="text-accent">⭐ {product.rating?.rate}</p>
            </div>
        ))}
        </div>
    </div>
  );
}
