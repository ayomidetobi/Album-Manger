// ConfirmationModal.js
import { toast } from "react-toastify";
import PropTypes from "prop-types";
const ConfirmationModal = ({ message, onConfirm }) => {
  const handleConfirm = () => {
    onConfirm();
    toast.dismiss(); // Close the toast after confirming
  };

  const handleCancel = () => {
    toast.dismiss();
  };

  return (
    <div>
      <div>{message}</div>
      <button onClick={handleConfirm} className="btn btn-success me-2">
        Yes
      </button>
      <button onClick={handleCancel} className="btn btn-danger">
        No
      </button>
    </div>
  );
};

ConfirmationModal.propTypes = {
  message: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal;
