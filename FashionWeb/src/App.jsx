import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Components/Products.jsx";
import ProductPost from "./Components/ProductPost.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "10px",
          background: "#eee",
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/products">Shop Collection</Link>
        <Link to="/add-product">Admin: Add Product</Link>
      </nav>

      <Routes>
        {/* Default to products so the page isn't empty on load */}
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<ProductPost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
