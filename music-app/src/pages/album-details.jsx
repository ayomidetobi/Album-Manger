
import { useParams } from 'react-router-dom';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useAlbum } from '../api/album-api';
import AlbumInfo from '../components/Album/AlbumInfo';


function AlbumDetails() {
  const { id } = useParams();
  const { data: album, isLoading, isError } = useAlbum(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading album details.</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container sm:px-8 lg:px-20 mb-32 mt-10">
        <AlbumInfo album={album} />
      </div>
      
        <Footer />
      
    </div>
  );
}

export default AlbumDetails;
