// Import necessary stuff
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx";
import Navbar from "../components/NavBar.jsx";

export default function ProductsPage({ searchQuery }) {  // accept searchQuery
  const [products, setProducts] = useState([]); // will hold the list of products from the API
  const [loading, setLoading] = useState(true); // tracks if data is still being fetched
  const [error, setError] = useState(null); // stores any error message if API fails

  // runs after the component is loaded
  useEffect(() => {
    setLoading(true); // reset loading when component mounts
    fetch("https://fakestoreapi.com/products") // call API
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

  // filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // if data is still loading, show loading spinner
  if (loading)
    return (
      <div className="flex justify-center items-center mt-10">
        {/* Simple spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <p className="ml-4 text-primary font-semibold">Loading products...</p>
      </div>
    );

  // if API call failed, show error message
  if (error)
    return <p className="text-center mt-10 text-red-500 font-semibold">{error}</p>;

  // if data loaded correctly
  return (
    <div id="products" className="relative bg-neutral min-h-[60vh]">
      {/* check if any products match the search */}
      {filteredProducts.length === 0 ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          {/* Centered message */}
          <p className="text-center text-gray-500 text-lg font-medium">
            No products found for "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm p-4 bg-white hover:shadow-md transition hover:border-primary"
            >
              {/* Product image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              {/* Product title */}
              <h2 className="text-sm font-semibold truncate text-primary">{product.title}</h2>
              {/* Product price */}
              <p className="text-gray-700 font-medium">${product.price}</p>
              {/* Product category */}
              <p className="text-xs text-secondary">{product.category}</p>
              {/* Product rating */}
              <p className="text-accent">⭐ {product.rating?.rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
