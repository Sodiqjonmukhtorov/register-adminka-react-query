import React from "react";
import { useForm } from "react-hook-form";

export const ProductForm = ({ submit, categeoryData }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Product</h2>
      
      <div className="mb-4">
        <label htmlFor="categoryId" className="block text-sm font-medium text-gray-700 mb-2">
          Category
        </label>
        <select
          id="categoryId"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          {...register("categoryId")}
        >
          {categeoryData.map((item) => (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Product Name
        </label>
        <input
          id="name"
          placeholder="Enter product name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="text"
          {...register("name")}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
          Price
        </label>
        <input
          id="price"
          placeholder="Enter price"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="number"
          {...register("price")}
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="img" className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          id="img"
          placeholder="Enter image URL"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          type="text"
          {...register("img")}
        />
      </div>
      
      <button
        type="submit"
        className="w-full py-3 text-white bg-cyan-700 rounded-lg shadow-md hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};
