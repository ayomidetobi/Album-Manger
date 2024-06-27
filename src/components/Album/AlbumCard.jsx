import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function AlbumCard({ albums, onEdit }) {
  return (
    <div>
      <div className="row my-20">
      
        {albums.map(album => {
          const encodedId = btoa(album.id.toString()); 
          return (
            <div className="col-lg-4 col-sm-12" key={album.id}>
              <div className="card shadow-sm p-3 mt-4">
                <img src={album.album_cover} alt="" className="album-card mx-auto" />
                <div className="card-body text-secondary">
                  <h5 className="card-title sonne-b text-lg text-black">{album.album_name.toUpperCase()}</h5>
                  <p className="card-text fw-bold">Artist: {album.artist_name}</p>
                  <p className="card-text fw-bold">Ranking: {album.ranking}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <Link to={`/albums/${encodedId}`} className="btn btn-sm btn-dark">View</Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-dark ms-2"
                        onClick={() => onEdit(album)}
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary mycolor fw-bolder">Year: {album.year_of_release}</small>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
