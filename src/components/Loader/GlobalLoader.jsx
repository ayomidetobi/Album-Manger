import "./loader.css";

function GlobalLoader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 position-fixed top-0 start-0 w-100">
      <div className="modal-backdrop fade show"></div>
      <div className="spinner-grow text-orange-700" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div>
        <p className="text-orange-700">loading...</p>
      </div>
    </div>
  );
}

export default GlobalLoader;
