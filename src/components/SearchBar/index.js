import React from "react";
import "./index.css";
function SearchBar() {
  return (
    <div className="mt-5 px-4 py-4 rounded-2 searchbar-root">
      <div>
        <p>Product Category</p>
      </div>
      <div className="row">
        <div className="col-12 col-md-9">
          <select
            aria-label="Default select example"
            className="category-filter"
          >
            <option>all</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">four</option>
            <option value="5">five</option>
            <option value="6">six</option>
          </select>
        </div>
        <div className="d-flex justify-content-end col-12 col-md-3">
          <button className="rounded submit-btn" size="lg" type="submit">
            Search Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
