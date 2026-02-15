import React, { useState, useEffect } from "react";
import api from "../Api/axios";
import DeleteProduct from "./DeleteProduct"; // IMPORTANT: Don't forget this import

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Collection</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <img
              src={p.prImg}
              alt={p.PrName}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{p.PrName}</h3>
            <p style={{ fontWeight: "bold" }}>${p.PrPrice}</p>

            {/* The Delete Component receives the ID and a refresh function */}
            <DeleteProduct
              productId={p._id}
              onDeleteSuccess={(deletedId) => {
                setProducts(products.filter((item) => item._id !== deletedId));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
