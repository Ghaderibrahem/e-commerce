import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { Container } from "react-bootstrap";
function Products() {
  const searchParams = new URLSearchParams(
    new URL(window?.location?.href).search
  );
  const navigate = useNavigate();

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
    <Container
      style={{
        height: "100%",
        padding: "0 50px",
      }}
    >
      <SearchBar />
    </Container>
  );
}

export default Products;
