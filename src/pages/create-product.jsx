import React from "react";
import { ProductForm } from "../components/product-form";
import { userCategoryList } from "../service/query/userCategoryList";
import { useCreateProduct } from "../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const { data, isLoading } = userCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (formData) => {
    mutate(formData, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Create Product</h1>
        {!isLoading ? (
          <ProductForm categeoryData={data} submit={submit} />
        ) : (
          <div className="flex justify-center items-center h-48">
            <div className="w-12 h-12 border-4 border-t-4 border-blue-500 border-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};
