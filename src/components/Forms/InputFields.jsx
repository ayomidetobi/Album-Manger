import PropTypes from "prop-types";

const InputField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  options,
  multiple,
  min,
  max,
}) => {
  if (type === "select") {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label font-black">
          {label}
        </label>
        <select
          className="form-select"
          id={id}
          name={name}
          value={value || ""}
          onChange={onChange}
          multiple={multiple}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === "file") {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label font-black">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          onChange={onChange}
          multiple={multiple}
        />
      </div>
    );
  } else {
    return (
      <div className="mb-3">
        <label htmlFor={id} className="form-label font-black">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          name={name}
          value={value || ""}
          onChange={onChange}
          min={min}
          max={max}
        />
      </div>
    );
  }
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(FileList),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    }),
  ),
  multiple: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputField.defaultProps = {
  options: [],
  multiple: false,
  min: "",
  max: "",
};

export default InputField;
