import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Login Data:", data);
    alert("Login successful!");
  };

  const email = watch("email");
  const password = watch("password");

  return (
    <div
      className="flex items-center justify-center md:justify-end p-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/login-bg.png')",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center md:justify-end  md:mr-52 w-full">
        <div className="w-full sm:w-[340px]  bg-white border border-primary rounded-xl shadow-md p-4 sm:p-5 relative">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mb-6">
            <img src="/logos/logo.png" alt="Logo" className="w-36" />
          </div>

          {/* Heading */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Login</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border border-gray-300  px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-primary"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <button className="text-sm text-primary hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button className="btn-primary w-full">Login</button>

          {/* Signup Link */}
          <button className="btn-white mt-3 w-full">
            Not registered? Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
