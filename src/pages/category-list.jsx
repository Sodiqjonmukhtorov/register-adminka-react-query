import React, { useState } from "react";
import { userCategoryList } from "../service/query/userCategoryList";
import { CategoryCard } from "../components/category-card";
import { CategoryForm } from "../components/CategoryForm";

export const CategoryList = () => {
  const { data, refetch } = userCategoryList(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateCategory = async (formData) => {
    try {
      await fetch('/api/categories', {
        method: 'POST',
        body: formData,
      });
      setIsModalOpen(false);
      refetch(); 
    } catch (error) {
      console.error("Failed to create category:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        className="mb-6 p-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white font-bold rounded shadow-lg hover:opacity-90 transition-opacity duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Create Category
      </button>
      {isModalOpen && (
        <CategoryForm
          onSubmit={handleCreateCategory}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
  