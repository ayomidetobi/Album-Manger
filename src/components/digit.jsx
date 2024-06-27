import shape from '../assets/image/Logos.png'
import butt from '../assets/image/butt.png'
const Digit = () => {
    return (
        <div>
            <div className='bg-digit pb-20'>
                <div className="container lg:px-20 md:px-5">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <img src={shape} alt="holder"  />
                    </div>
                    <div className="col-lg-6 col-sm-12 ps-25 pb-12">
                        <p className='sonne-b text-sound f-w-600 text-base lh-2 mt-36 '>PLUGINS</p>
                        <p className='sonne-b text-5xl lh-1' >Build your <br /> <span className='mycolor'>digital studio</span></p>
                        <p className='text-grey py-6'>Try industry-leading music software for free, <br /> pay it off over time and own it forever.</p>
                        <button className='btn btn-dark '>TRY GEAR</button>
                    </div>
                </div>
                </div>
                <div className="container lg:px-20 md:px-5">
                <div className="row">
                <div className="col-lg-6 col-sm-12   pb-12">
                        <p className='sonne-b text-sound f-w-600 text-base lh-2 mt-36 '>STUDIO</p>
                        <p className='sonne-b text-5xl lh-1' >Stay in <span className='mycolor'>sync</span></p>
                        <p className='text-grey py-6'>Try industry-leading music software for free, <br /> pay it off over time and own it forever.</p>
                        <button className='btn btn-dark '>TRY STUDIO</button>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <img src={butt}  alt="holder" className='m-r-40'/>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Digit;
