import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import AlbumInfo from "../components/Album/AlbumInfo";
import { useAlbumDetails } from "../Hooks/useAlbumDetails";
import AlbumModal from "../components/Album/AlbumModal";

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
      <AlbumModal
        show={showEditAlbumModal}
        handleClose={() => setShowEditAlbumModal(false)}
        handleSave={handleSaveEditAlbum}
        albumData={selectedAlbum}
        isEdit={true}
      />
      
    </div>
  );
}

export default AlbumDetails;
