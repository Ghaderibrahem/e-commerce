const Carousel = ({ width = "100%", height }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      style={{ width, height }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "1rem",
            border: "0px",
          }}
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        className="carousel-inner"
        style={{
          height,
          borderTopLeftRadius: "1rem",
          borderBottomLeftRadius: "1rem",
        }}
      >
        <div className="carousel-item active h-100">
          <img
            src="https://i.imgur.com/eGOUveI.jpeg"
            className="d-block w-100 h-100"
            alt="https://i.imgur.com/eGOUveI.jpeg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.imgur.com/eGOUveI.jpeg"
            className="d-block w-100"
            alt="https://i.imgur.com/eGOUveI.jpeg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i.imgur.com/eGOUveI.jpeg"
            className="d-block w-100"
            alt="https://i.imgur.com/eGOUveI.jpeg"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
