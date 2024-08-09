import React, { useState } from "react";

export const CategoryForm = ({ onSubmit, onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleImageFetch = async () => {
    if (imageUrl) {
      try {
        const response = await fetch(imageUrl);
        if (response.ok) {
          const blob = await response.blob();
          setCategoryImage(URL.createObjectURL(blob));
        } else {
          console.error("Image URL is not valid.");
          setCategoryImage(null);
        }
      } catch (error) {
        console.error("Error fetching image:", error);
        setCategoryImage(null);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", categoryName);
    if (categoryImage) {
      formData.append("image", categoryImage);
    }
    await onSubmit(formData);
    setCategoryName("");
    setCategoryImage(null);
    setImageUrl("");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold">Create Category</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mt-2">
            Category Name:
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border p-2 mt-1 w-full"
              required
            />
          </label>
          <label className="block mt-2">
            Image URL:
            <input
              type="text"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="border p-2 mt-1 w-full"
            />
          </label>
          <button
            type="button"
            onClick={handleImageFetch}
            className="bg-green-500 text-white px-4 py-2 rounded mt-2"
          >
            Fetch Image
          </button>
          {categoryImage && (
            <div className="mt-2">
              <img src={categoryImage} alt="Category Preview" className="w-full h-auto" />
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
              Create
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
