import React from "react";

export const ProductCard = ({ id, name, img, price, categoryId, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={img} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">{name}</h2>
        <strong className="text-xl text-gray-700">${price}</strong>
      </div>
      <div className="flex justify-around p-4 bg-gray-100">
        <button
          onClick={() => onDelete(id)}
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
