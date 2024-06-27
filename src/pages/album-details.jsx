import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AlbumInfo from '../components/Album/AlbumInfo';
import EditAlbumModal from './edit-album';
import { useAlbumDetails } from '../Hooks/useAlbumDetails';

function AlbumDetails() {
  const {
    album,
    showEditAlbumModal,
    handleEdit,
    handleSaveEditAlbum,
    handleDelete,
    setShowEditAlbumModal,
    selectedAlbum,
  } = useAlbumDetails();

  

  return (
    <div>
      <Navbar />
      <div className="container sm:px-8 lg:px-20 mb-32 mt-10">
        <AlbumInfo album={album} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      <Footer />
      <EditAlbumModal
        show={showEditAlbumModal}
        handleClose={() => setShowEditAlbumModal(false)}
        handleSave={handleSaveEditAlbum}
        albumData={selectedAlbum}
      />
    </div>
  );
}

export default AlbumDetails;
