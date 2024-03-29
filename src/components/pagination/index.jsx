import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="responive-pagination col-12">
      <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-2 m-2">
        <h6 className="w-20 m-0 rows-per-page">Rows per page:</h6>
        <select
          aria-label="Default select example"
          className="bg-transparent border-0 rounded-3 w-30"
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
      <div className="col-sm-12 col-md-10 d-flex flex-row justify-content-between">
        <button
          className="d-flex justify-content-center align-items-center border-0 bg-body p-3  m-2 rounded-3"
          style={{ width: "7rem", height: "3rem" }}
          onClick={() => handlePageChange(page - 1)}
          disabled={page == 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "10px" }} />
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
        <button
          className="d-flex justify-content-center align-items-center  border-0 bg-body p-3  m-2 rounded-3"
          style={{ width: "7rem", height: "3rem" }}
          onClick={() => handlePageChange(page + 1)}
          disabled={page == numOfPages}
        >
          Next
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
