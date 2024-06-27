import PropTypes from 'prop-types';

const SortButton = ({ field, sortedField, sortOrder, handleSort, children }) => (
  <button
    className={`btn mt-3 me-3 fw-medium ${field === sortedField ? 'btn-dark' : 'btn-outline-dark'}`}
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
