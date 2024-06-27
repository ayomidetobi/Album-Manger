import PropTypes from 'prop-types';

const SortButton = ({ field, sortedField, sortOrder, handleSort, children }) => (
  <button
    className={`btn ${field === sortedField ? 'btn-primary' : 'btn-outline-primary'}`}
    onClick={() => handleSort(field)}
  >
    {children}
    {field === sortedField && (
      <span className={`ms-1 ${sortOrder === 'asc' ? 'bi bi-arrow-up' : 'bi bi-arrow-down'}`}></span>
    )}
  </button>
);

SortButton.propTypes = {
  field: PropTypes.string.isRequired,
  sortedField: PropTypes.string,
  sortOrder: PropTypes.oneOf(['asc', 'desc']),
  handleSort: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SortButton;
