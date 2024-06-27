import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from "../../assets/image/Logos.png";

function AlbumCard({ albums, onEdit }) {
  return (
    <div>
      <div className="row my-20">
        {albums.map(album => (
          <div className="col-lg-4 col-sm-12" key={album.id}>
            <div className="card shadow-sm p-3 mt-4">
              <img src={Logo} alt="" className="w-80 mx-auto" />
              <div className="card-body">
                <h5 className="card-title sonne-b text-lg">{album.album_name}</h5>
                <p className="card-text">Artist: {album.artist_name}</p>
                <p className="card-text">Ranking: {album.ranking}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="btn-group btn-group-lg">
                    <Link to={`/albums/${album.id}`} className="btn btn-sm btn-outline-secondary">View</Link>
                    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(album)}>Edit</button>
                  </div>
                  <small className="text-body-secondary">Year: {album.year_of_release}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

AlbumCard.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      album_name: PropTypes.string.isRequired,
      artist_name: PropTypes.string.isRequired,
      ranking: PropTypes.number.isRequired,
      year_of_release: PropTypes.number.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AlbumCard;
