import React from "react";
import { NavLink, useNavigate } from "react-router";
import {
  ShoppingCart,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import { toast } from "react-toastify";

const Navbar = () => {

    const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/main",
      end: true,
    },
    {
      name: "Shop",
      path: "/main/shop",
    },
    {
      name: "About",
      path: "/main/about",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-[72px] items-center justify-between">

          {/* ================= LOGO ================= */}
          <NavLink
            to="/main"
            className="group flex items-center gap-3"
          >
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-transform duration-200 group-hover:scale-105">
              L
            </div>

            {/* Brand */}
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight text-gray-900">
                LogoName
              </span>

              <span className="block text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Store
              </span>
            </div>
          </NavLink>

          {/* ================= NAVIGATION ================= */}
          <div className="hidden items-center gap-1 rounded-xl border border-gray-100 bg-gray-50/70 p-1 md:flex">

            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-500 hover:bg-white/70 hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* User */}
            <button
              type="button"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-left transition hover:bg-gray-50 sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50">
                <User
                  size={17}
                  className="text-indigo-600"
                />
              </div>

              <div className="hidden lg:block">
                <p className="max-w-[100px] truncate text-xs font-semibold text-gray-800">
                  Username
                </p>

                <p className="text-[10px] text-gray-400">
                  Account
                </p>
              </div>

              <ChevronDown
                size={14}
                className="hidden text-gray-400 lg:block"
              />
            </button>

            {/* Cart */}
            <NavLink
              to="/main/cart"
              className={({ isActive }) =>
                `relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                }`
              }
            >
              <ShoppingCart size={19} />

              {/* Cart Badge */}
              <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-1 text-[9px] font-bold text-white shadow-sm">
                2
              </span>
            </NavLink>

            {/* Divider */}
            <div className="hidden h-7 w-px bg-gray-200 sm:block" />

            {/* Logout */}
            <button
            onClick={() => {
                localStorage.removeItem("loggedInUser")
                navigate("/")
                toast.success("Logout successful")
            }}
              type="button"
              className="group flex h-10 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 text-sm font-medium text-gray-600 transition-all duration-200 hover:border-red-100 hover:bg-red-50 hover:text-red-600"
            >
              <LogOut
                size={17}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />

              <span className="hidden lg:block">
                Logout
              </span>
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;