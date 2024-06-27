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
      className="btn btn-outline-primary"
      onClick={() => {
        setSortedField(null);
        setSortOrder('asc');
      }}
    >
      Clear Sorting
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
