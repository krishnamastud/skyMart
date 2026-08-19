import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="h-44 overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
        />
      </div>

      {/* Category */}
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-indigo-600">
        {product.category}
      </p>

      {/* Title */}
      <h3 className="mt-1 truncate text-sm font-semibold text-gray-900">
        {product.title}
      </h3>

      {/* Brand */}
      <p className="mt-1 text-xs text-gray-500">
        {product.brand}
      </p>

      {/* Price */}
      <div className="mt-3 flex items-center justify-between">
        <p className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>

        <span className="text-xs text-gray-500">
          {product.stock} left
        </span>
      </div>

      {/* Add to cart */}
      <button
        type="button"
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:from-indigo-700 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ShoppingCart size={17} />

        {product.stock === 0
          ? "Out of Stock"
          : "Add to Cart"}
      </button>

    </div>
  );
};

export default ProductCard;