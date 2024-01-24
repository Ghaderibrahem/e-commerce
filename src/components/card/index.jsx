import Carousel from "../carousel";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../rtk/products";
import { useState } from "react";
function CardComponent({ item }) {
  const dispatch = useDispatch();
  const { addedToCart } = useSelector((state) => state.products);
  const [count, setCount] = useState(null);
  console.log(addedToCart, "addedToCart");
  const handleCheckIfAdded = (obj, type = "add") => {
    if (!obj) return 0;
    let addedSales = addedToCart?.filter((row) => row?.sale?.id === obj?.id);
    if (!addedSales.length) {
      setCount(1);
      return 1;
    }
    console.log(addedSales, "addedSales");
    setCount(
      type === "add" ? addedSales[0]?.count + 1 : addedSales[0]?.count - 1
    );
    return type === "add" ? addedSales[0]?.count + 1 : addedSales[0]?.count - 1;
  };
  const handleAddToCart = (obj) => {
    dispatch(
      addToCart({
        count: handleCheckIfAdded(obj, "add"),
        sale: obj,
      })
    );
  };
  const handleRemoveFromCart = (obj) => {
    dispatch(
      addToCart({
        count: handleCheckIfAdded(obj, "remove"),
        sale: obj,
      })
    );
  };
  return (
    <div
      className="card d-flex flex-row"
      style={{ borderRadius: "1rem", height: "10rem" }}
    >
      <Carousel width="11rem" height="10rem" />
      <div className="card-body">
        <h5 className="card-title title font-bold">Product1</h5>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Category</h6>
            <h6 className="card-title gray-text">
              {item?.category?.name ?? ""}
            </h6>
          </div>
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Description</h6>
            <h6
              className="card-title gray-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={item?.description ?? ""}
            >
              {item?.description ? item?.description?.slice(0, 10) + "..." : ""}
            </h6>
          </div>
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Price</h6>
            <h6 className="card-title gray-text">{item?.price ?? ""}</h6>
          </div>
        </div>
        <div className="divider"></div>
        <div className="d-flex justify-content-end">
          {count ? (
            <div className="d-flex align-items-center">
              <button
                className="btn-sm toggle-btn"
                onClick={() => {
                  handleAddToCart(item);
                }}
              >
                +
              </button>
              <h4 className="count">{count}</h4>
              <button
                className="btn-sm toggle-btn"
                onClick={() => {
                  handleRemoveFromCart(item);
                }}
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="btn-sm addToCart-btn"
              onClick={() => {
                handleAddToCart(item);
              }}
            >
              <h6 className="m-0 btn-text">Add to cart</h6>
            </button>
          )}
          {/* <button
            className="btn-sm addToCart-btn"
            onClick={() => {
              handleAddToCart(item);
            }}
          >
            <h6 className="m-0 btn-text">Add to cart</h6>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
