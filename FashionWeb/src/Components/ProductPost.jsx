import React, { useState } from "react";
import api from "../Api/axios";
import { useNavigate } from "react-router-dom";

const ProductPost = () => {
  const [newProduct, setNewProduct] = useState({
    PrName: "",
    PrPrice: "",
    prImg: "",
  });
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await api.post("/products", newProduct);
      alert("Added to inventory!");
      navigate("/products"); // Redirect to the store view after adding
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin: Add New Clothing</h2>
      <form onSubmit={handleAddProduct}>
        <input
          placeholder="Name"
          value={newProduct.PrName}
          onChange={(e) =>
            setNewProduct({ ...newProduct, PrName: e.target.value })
          }
        />
        <br />
        <input
          placeholder="Price"
          type="number"
          value={newProduct.PrPrice}
          onChange={(e) =>
            setNewProduct({ ...newProduct, PrPrice: e.target.value })
          }
        />
        <br />
        <input
          placeholder="Image URL"
          value={newProduct.prImg}
          onChange={(e) =>
            setNewProduct({ ...newProduct, prImg: e.target.value })
          }
        />
        <br />
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default ProductPost;
