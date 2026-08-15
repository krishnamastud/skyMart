import React from "react";
import { useAuthHook } from "../../hooks/authHook";

const RegisterPage = () => {
  
    const { register, handleSubmit, errors, handleRegister, navigate } = useAuthHook();
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl min-h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden flex">

        {/* Left Side */}
        <div className="hidden md:flex md:w-1/2 bg-gray-900 text-white p-12 flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white text-gray-900 flex items-center justify-center font-bold text-xl">
              L
            </div>

            <h1 className="text-2xl font-bold">
              LogoName
            </h1>
          </div>

          <h2 className="text-4xl font-bold leading-tight mb-5">
            Start your journey
            <br />
            with us.
          </h2>

          <p className="text-gray-400 text-lg leading-7 max-w-md">
            Create your account and get access to all the features of
            our web application. It's quick, simple and easy to get started.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">

          <div className="mb-7">
            <h2 className="text-3xl font-bold text-gray-900">
              Create an account
            </h2>

            <p className="text-gray-500 mt-2">
              Register to get started with our application
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-4"
          >

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                {...register("username", {
                  required: "Username is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />

              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Register
            </button>

          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              type="button"
              className="font-semibold text-gray-900 hover:underline"
            >
              Login
            </button>
          </p>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;