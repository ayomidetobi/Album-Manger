import PropTypes from 'prop-types';

const SearchBar = ({ query, handleSearch }) => (
  <div className="my-4">
    <input
      type="text"
      className="form-control"
      placeholder="Search by album name or artist name"
      value={query}
      onChange={(e) => handleSearch(e.target.value)}
    />
  </div>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
