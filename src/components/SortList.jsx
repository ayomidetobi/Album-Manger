import PropTypes from 'prop-types';
import SortButton from './Forms/SortButton';

const SortControls = ({ sortedField, sortOrder, handleSort, setSortedField, setSortOrder }) => (
  <div className="mb-3">
    <SortButton
      field="year_of_release"
      sortedField={sortedField}
      sortOrder={sortOrder}
      handleSort={handleSort}
    >
      Sort by Year
    </SortButton>
    
    <SortButton
      field="ranking"
      sortedField={sortedField}
      sortOrder={sortOrder}
      handleSort={handleSort}
    >
      Sort by Ranking
    </SortButton>
    
    <button
      className="btn bg-red-200 text-red-700 hover:bg-red-700 hover:text-red-200 mt-3"
      onClick={() => {
        setSortedField(null);
        setSortOrder('asc');
      }}
    >
      <i className="bi bi-arrow-clockwise"></i>
    </button>
  </div>
);

SortControls.propTypes = {
  sortedField: PropTypes.string,
  sortOrder: PropTypes.oneOf(['asc', 'desc']),
  handleSort: PropTypes.func.isRequired,
  setSortedField: PropTypes.func.isRequired,
  setSortOrder: PropTypes.func.isRequired,
};

export default SortControls;
