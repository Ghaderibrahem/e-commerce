import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/card/cartCard";
import { addToCart } from "../../rtk/products";
import { useNavigate } from "react-router-dom";
import { InitFilters } from "../../utils/constants";
import "./index.css";
function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addedToCart } = useSelector((state) => state.products);
  const [data, setData] = useState([]);
  const PurchasedSection = useMemo(() => {
    return Array.isArray(data) && data.length ? (
      data.map((item, index) => (
        <div key={index} className="col-12 col-md-6 p-2">
          <CartCard item={item} />
        </div>
      ))
    ) : (
      <></>
    );
  }, [data]);

  useEffect(() => {
    if (!Array.isArray(addedToCart) || !addedToCart.length) return setData([]);
    setData(addedToCart.filter((row) => row?.count));
  }, [addedToCart]);
  return (
    <div className="cart-root">
      <div className="w-100 row">{PurchasedSection}</div>
      <button
        className="btn-lg buy-btn"
        type="submit"
        onClick={() => {
          dispatch(addToCart(null));
          navigate({
            pathname: "/products",
            search: `?sort=${InitFilters.sort}&filter=${InitFilters.filter}&page=${InitFilters.page}&limit=${InitFilters.limit}`,
          });
        }}
      >
        Buy
      </button>
    </div>
  );
}

export default Cart;
