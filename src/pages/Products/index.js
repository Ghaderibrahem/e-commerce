import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../rtk/products/thunks";
import { getCategories } from "../../rtk/categories/thunks";
import CardComponent from "../../components/card";
import { InitFilters } from "../../utils/constants";
import {
  handleAscOrder,
  handleDescOrder,
  pagination,
} from "../../utils/functions";
import Pagination from "../../components/pagination";
import "./index.css";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);
  const [queryParams, setQueryParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(3);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  const searchParams = new URLSearchParams(
    new URL(window?.location?.href).search
  );

  const ProductsSection = useMemo(() => {
    return Array.isArray(data) && data.length ? (
      data.map((item, index) => (
        <div key={index} className="col-sm-12 col-md-6">
          <CardComponent item={item} />
        </div>
      ))
    ) : (
      <></>
    );
  }, [data]);

  const handleGetQueryParams = () => {
    return {
      sort: queryParams.get("sort"),
      filter: queryParams.get("filter"),
      page: queryParams.get("page"),
      limit: queryParams.get("limit"),
    };
  };

  const handlePageChange = (e) => {
    setQueryParams({
      ...handleGetQueryParams(),
      page: +e,
    });
  };

  const handleRowsPerPage = (e) => {
    setQueryParams({
      ...handleGetQueryParams(),
      limit: +e,
      page: 1,
    });
  };

  useEffect(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    if (!Object.keys(params)?.length) {
      setQueryParams({
        sort: InitFilters.sort,
        filter: InitFilters.filter,
        page: InitFilters.page,
        limit: InitFilters.limit,
      });
    }
  }, []);

  useEffect(() => {
    if (!Array.isArray(products) || !products.length) return setData([]);
    let filteredData = [...products];
    if (queryParams.get("sort") === "asc")
      filteredData = handleAscOrder(filteredData, "price");
    if (queryParams.get("sort") === "desc")
      filteredData = handleDescOrder(filteredData, "price");
    if (queryParams.get("filter") && queryParams.get("filter") !== undefined)
      filteredData = filteredData?.filter(
        (row) => row?.category?.name === queryParams.get("filter")
      );
    let paginatedData = pagination(
      filteredData,
      +queryParams.get("limit"),
      +queryParams.get("page")
    );
    filteredData = paginatedData?.requiredArr ?? filteredData;
    setNumOfPages(paginatedData?.count ?? 3);
    setData(filteredData);
  }, [products, queryParams]);

  useLayoutEffect(() => {
    setQueryParams({
      sort: InitFilters.sort,
      filter: InitFilters.filter,
      page: InitFilters.page,
      limit: InitFilters.limit,
    });
  }, []);

  return (
    <div className="products-root">
      <SearchBar
        items={categories}
        handleChange={(value) => {
          setQueryParams({
            ...handleGetQueryParams(),
            filter:
              Array.isArray(categories) && categories.length
                ? categories?.filter((row) => row.id === +value)?.length
                  ? categories?.filter((row) => row.id === +value)[0]?.name
                  : ""
                : "",
            page: 1,
          });
        }}
        value={queryParams.get("filter")}
      />
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <h1 className="primar-text-color font-bold">Product Search</h1>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-end">
          <select
            aria-label="Default select example"
            className="sort-filter ronded"
            onChange={(e) => {
              setQueryParams({
                ...handleGetQueryParams(),
                sort: e.target.value,
                page: 1,
              });
            }}
            value={queryParams.get("sort")}
          >
            <option value="asc">Sort By Price:Low to High</option>
            <option value="desc">Sort By Price:High to Low</option>
          </select>
        </div>
      </div>
      <div className="row mt-3 products-section">{ProductsSection}</div>
      <Pagination
        page={+queryParams.get("page")}
        rowsPerPage={+queryParams.get("limit")}
        handlePageChange={handlePageChange}
        handleRowsPerPage={handleRowsPerPage}
        numOfPages={numOfPages}
      />
    </div>
  );
}

export default Products;
