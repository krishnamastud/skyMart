import React from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
} from "lucide-react";

import CartCard from "../component/CartCard";
import { useCart } from "../../../../context/CartContext";

const CartPage = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  // Total quantity
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Shipping
  const shipping =
    subtotal >= 50 || subtotal === 0
      ? 0
      : 5;

  // Total
  const total = subtotal + shipping;

  // ================= EMPTY CART =================

  if (cartItems.length === 0) {
    return (
      <main className="min-h-[calc(100vh-72px)] bg-gray-50">

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-5 py-12">

          <div className="w-full max-w-md text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-50">
              <ShoppingBag
                size={38}
                className="text-indigo-600"
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Looks like you haven't added anything to
              your cart yet. Explore our products and find
              something you'll love.
            </p>

            <Link
              to="/main/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700"
            >
              Start Shopping
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </main>
    );
  }

  // ================= CART =================

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <section className="border-b border-gray-200 bg-white">

        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

          <Link
            to="/main/shop"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-500 transition hover:text-indigo-600"
          >
            <ArrowLeft size={15} />
            Continue Shopping
          </Link>

          <div className="mt-5">

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Your Cart
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {totalItems}{" "}
              {totalItems === 1
                ? "item"
                : "items"}{" "}
              in your cart
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* CART ITEMS */}

          <div className="space-y-3">

            {cartItems.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            ))}

          </div>

          {/* SUMMARY */}

          <div>

            <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

              <h2 className="text-lg font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-gray-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-gray-500">
                    Shipping
                  </span>

                  {shipping === 0 ? (
                    <span className="font-medium text-green-600">
                      Free
                    </span>
                  ) : (
                    <span className="font-medium text-gray-900">
                      ${shipping.toFixed(2)}
                    </span>
                  )}

                </div>

                <div className="border-t border-gray-100 pt-4">

                  <div className="flex items-center justify-between">

                    <span className="font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-xl font-bold text-gray-900">
                      ${total.toFixed(2)}
                    </span>

                  </div>

                </div>

              </div>

              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-100 transition hover:from-indigo-700 hover:to-violet-700"
              >
                Proceed to Checkout
                <ArrowRight size={17} />
              </button>

              <div className="mt-5 space-y-3 border-t border-gray-100 pt-5">

                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={17}
                    className="text-indigo-600"
                  />

                  <span className="text-xs text-gray-500">
                    Secure checkout
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Truck
                    size={17}
                    className="text-indigo-600"
                  />

                  <span className="text-xs text-gray-500">
                    Fast & reliable delivery
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default CartPage;