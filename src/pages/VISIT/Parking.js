import '../../assets/styles/Parking.css'
import img from '../../assets/images/parking-map.jpg'

export function Parking() {
    return (
        <>
            <div className="parking">
                <div className="container-fluid">
                    <div className="row row-cols-md-1 row-cols-lg-2 d-flex justify-content-center align-items-center">
                        <div className="col-12 col-sm-12 col-lg-10 col-xl-6 col-xxl-5 p-5">
                            <h1>Parking at <span>HARPER HOUSE</span>...</h1>
                            <h3>for Events</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo esse modi perferendis amet, maxime veritatis, obcaecati reiciendis, expedita dignissimos accusantium quis distinctio.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque neque dignissimos quibusdam reprehenderit expedita fugiat iure sequi possimus obcaecati, amet commodi labore quae minus velit culpa itaque beatae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.?
                            </p>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque neque dignissimos quibusdam reprehenderit expedita fugiat iure sequi possimus obcaecati, amet commodi labore quae minus velit culpa itaque beatae delectus.
                            </p>
                            <br></br>
                            <h3>for Venues</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo esse modi perferendis amet, maxime veritatis, obcaecati reiciendis, expedita dignissimos accusantium quis distinctio.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eaque neque dignissimos quibusdam reprehenderit expedita fugiat iure sequi possimus obcaecati, amet commodi labore quae minus velit culpa itaque beatae delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit.?
                            </p>
                            <br></br>
                            <h3>for Volunteers</h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo esse modi perferendis amet, maxime veritatis, obcaecati reiciendis, expedita dignissimos accusantium quis distinctio.
                            </p>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-10 col-xl-6 col-xxl-4 d-flex align-items-center justify-content-center p-4">
                            <div className='img-box my-5'>
                                <img src={img} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}