import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  Sparkles,
  ShoppingBag,
  Star,
} from "lucide-react";

import { useAllProducts } from "../../../shop/hooks/useShopHook";
import ProductCard from "../../../shop/ui/component/ProductCard";

const HomePage = () => {
  const {
    data,
    isLoading,
    isError,
  } = useAllProducts();

  
  const products = data?.products ?? [];

  // First 8 products for homepage
  const featuredProducts = products.slice(0, 8);

  // Unique categories
  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description:
        "Your personal information and orders are protected with secure checkout.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description:
        "Get your favorite products delivered quickly and safely.",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "Shop confidently with a simple and hassle-free return experience.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description:
        "Our support team is here whenever you need help with your order.",
    },
  ];

  // Loading
  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />

          <p className="mt-4 text-sm text-gray-500">
            Loading products...
          </p>
        </div>
      </div>
    );
  }

  // Error
  if (isError) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4">
        <div className="rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Something went wrong
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            We couldn't load the products right now.
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-600">
                <Sparkles size={15} />
                Discover something you'll love
              </div>

              {/* Heading */}
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Everything you need,
                <span className="block bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  all in one place.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
                Discover quality products, great prices and a
                simple shopping experience designed around you.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/main/shop"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700 hover:shadow-xl active:scale-[0.98]"
                >
                  Shop Now
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/main/about"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Learn More
                </Link>

              </div>

              {/* Trust points */}
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-xs text-gray-500">

                <div className="flex items-center gap-2">
                  <ShieldCheck
                    size={16}
                    className="text-indigo-600"
                  />
                  Secure checkout
                </div>

                <div className="flex items-center gap-2">
                  <Truck
                    size={16}
                    className="text-indigo-600"
                  />
                  Fast delivery
                </div>

                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  Quality products
                </div>

              </div>

            </div>

            {/* RIGHT HERO CARD */}
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">

              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 to-violet-600 p-1 shadow-2xl shadow-indigo-200">

                <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1.8rem] bg-white">

                  {/* Decorations */}
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-indigo-50" />

                  <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-50" />

                  {/* Icon */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-xl shadow-indigo-200">
                    <ShoppingBag
                      size={44}
                      className="text-white"
                    />
                  </div>

                  <h2 className="relative mt-6 text-xl font-bold text-gray-900 sm:text-2xl">
                    Your shopping destination
                  </h2>

                  <p className="relative mt-2 max-w-xs px-4 text-center text-sm leading-6 text-gray-500">
                    Quality products, simple shopping and
                    reliable service.
                  </p>

                  {/* Product count */}
                  <div className="relative mt-6 rounded-xl bg-gray-50 px-5 py-3 text-center">
                    <p className="text-xl font-bold text-gray-900">
                      {data?.total ?? products.length}+
                    </p>

                    <p className="text-xs text-gray-500">
                      Products available
                    </p>
                  </div>

                </div>

              </div>

              {/* Floating trust card */}
              <div className="absolute -bottom-5 -left-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl sm:-left-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
                    <ShieldCheck
                      size={20}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Trusted Store
                    </p>

                    <p className="mt-0.5 text-[10px] text-gray-500">
                      Shop with confidence
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Explore
              </span>

              <h2 className="mt-1.5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Shop by category
              </h2>

              <p className="mt-1.5 text-sm text-gray-500">
                Find products you'll love.
              </p>
            </div>

            <Link
              to="/shop"
              className="hidden items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 sm:flex"
            >
              View all
              <ArrowRight size={15} />
            </Link>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

            {categories.map((category) => (
              <Link
                key={category}
                to={`/main/shop?category=${category}`}
                className="group rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 transition group-hover:bg-indigo-100">
                  <ShoppingBag
                    size={18}
                    className="text-indigo-600"
                  />
                </div>

                <h3 className="mt-3 truncate text-sm font-semibold capitalize text-gray-800">
                  {category}
                </h3>

                <p className="mt-1 text-[10px] text-gray-400">
                  Explore collection
                </p>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURED PRODUCTS
      ====================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
                Featured
              </span>

              <h2 className="mt-1.5 text-2xl font-bold text-gray-900 sm:text-3xl">
                Popular products
              </h2>

              <p className="mt-1.5 text-sm text-gray-500">
                Some of our most popular products.
              </p>
            </div>

            <Link
              to="/main/shop"
              className="hidden items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700 sm:flex"
            >
              View all products
              <ArrowRight size={15} />
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(product) => {
                  console.log("Added to cart:", product);
                }}
              />
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-gray-50 py-16">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto mb-10 max-w-2xl text-center">

            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
              Why choose us
            </span>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Shopping you can trust
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Everything we do is designed to make your
              shopping experience simple and reliable.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
                    <Icon
                      size={19}
                      className="text-indigo-600"
                    />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-gray-50 px-5 pb-16 sm:px-6 lg:px-8">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-12 text-center text-white sm:px-12">

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
              Ready to start shopping?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-indigo-100">
              Explore our collection and find products that
              fit your needs.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-600 shadow-lg transition hover:bg-gray-100 active:scale-[0.98]"
            >
              Explore Shop
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default HomePage;