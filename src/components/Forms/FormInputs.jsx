// FormInput.jsx


const FormInput = ({ type, value, onChange, id, placeholder, label }) => {
  
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default FormInput;
