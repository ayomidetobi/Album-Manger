import AlbumSearchSortLogic from '../api/search-api';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import AlbumCard from '../components/Album/AlbumCard';
import SortButton from '../components/Forms/SortButton';

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

  return (
    <>
      <div className="container px-20">
        <Navbar />
        <button className='btn bg-primary-subtle text-primary float-end mb-5'> add new album</button>
        <div className="my-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by album name or artist name"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <SortButton
            field="year_of_release"
            sortedField={sortedField}
            sortOrder={sortOrder}
            handleSort={handleSort}
          >
            Sort by Year
          </SortButton>
          
          <SortButton
            field="ranking"
            sortedField={sortedField}
            sortOrder={sortOrder}
            handleSort={handleSort}
          >
            Sort by Ranking
          </SortButton>
           
          <button
            className="btn btn-outline-primary"
            onClick={() => {
              setSortedField(null);
              setSortOrder('asc');
            }}
          >
            Clear Sorting
          </button>
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : albums && albums.length > 0 ? (
          <AlbumCard albums={albums} />
        ) : (
          <div>No albums found.</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Albums;
