import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ id, name, img, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await fetch(`/api/categories/${id}`, {
          method: 'DELETE',
        });
        onDelete(id); 
      } catch (error) {
        console.error("Failed to delete category:", error);
      }
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover bg-gray-200"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">{name}</h2>
      </div>
      <div className="flex justify-between p-4 bg-gray-100">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
        >
          Show Products
        </button>
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
        >
          Delete
        </button>
        <button
          onClick={() => onEdit(id)}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Edit
        </button>
      </div>
    </div>
  );
};
