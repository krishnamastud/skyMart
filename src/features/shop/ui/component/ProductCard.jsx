import React, { useState } from "react";
import {
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  Minus,
  Plus,
} from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    shippingInformation,
    warrantyInformation,
    thumbnail,
    brand,
  } = product;

  const discountedPrice =
    price - (price * discountPercentage) / 100;

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      quantity,
      discountedPrice,
    });
  };

  return (
    <div className="group w-full max-w-xs overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative h-48 bg-gray-50 p-4 flex items-center justify-center">

        {discountPercentage > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-semibold text-white">
            {discountPercentage.toFixed(0)}% OFF
          </span>
        )}

        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-medium ${
            availabilityStatus === "In Stock"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {availabilityStatus}
        </span>

        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category + Brand */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-600">
            {category}
          </span>

          {brand && (
            <span className="truncate text-[10px] text-gray-400">
              {brand}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="mt-1.5 line-clamp-1 text-base font-semibold text-gray-900">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-gray-500">
          {description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center justify-between">

          <div className="flex items-center gap-1 rounded-md bg-gray-50 px-2 py-1">
            <Star
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="text-xs font-medium">
              {rating}
            </span>
          </div>

          <span className="text-[10px] text-gray-400">
            {stock} available
          </span>

        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">

          <span className="text-xl font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-xs text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>

        </div>

        {/* Product Info */}
        <div className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">

          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <Truck
              size={13}
              className="shrink-0 text-indigo-600"
            />

            <span className="truncate">
              {shippingInformation}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <ShieldCheck
              size={13}
              className="shrink-0 text-indigo-600"
            />

            <span className="truncate">
              {warrantyInformation}
            </span>
          </div>

        </div>

        {/* Cart */}
        <div className="mt-3 flex gap-2">

          {/* Quantity */}
          <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50">

            <button
              type="button"
              onClick={handleDecrement}
              disabled={quantity === 1}
              className="flex h-9 w-8 items-center justify-center text-gray-600 hover:text-indigo-600 disabled:opacity-40"
            >
              <Minus size={14} />
            </button>

            <span className="w-6 text-center text-xs font-semibold">
              {quantity}
            </span>

            <button
              type="button"
              onClick={handleIncrement}
              disabled={quantity >= stock}
              className="flex h-9 w-8 items-center justify-center text-gray-600 hover:text-indigo-600 disabled:opacity-40"
            >
              <Plus size={14} />
            </button>

          </div>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:from-indigo-700 hover:to-violet-700 active:scale-[0.98]"
          >
            <ShoppingCart size={15} />
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;