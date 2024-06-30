import PropTypes from "prop-types";
import AlbumCard from "./AlbumCard";
import AlbumListLoader from "../Loader/AlbumListLoader";

const AlbumList = ({ albums, isLoading, onEdit }) => (
  <>
    {isLoading ? (
      <AlbumListLoader />
    ) : albums && albums.length > 0 ? (
      <AlbumCard albums={albums} onEdit={onEdit} />
    ) : (
      <div>No albums found.</div>
    )}
  </>
);

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      album_name: PropTypes.string.isRequired,
      artist_name: PropTypes.string.isRequired,
      year_of_release: PropTypes.number.isRequired,
      ranking: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      description: PropTypes.string,
      album_cover: PropTypes.string,
      tracks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default AlbumList;
