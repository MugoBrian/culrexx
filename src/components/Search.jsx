import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle hash changes
  const handleHashChange = useCallback(() => {

    // Get the uncoded version of the search term infront of the # in the URL
    const newHash = window.location.hash.substring(1);
    const decodedTerm = newHash ? decodeURIComponent(newHash) : "";

    setSearchTerm(decodedTerm); //Set the uncoded search term to state Search
    
    onSearch(decodedTerm);
  }, [onSearch]);

  // Initialize from URL hash and set up listener
  useEffect(() => {
    // When the component renders checks whether there's a URL hash
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [handleHashChange]);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Update URL hash
    if (term) {
      window.history.replaceState(null, "", `#${encodeURIComponent(term)}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }

    onSearch(term);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full max-w-3xl">
        <input
          name="searchTerm"
          placeholder="Search for currency"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full h-12 text-lg bg-white pl-10 rounded-xl border border-gray-300 focus:outline-none"
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <FaSearch className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Search;

// propTypes to ensure prop onSearch is a function and it has been passed
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
