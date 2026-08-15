import { api } from "../../../app/config/apiInstance";

export const getAllProducts = async (search) => {


    const hasSearch = search && search.trim() !== "";
  
  // 2. Safely encode the search parameter for the URL
  const url = hasSearch 
    ? `/products/search?q=${encodeURIComponent(search.trim())}` 
    : "/products";

    try {
        let res = await api.get(url);
        return res.data;
    } catch (err) {
        console.log("error from getAllProduct api", err);
    }
}

export const getProductCategories = async () => {
    try {
        let res = await api.get("/products/category-list");
        console.log("res from getProductCategories api", res);
        return res.data;
    } catch (err) {
        console.log("error from getProductCategories api", err);
        
    }
}

export const getProductsByCategory = async (category) => {
    try {
        let res = await api.get(`/products/category/${category}`);
        return res.data;
    } catch (err) {
        console.log("error from getProductsByCategory api", err);
    }
}