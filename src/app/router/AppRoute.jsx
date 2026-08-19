import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../../features/home/ui/pages/HomePage";
import MainProtected from "./protectedRoutes/MainProtected";
import PublicProtected from "./protectedRoutes/PublicProtected";
import ShopPage from "../../features/shop/ui/page/ShopPage";
import AboutPage from "../../shared/ui/page/AboutPage";
import CartPage from "../../features/cart/ui/page/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicProtected />,
    children: [
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/main",
    element: <MainProtected />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <HomePage />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
          {
            path: "about",
            element: <AboutPage />,
          },
          {
            path: "cart",
            element: <CartPage />,
          },
        ],
      },
    ],
  },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
