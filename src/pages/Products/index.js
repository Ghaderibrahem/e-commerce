import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../rtk/products/thunks";
import CardComponent from "../../components/card";
import "./index.css";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products, "productsproducts");
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const searchParams = new URLSearchParams(
    new URL(window?.location?.href).search
  );
  const navigate = useNavigate();

  const ProductsSection = useMemo(() => {
    return Array.isArray(products) && products.length ? (
      products.map((item, index) => (
        <div key={index} className="col-12 col-md-6 padding-right">
          <CardComponent item={item} />
        </div>
      ))
    ) : (
      <></>
    );
  }, [products]);

  useEffect(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    if (!Object.keys(params)?.length) {
      navigate({
        pathname: "/products",
        search: "?sort=asc&page=1&limit=10",
      });
    }
  }, []);
  return (
    <div className="products-root">
      <SearchBar />
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <h1 className="primar-text-color font-bold">Product Search</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <select
            aria-label="Default select example"
            className="sort-filter ronded"
          >
            <option>Sort By Price: Low to High</option>
            <option value="1">Low</option>
            <option value="2">High</option>
          </select>
        </div>
      </div>
      <div className="row mt-3 products-section">{ProductsSection}</div>
    </div>
  );
}

export default Products;
