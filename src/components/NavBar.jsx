export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">MyShop</h1>
      <div className="space-x-4">
        <button className="text-gray-600 hover:text-blue-600">Home</button>
        <button className="text-gray-600 hover:text-blue-600">Products</button>
        <button className="text-gray-600 hover:text-blue-600">Cart</button>
      </div>
    </nav>
  );
}