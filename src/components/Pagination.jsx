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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    onPageChange(currentData);
  }, [currentPage, data, itemsPerPage, onPageChange]);

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

      <button className="mx-1 px-3 py-1 border rounded">{currentPage}</button>

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

Pagination.propTypes = {
  data: PropTypes.array.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
