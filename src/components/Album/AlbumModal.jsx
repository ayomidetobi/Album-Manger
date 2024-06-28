import PropTypes from "prop-types";
import { useAlbumForm } from "../../Hooks/useAlbumForm";
import InputField from "../Forms/InputFields";

const AlbumModal = ({ show, handleClose, handleSave, albumData, isEdit }) => {
  const { handleSubmit, inputFields } = useAlbumForm(albumData, handleSave);

  return (
    <>
      {show && <div className="modal-backdrop fade show"></div>}
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
                {/* <div className="mb-3">
                  <label className="form-label">Tracks</label>
                  {formData.tracks.map((track, index) => (
                    <div key={index} className="d-flex mb-2">
                      <InputField
                        label="Song Name"
                        id={`trackName${index}`}
                        name="name"
                        type="text"
                        placeholder="Track Name"
                        value={track.name}
                        onChange={(e) => handleTrackChange(index, e)}
                        required
                      />
                      <InputField
                        label="Duration"
                        id={`trackDuration${index}`}
                        name="duration"
                        type="text"
                        placeholder={"Duration"}
                        value={track.duration}
                        onChange={(e) => handleTrackChange(index, e)}
                        required
                      />
                    </div>
                  ))}
                  <div>
                  <button
                    type="button"
                    className="btn border-orange-700 text-orange-700 font-black hover:bg-orange-700 hover:text-white"
                    onClick={addTrack}
                  >
                    Add Track
                  </button>
                  </div>
                </div> */}
                <button type="submit" className="btn btn-dark ">
                  {isEdit ? "Save Changes" : "Create Album"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AlbumModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
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
};

export default AlbumModal;
