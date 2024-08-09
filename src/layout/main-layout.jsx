import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <div className="flex min-h-screen">
      <div className="h-screen bg-gradient-to-b from-blue-500 to-indigo-700 p-[20px] w-[300px] text-white">
        <div className="mb-5">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          <Link
            to={"/"}
            className="block mb-4 py-2 px-4 rounded bg-blue-600 hover:bg-blue-700 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to={"/category-list"}
            className="block mb-4 py-2 px-4 rounded bg-green-600 hover:bg-green-700 transition-all duration-300"
          >
            Category List
          </Link>
          <Link
            to={"/category-technology"}
            className="block mb-4 py-2 px-4 rounded bg-purple-600 hover:bg-purple-700 transition-all duration-300"
          >
            Technology
          </Link>
          <Link
            to={"/category-sports"}
            className="block mb-4 py-2 px-4 rounded bg-orange-600 hover:bg-orange-700 transition-all duration-300"
          >
            Sports
          </Link>
          <Link
            to={"/category-entertainment"}
            className="block mb-4 py-2 px-4 rounded bg-red-600 hover:bg-red-700 transition-all duration-300"
          >
            Entertainment
          </Link>
          <Link
            to={"/category-fashion"}
            className="block mb-4 py-2 px-4 rounded bg-pink-600 hover:bg-pink-700 transition-all duration-300"
          >
            Fashion
          </Link>
          <Link
            to={"/category-travel"}
            className="block mb-4 py-2 px-4 rounded bg-yellow-600 hover:bg-yellow-700 transition-all duration-300"
          >
            Travel
          </Link>
        </div>
      </div>
      <div className="w-full flex-grow p-7 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};
