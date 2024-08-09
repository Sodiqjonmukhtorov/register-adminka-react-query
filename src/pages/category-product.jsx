import React from "react";
import { useParams } from "react-router-dom";
import { useProductList } from "../service/query/useProductList";
import { ProductCard } from "../components/ProductCard"; // Import ProductCard

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  const handleEdit = (id) => {
    // Implement edit logic
    console.log("Edit product with id:", id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      // Update UI after delete if necessary
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Products</h1>
        {/* Add Create Product Button or other elements */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
