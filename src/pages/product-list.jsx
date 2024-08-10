import React, { useState } from "react";
import { ProductCard } from "./ProductCard"; 

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", img: "/path/to/image.jpg", price: 100, categoryId: 1 },
    { id: 2, name: "Product 2", img: "/path/to/image.jpg", price: 200, categoryId: 2 },
  ]);

  const handleEdit = (id) => {
    console.log("Edit product with id:", id);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
