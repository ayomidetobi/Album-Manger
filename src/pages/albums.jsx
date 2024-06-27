import Footer from '../components/footer';
import Navbar from '../components/navbar';
import NewAlbumModal from './create-album';
import EditAlbumModal from './edit-album';
import { useAlbums } from '../api/album-api';
import AlbumSearchSortLogic from '../api/search-api';
import { useAlbumModals } from '../Hooks/useAlbumModal';
import SearchBar from '../components/Forms/SearchInput';
import SortControls from '../components/SortList';
import AlbumList from '../components/AlbumList';

function Albums() {
  const {
    albums,
    isLoading,
    query,
    sortedField,
    sortOrder,
    handleSearch,
    handleSort,
    setSortOrder,
    setSortedField,
  } = AlbumSearchSortLogic();

  const { createAlbum, updateAlbum } = useAlbums();
  const {
    selectedAlbum,
    showModal,
    showEditAlbumModal,
    setShowModal,
    setShowEditAlbumModal,
    setSelectedAlbum,
    handleSaveEditAlbum,
    handleSaveAlbum,
  } = useAlbumModals(createAlbum, updateAlbum);

  return (
    <>
      <div className="container px-20">
        <Navbar />
        <button className='btn bg-primary-subtle text-primary float-end mb-5' onClick={() => setShowModal(true)} > add new album</button>
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
      <NewAlbumModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveAlbum}
      />
      {selectedAlbum && (
        <EditAlbumModal
          show={showEditAlbumModal}
          handleClose={() => setShowEditAlbumModal(false)}
          handleSave={handleSaveEditAlbum}
          albumData={selectedAlbum}
        />
      )}
    </>
  );
}

export default Albums;
