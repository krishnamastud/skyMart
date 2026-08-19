import React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useProductCategories } from "../../hooks/useShopHook";

const ProductSearch = ({
  search,
  setSearch,
  productCategory,
  setProductCategory,
}) => {
  const { data: categories } = useProductCategories();

  const allCategories = [
    "all",
    ...(categories || []),
  ];

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

      <div className="flex flex-col gap-4 md:flex-row md:items-center">

        {/* Search */}
        <div className="relative flex-1">

          <Search
            size={19}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-10 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
          />

          {/* Clear Search */}
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 transition hover:bg-gray-200 hover:text-gray-700"
            >
              <X size={16} />
            </button>
          )}

        </div>

        {/* Category */}
        <div className="relative md:w-56">

          <SlidersHorizontal
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            value={productCategory ?? "all"}
            onChange={(e) =>
              setProductCategory(
                e.target.value === "all"
                  ? null
                  : e.target.value
              )
            }
            className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm font-medium capitalize text-gray-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
          >
            {allCategories.map((item) => (
              <option key={item} value={item}>
                {item === "all"
                  ? "All Categories"
                  : item}
              </option>
            ))}
          </select>

        </div>

      </div>

      {/* Bottom Info */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">

        <p className="text-xs text-gray-500">
          Browse products by name or category
        </p>

        {(search || productCategory) && (
          <p className="text-xs font-medium text-indigo-600">
            Filters applied
          </p>
        )}

      </div>

    </div>
  );
};

export default ProductSearch;