import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import { Container } from "react-bootstrap";
import { getProducts } from "../../rtk/products/thunks";
import CardComponent from "../../components/card";
import Carousel from "../../components/carousel";

import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../components/pagination";

function Cart() {
  const searchParams = new URLSearchParams(
    new URL(window?.location?.href).search
  );
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Container
      style={{
        height: "100%",
        padding: "0 50px",
      }}
    >
      <CardComponent />
      <Pagination />
    </Container>
  );
}

export default Cart;