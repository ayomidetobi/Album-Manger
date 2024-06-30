import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import { useAlbums } from "../api/album-api";
import AlbumSearchSortLogic from "../api/search-api";
import { useAlbumModals } from "../Hooks/useAlbumModal";
import SearchBar from "../components/Forms/SearchInput";
import SortControls from "../components/Album/SortList";
import AlbumList from "../components/Album/AlbumList";
import AlbumModal from "../components/Album/AlbumModal";

function Albums() {
  const {
    albums,
    isLoading,
    query,
    token,
    sortedField,
    sortOrder,
    handleSearch,
    handleSort,
    setSortOrder,
    setSortedField,
  } = AlbumSearchSortLogic();

  const { createAlbum, updateAlbum } = useAlbums(token);
  const {
    selectedAlbum,
    showModal,
    showEditAlbumModal,
    setShowModal,
    setShowEditAlbumModal,
    setSelectedAlbum,
    handleSaveEditAlbum,
    handleSaveAlbum,
    isCreatingAlbum,
    isUpdatingAlbum,
  } = useAlbumModals(createAlbum, updateAlbum);
  console.log(albums);
  return (
    <>
      <Navbar />
      <div className="container lg:px-20 md:px-5">
        <button
          className="btn bg-dark text-white float-end my-4"
          onClick={() => setShowModal(true)}
        >
          add new album
        </button>
        <SearchBar query={query} handleSearch={handleSearch} />
        <SortControls
          sortedField={sortedField}
          sortOrder={sortOrder}
          handleSort={handleSort}
          setSortedField={setSortedField}
          setSortOrder={setSortOrder}
        />
        <AlbumList
          albums={albums}
          isLoading={isLoading}
          onEdit={(album) => {
            setSelectedAlbum(album);
            setShowEditAlbumModal(true);
          }}
        />
      </div>
      <Footer />
      <AlbumModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveAlbum}
        isEdit={false}
        albumData={null}
        isLoading={isCreatingAlbum}
      />
      {selectedAlbum && (
        <AlbumModal
          show={showEditAlbumModal}
          handleClose={() => setShowEditAlbumModal(false)}
          handleSave={handleSaveEditAlbum}
          albumData={selectedAlbum}
          isEdit={true}
          isLoading={isUpdatingAlbum}
        />
      )}
    </>
  );
}

export default Albums;
