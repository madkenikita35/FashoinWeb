import React from "react";
import api from "../Api/axios";

const DeleteProduct = ({ productId, onDeleteSuccess }) => {
  const handleDeleteProduct = async () => {
    if (!window.confirm("Delete this fashion item from inventory?")) return;

    try {
      // Ensure your backend route is router.delete("/products/:id")
      await api.delete(`/products/${productId}`);

      if (onDeleteSuccess) {
        onDeleteSuccess(productId);
      }
      alert("Removed successfully!");
    } catch (error) {
      alert("Error deleting product");
      console.error("Delete error:", error.response?.data || error.message);
    }
  };

  return (
    <button
      onClick={handleDeleteProduct}
      style={{
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "4px",
        cursor: "pointer",
        marginTop: "10px",
      }}
    >
      Delete Item
    </button>
  );
};

export default DeleteProduct;
