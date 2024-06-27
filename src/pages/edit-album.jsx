import PropTypes from 'prop-types';
import { useAlbumForm } from '../Hooks/useAlbumForm';
import InputField from '../components/Forms/InputFields';

const EditAlbumModal = ({ show, handleClose, handleSave, albumData }) => {
  const {
    albumData: formData,
    handleTrackChange,
    addTrack,
    handleSubmit,
    inputFields,
  } = useAlbumForm(albumData, handleSave);

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Album</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {inputFields.map((field, index) => (
                <InputField key={index} {...field} />
              ))}
              <div className="mb-3">
                <label className="form-label">Tracks</label>
                {formData.tracks.map((track, index) => (
                  <div key={index} className="d-flex mb-2">
                    <InputField
                      label=""
                      id={`trackName${index}`}
                      name="name"
                      type="text"
                      placeholder="Track Name"
                      value={track.name}
                      onChange={(e) => handleTrackChange(index, e)}
                      required
                    />
                    <InputField
                      label=""
                      id={`trackDuration${index}`}
                      name="duration"
                      type="text"
                      placeholder="Duration"
                      value={track.duration}
                      onChange={(e) => handleTrackChange(index, e)}
                      required
                    />
                  </div>
                ))}
                <button type="button" className="btn btn-secondary" onClick={addTrack}>
                  Add Track
                </button>
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

EditAlbumModal.propTypes = {
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
    album_cover: PropTypes.string,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        duration: PropTypes.string,
      })
    ),
  }),
};

export default EditAlbumModal;
