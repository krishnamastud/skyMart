import React from "react";
import { useAuthHook } from "../../hooks/authHook";

const LoginPage = () => {

  const { register, handleSubmit, errors, handleLogin, navigate } = useAuthHook();
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden flex">

        {/* Left Side */}
        <div className="hidden md:flex md:w-1/2 bg-gray-900 text-white p-12 flex-col justify-center">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white text-gray-900 flex items-center justify-center font-bold text-xl">
              L
            </div>

            <h1 className="text-2xl font-bold">
              LogoName
            </h1>
          </div>

          {/* Info */}
          <h2 className="text-4xl font-bold leading-tight mb-5">
            Manage everything
            <br />
            in one place.
          </h2>

          <p className="text-gray-400 text-lg leading-7 max-w-md">
            Welcome to our web application. Access your account, manage
            your products, track your activity and enjoy a simple and
            powerful experience.
          </p>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">

          {/* Mobile Logo */}
          <div className="flex md:hidden items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center font-bold">
              L
            </div>

            <h1 className="text-xl font-bold text-gray-900">
              LogoName
            </h1>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Welcome back
            </h2>

            <p className="text-gray-500 mt-2">
              Login to your account to continue
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="font-semibold text-gray-900 hover:underline"
            >
              Register
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;