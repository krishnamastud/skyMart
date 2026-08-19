import React from "react";
import {
  Minus,
  Plus,
  Trash2,
  Heart,
} from "lucide-react";
import { Link } from "react-router";

const CartCard = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const itemTotal = item.price * item.quantity;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-4 transition-all duration-200 hover:border-indigo-100 hover:shadow-md">
      
      <div className="flex gap-4">

        {/* ================= PRODUCT IMAGE ================= */}
        <Link
          to={`/main/product/${item.id}`}
          className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gray-50 sm:h-28 sm:w-28"
        >
          <img
            src={item.thumbnail || item.images?.[0]}
            alt={item.title}
            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ================= PRODUCT INFO ================= */}
        <div className="min-w-0 flex-1">

          {/* Top */}
          <div className="flex items-start justify-between gap-3">

            <div className="min-w-0">

              {/* Category */}
              <p className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600">
                {item.category}
              </p>

              {/* Title */}
              <Link
                to={`/main/product/${item.id}`}
                className="mt-1 block truncate text-sm font-semibold text-gray-900 transition hover:text-indigo-600 sm:text-base"
              >
                {item.title}
              </Link>

              {/* Price */}
              <p className="mt-1 text-sm font-medium text-gray-600">
                ${item.price.toFixed(2)}
              </p>

            </div>

            {/* Remove */}
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
              title="Remove"
            >
              <Trash2 size={17} />
            </button>

          </div>

          {/* Bottom */}
          <div className="mt-4 flex items-center justify-between">

            {/* Quantity */}
            <div className="flex items-center rounded-lg border border-gray-200 bg-white">

              <button
                type="button"
                onClick={() => decreaseQuantity(item.id)}
                className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-indigo-600"
              >
                <Minus size={14} />
              </button>

              <span className="flex h-8 min-w-9 items-center justify-center border-x border-gray-200 px-2 text-xs font-semibold text-gray-800">
                {item.quantity}
              </span>

              <button
                type="button"
                onClick={() => increaseQuantity(item.id)}
                className="flex h-8 w-8 items-center justify-center text-gray-500 transition hover:bg-gray-50 hover:text-indigo-600"
              >
                <Plus size={14} />
              </button>

            </div>

            {/* Item Total */}
            <div className="text-right">

              <p className="text-[10px] text-gray-400">
                Item total
              </p>

              <p className="text-sm font-bold text-gray-900">
                ${itemTotal.toFixed(2)}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CartCard;