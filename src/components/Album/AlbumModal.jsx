import PropTypes from "prop-types";
import { useAlbumForm } from "../../Hooks/useAlbumForm";
import InputField from "../Forms/InputFields";
import GlobalLoader from "../Loader/GlobalLoader";
const AlbumModal = ({
  show,
  handleClose,
  handleSave,
  albumData,
  isEdit,
  isLoading,
}) => {
  const { handleSubmit, inputFields } = useAlbumForm(albumData, handleSave);
  if (!albumData) {
    return <div>loading ..</div>;
  }

  return (
    <>
      {isLoading && <GlobalLoader />}
      {show && <div className="modal-backdrop fade show"></div>}
      {show && !isLoading && (
        <div className={`modal ${show ? "d-block" : "d-none"}`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-slate-100">
                <h5 className="modal-title text-orange-700 font-black">
                  {isEdit ? "Edit Album" : "New Album"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {inputFields.map((field, index) => (
                    <InputField key={index} {...field} />
                  ))}

                  <button type="submit" className="btn btn-dark ">
                    {isEdit ? "Save Changes" : "Create Album"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

AlbumModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  errors: PropTypes.string,
  albumData: PropTypes.shape({
    id: PropTypes.number,
    album_name: PropTypes.string,
    artist_name: PropTypes.string,
    year_of_release: PropTypes.number,
    ranking: PropTypes.number,
    genre: PropTypes.string,
    description: PropTypes.string,
    album_cover: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        duration: PropTypes.string,
      }),
    ),
  }),
  isEdit: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default AlbumModal;
