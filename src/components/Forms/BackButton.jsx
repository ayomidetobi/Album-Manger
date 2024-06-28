import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <a
      onClick={handleBackClick}
      className="text-dark text-2xl bi bi-arrow-left my-3"
      style={{ cursor: "pointer" }}
    ></a>
  );
};

export default BackButton;
