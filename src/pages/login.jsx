import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../service/mutation/useLogin";
import * as z from "zod";
import { saveState } from "../config/storage";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(3, "Please enter a valid email address"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters long")
    .max(20, "Password cannot exceed 20 characters"),
});

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });
  const { mutate } = useLogin();
  const navigate = useNavigate();
  
  const submit = (data) => {
    console.log(data);

    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h1>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <input
              placeholder="Email"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              placeholder="Password"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}
          </div>
          <button className="w-full py-3 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-700 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
