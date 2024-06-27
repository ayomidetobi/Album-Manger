import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AlbumListLoader() {
  return (
    <div>
      <div className="container px-4 text-center">
  <div className="row gx-5">
    <div className="col">
     <div className="p-3"><Skeleton height={"500px"}/></div>
    </div>
    <div className="col">
      <div className="p-3"><Skeleton height={"500px"}/></div>
    </div>
    <div className="col">
      <div className="p-3"><Skeleton height={"500px"}/></div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AlbumListLoader;
