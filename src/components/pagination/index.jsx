const Pagination = ({ page = 2, handlePageChange, numOfPages = 3 }) => {
  return (
    <div class="d-flex flex-row justify-content-between">
      <button
        class="d-flex justify-content-center align-items-center border-0 bg-body p-3  m-2 rounded-3"
        style={{ width: "7rem", height: "3rem" }}
        onClick={() => handlePageChange(page - 1)}
        disabled={page == 1}
      >
        Previous
      </button>
      <div class="d-flex">
        <button
          class={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 1 ? "purple" : "white",
          }}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button
          class={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 2 ? "purple" : "white",
          }}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button
          class={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 3 ? "purple" : "white",
          }}
          onClick={() => handlePageChange(3)}
        >
          3
        </button>
        <button
          class={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 4 ? "purple" : "white",
          }}
          onClick={() => handlePageChange(4)}
        >
          4
        </button>
      </div>
      <button
        class="d-flex justify-content-center align-items-center  border-0 bg-body p-3  m-2 rounded-3"
        style={{ width: "7rem", height: "3rem" }}
        onClick={() => handlePageChange(page + 1)}
        disabled={page == numOfPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
