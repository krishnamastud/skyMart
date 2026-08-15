import React, { useEffect, useState } from "react";
import { useAllProducts, useProductsByCategory,  } from "../../hooks/useShopHook";
import ProductCard from "../component/ProductCard";
import ProductSearch from "../component/ProductSearch";

const ShopPage = () => {
    const [productCategory, setProductCategory] = useState(null);
    const [debugSearch, setDebugSearch] = useState("");
    const [search, setSearch] = useState("");

    // Debounce search input to avoid excessive API calls
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setDebugSearch(search);
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [search]);

  let { data, isLoading, isError } = useAllProducts(debugSearch);
  let { data: productsCategoryData } = useProductsByCategory(productCategory);

  console.log(productsCategoryData);


  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <ProductSearch  setProductCategory={setProductCategory} search={search} setSearch={setSearch} />
      </div>
      <div className="p-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
        productsCategoryData?.products.length > 0 ? productsCategoryData?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) => console.log(product)

            }
          />
        )) : data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(product) => console.log(product)

            }
          />
        ))
        }
      </div>
    </div>
  );
};

export default ShopPage;
