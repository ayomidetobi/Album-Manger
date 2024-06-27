import PropTypes from 'prop-types';

const SearchBar = ({ query, handleSearch }) => (
  <div className="my-4">
    <a href='/' className="text-dark text-2xl bi bi-arrow-left my-3"></a>
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
