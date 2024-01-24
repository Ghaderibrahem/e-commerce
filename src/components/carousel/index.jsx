import "./index.css";

const Carousel = ({ width = "100%", height, images = [], id }) => {
  const checkIfJson = (value) => {
    if (value.startsWith("[")) {
      if (!value.endsWith("]")) return "";
      let parsRes = JSON.parse(value) ?? "";
      return Array.isArray(parsRes) && parsRes?.length ? parsRes[0] : "";
    }
    return value;
  };
  return (
    <div
      id={`carouselExampleIndicators${id}`}
      className="carousel slide"
      style={{ width, height }}
      key={id}
    >
      <div className="carousel-indicators">
        {images?.map((element, index) => (
          <button
            key={index}
            type="button"
            style={{
              width: "1rem",
              height: "1rem",
              borderRadius: "1rem",
              border: "0px",
            }}
            data-bs-target={`#carouselExampleIndicators${id}`}
            data-bs-slide-to={index.toString()}
            className={index === 0 ? "active" : ""}
            aria-current="true"
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div
        className="carousel-inner carousel-inner-responsive"
        style={{
          height,
        }}
      >
        {images?.map((element, index) => (
          <div
            className={
              index === 0 ? "carousel-item active h-100" : "carousel-item h-100"
            }
            key={index}
          >
            <img
              src={checkIfJson(element)}
              className="d-block w-100 h-100"
              alt={checkIfJson(element)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
