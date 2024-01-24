import React, { useState } from "react";
import "./index.css";
function SearchBar({ items = [], handleChange, value }) {
  const [category, setCategory] = useState(value);
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
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option>All</option>

            {Array.isArray(items) && items.length ? (
              items.map((item, index) => (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              ))
            ) : (
              <option value={null}>No items</option>
            )}
          </select>
        </div>
        <div className="d-flex justify-content-end col-12 col-md-3">
          <button
            className="rounded submit-btn"
            size="lg"
            type="submit"
            onClick={() => handleChange(category)}
          >
            Search Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
