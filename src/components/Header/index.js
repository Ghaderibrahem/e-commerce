import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const silkhausLogo = "./images/silkhaus-logo.png";

function Header() {
  return (
    <div className="container-fluid bg-white header-root">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
          <img src={silkhausLogo} className="ms-5" alt="silkhausLogo" />
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Link
            to={{ pathname: "products", search: "?sort=asc&page=1&limit=10" }}
            className="text-decoration-none"
          >
            Products
          </Link>
          <Link className="text-decoration-none ms-3" to={{ pathname: "cart" }}>
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
