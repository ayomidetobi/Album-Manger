
import AlbumDetailsLoader from '../Loader/AlbumDetailsLoader';
import Track from './Track';
import PropTypes from 'prop-types';

function AlbumInfo({ album, onEdit, onDelete }) {
  if (!album) {
    return <AlbumDetailsLoader />;
  }
  return (
    <div>
      <div className="row">
        <div className="py-3">
        <a href='/albums' className="text-dark text-2xl bi bi-arrow-left my-3"></a>
          <button className="btn bg-danger-subtle ms-3 text-danger float-end" onClick={onDelete}>
          <i className="bi bi-trash"></i>
          </button>
          <button className="btn bg-dark text-white float-end" onClick={onEdit}>
          <i className="bi bi-pencil"></i>
          </button>
        </div>
        <div className="col-lg-5 col-sm-12">
          <img src={album.album_cover} className="img-fluid-album  border" alt="holder" />
        </div>
        <div className="col-lg-7 col-sm-12 text-secondary">
          <div className="mt-24">
            <h2 className="text-3xl font-black  text-black sonne-b">
              {album.album_name.toUpperCase()}
            </h2>
            <h3 className="text-2xl font-black sonne-b mycolor pt-2">
              {album.artist_name}
            </h3>
            <ul className="py-3">
              <li><span className="font-black">Genre:</span> {album.genre}</li>
              <li><span className="font-black">Year:</span> {album.year_of_release}</li>
              <li><span className="font-black">Description:</span> {album.description}</li>
            </ul>
          </div>
          <Track tracks={album.tracks} artist={album.artist_name} />
        </div>
      </div>
    </div>
  );
}
AlbumInfo.propTypes = {
  album: PropTypes.shape({
    album_name: PropTypes.string.isRequired,
    artist_name: PropTypes.string.isRequired,
    album_cover: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object, 
    ]),
    genre: PropTypes.string.isRequired,
    year_of_release: PropTypes.number.isRequired,
    description: PropTypes.string,
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AlbumInfo;
