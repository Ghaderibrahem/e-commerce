import Carousel from "../carousel";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../rtk/products";
import { useState } from "react";
import Swal from "sweetalert2";

function CartCard({ item }) {
  const { sale } = item;
  const dispatch = useDispatch();
  const { addedToCart } = useSelector((state) => state.products);
  const [count, setCount] = useState(item?.count ?? null);
  const handleCheckIfAdded = (obj, type = "add") => {
    if (!obj) return 0;
    let addedSales = addedToCart?.filter((row) => row?.sale?.id === obj?.id);
    if (!addedSales.length) {
      setCount(1);
      return 1;
    }
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
    <div className="card responsive-card" key={sale?.id}>
      <div className="responsive-carousel">
        <Carousel
          width="100%"
          height="100%"
          images={sale?.images?.length ? sale?.images : []}
          id={sale?.id}
        />
      </div>

      <div className="card-body d-flex flex-column justify-content-around">
        <div className="d-flex justify-content-between position-relative">
          <h5
            className="card-title title font-bold"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title={sale?.title ?? ""}
          >
            {sale?.title ? sale?.title?.slice(0, 15) + "..." : ""}
          </h5>
          <button
            type="button"
            className="btn-close bg-danger rounded-5 p-2 position-absolute delete-btn"
            aria-label="Close"
            onClick={() => dispatch(deleteFromCart({ id: sale?.id }))}
          ></button>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Category</h6>
            <h6 className="card-title gray-text">
              {sale?.category?.name ?? ""}
            </h6>
          </div>
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Description</h6>
            <h6
              className="card-title gray-text"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title={sale?.description ?? ""}
            >
              {sale?.description ? sale?.description?.slice(0, 10) + "..." : ""}
            </h6>
          </div>
          <div className="d-flex flex-column">
            <h6 className="card-title gray-text">Price</h6>
            <h6 className="card-title gray-text">{sale?.price ?? ""}</h6>
          </div>
        </div>
        <div className="divider"></div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="m-0 text-success">{`Total Price: ${
              sale?.price * count
            }`}</h6>
          </div>
          {count ? (
            <div className="d-flex align-items-center">
              <button
                className="btn-sm toggle-btn"
                onClick={() => {
                  handleRemoveFromCart(sale);
                }}
              >
                -
              </button>
              <h4 className="count">{count}</h4>
              <button
                className="btn-sm toggle-btn"
                onClick={() => {
                  handleAddToCart(sale);
                }}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="btn-sm addToCart-btn"
              onClick={() => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Thank you for your interest in our product",
                  showConfirmButton: false,
                  timer: 1500,
                });
                handleAddToCart(sale);
              }}
            >
              <h6 className="m-0 btn-text">Add to cart</h6>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartCard;
