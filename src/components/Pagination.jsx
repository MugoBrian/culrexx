import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Pagination = ({ data, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Reset current page when data changes
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  // Calculating total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Update parent with current page data
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage; // initial startIndex = 0
    const endIndex = startIndex + itemsPerPage; // initial endIndex (0 + 5) = 5
    const currentData = data.slice(startIndex, endIndex); // data is sliced from index 0 upto 5

    //set the currentData to the sliced data

    onPageChange(currentData);
  }, [currentPage, data, itemsPerPage, onPageChange]); // whenever currentPage, data (from filteredData in the CurrencyList component), itemsPerPage, onPageChange changes the function updates

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-row justify-center items-center mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="mx-2 px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      <p className="mx-1 px-3 py-1 text-lg">{currentPage}</p>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="mx-2 px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// check props is an array and a function
Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
