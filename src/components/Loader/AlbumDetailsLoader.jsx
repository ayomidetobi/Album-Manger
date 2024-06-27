import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function AlbumDetailsLoader() {
  return (
    <div>
      <div className="container px-4 ">
  <div className="row gx-5">
    <div className="col-lg-5 col-sm-12">
     <div className="p-3"><Skeleton height={"600px"}/></div>
    </div>
    <div className="col-lg-7 col-sm-12">
      <div className="p-3 mt-24">
        <Skeleton width={"200px"} height={"30px"} />
        <Skeleton width={"300px"} height={"24px"} />
        <Skeleton width={"150px"} height={"16px"} count={3} />
        <Skeleton height={"16px"} count={3}/>
        <Skeleton height={"24px"} count={4} className='mt-8' />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AlbumDetailsLoader;
