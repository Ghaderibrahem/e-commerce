import "./index.css";
const Pagination = ({
  page = 1,
  rowsPerPage = 10,
  handlePageChange,
  handleRowsPerPage,
  numOfPages = 3,
}) => {
  let btnArray = [];
  for (var i = 1; i <= numOfPages; i++) {
    btnArray.push(i);
  }
  return (
    <div className="d-flex flex-row justify-content-between ">
      <div className="d-flex align-items-center col-12 col-md-2 col-lg-2">
        <h6 className="m-2 rows-per-page">Rows per page:</h6>
        <select
          aria-label="Default select example"
          className="bg-transparent border-0 ronded"
          onChange={(e) => handleRowsPerPage(+e.target.value)}
          value={rowsPerPage}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="col-12 col-md-10 col-lg-10 d-flex flex-row justify-content-between">
        <button
          className="d-flex justify-content-center align-items-center border-0 bg-body p-3  m-2 rounded-3"
          style={{ width: "7rem", height: "3rem" }}
          onClick={() => handlePageChange(page - 1)}
          disabled={page == 1}
        >
          Previous
        </button>
        <div className="d-flex justify-content-center">
          {btnArray.map((row, index) => (
            <button
              className={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
              style={{
                width: "3rem",
                height: "3rem",
                backgroundColor: page == row ? "#EDE1FB" : "white",
              }}
              onClick={() => handlePageChange(row)}
              key={index}
            >
              {row}
            </button>
          ))}
        </div>
        {/* <div className="d-flex">
        <button
          className={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 1 ? "#EDE1FB" : "white",
          }}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
        <button
          className={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 2 ? "#EDE1FB" : "white",
          }}
          onClick={() => handlePageChange(2)}
        >
          2
        </button>
        <button
          className={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 3 ? "#EDE1FB" : "white",
          }}
          onClick={() => handlePageChange(3)}
        >
          3
        </button>
        <button
          className={`d-flex justify-content-center align-items-center  border-0  p-3 w-25 m-2 rounded-3`}
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: page == 4 ? "#EDE1FB" : "white",
          }}
          onClick={() => handlePageChange(4)}
        >
          4
        </button>
      </div> */}
        <button
          className="d-flex justify-content-center align-items-center  border-0 bg-body p-3  m-2 rounded-3"
          style={{ width: "7rem", height: "3rem" }}
          onClick={() => handlePageChange(page + 1)}
          disabled={page == numOfPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
