import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
const silkhausLogo = "./images/silkhaus-logo.png";

function Header() {
  const location = useLocation();
  return (
    <div className="container-fluid bg-white header-root">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
          <img src={silkhausLogo} className="ms-5" alt="silkhausLogo" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 d-flex">
          <Link
            to={{ pathname: "products", search: "?sort=asc&page=1&limit=10" }}
            className={`text-decoration-none ${
              location.pathname.includes("products")
                ? "active-link"
                : "unactive-link"
            }`}
          >
            Products
          </Link>
          <Link
            to={{ pathname: "cart" }}
            className={`text-decoration-none ms-3  ${
              location.pathname.includes("cart")
                ? "active-link"
                : "unactive-link"
            }`}
          >
            Cart
          </Link>
          <div className="links-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
