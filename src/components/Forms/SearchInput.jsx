import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import BackButton from "./BackButton";

const SearchBar = ({ query, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="my-4">
      <BackButton />
      <input
        type="text"
        className="form-control"
        placeholder="Search by album name or artist name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
