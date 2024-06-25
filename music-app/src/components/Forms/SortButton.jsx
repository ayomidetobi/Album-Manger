
const SortButton = ({ field, sortedField, sortOrder, handleSort, children }) => {
  const isActive = sortedField === field;
  const buttonClass = isActive ? 'btn btn-primary' : 'btn btn-outline-primary';

  return (
    <button
      className={`${buttonClass} me-2`}
      onClick={() => handleSort(field)}
    >
      {children} {isActive && (sortOrder === 'asc' ? <i className="bi bi-caret-up-fill"></i> :  <i className="bi bi-caret-down-fill"></i>)}

    </button>
  );
};

export default SortButton;
