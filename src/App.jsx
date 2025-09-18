import { useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import NavBar from "./components/NavBar.jsx";

export default function App() {

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full">
      <NavBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <LandingPage />
      <ProductsPage searchQuery={searchQuery} />
    </div>
  );
}