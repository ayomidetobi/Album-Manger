import Logos from '../../assets/image/Logos.png';
import Track from './Track';

function AlbumInfo({ album }) {
  return (
    <div>
      <div className="row">
          <div className="">
            <button className="btn bg-danger-subtle ms-3 text-danger float-end">Delete Album</button>
            <button className="btn bg-primary-subtle text-primary float-end">Edit Album</button>
          </div>
          <div className="col-lg-5 col-sm-12">
            <img src={Logos} className="img-fluid w-100 border" alt="holder" />
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="mt-24">
              <h2 className="text-3xl font-black mycolor sonne-b">
                {album.album_name}
              </h2>
              <h3 className="text-2xl font-black">
                {album.artist_name}
              </h3>
              <ul className="py-8">
                <li><span className="font-black">Genre:</span> {album.genre}</li>
                <li><span className="font-black">Year:</span> {album.year_of_release}</li>
                <li><span className="font-black">Description:</span> {album.description}</li>
              </ul>
            </div>
           <Track tracks={album.tracks} artist={album.artist_name}/>
          </div>
        </div>
    </div>
  )
}

export default AlbumInfo;
