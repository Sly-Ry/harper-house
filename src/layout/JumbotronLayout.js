import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'

export default function JumbotronLayout() {

    return ( 
        <>
            <div id="carouselExampleFade" className="banner-box banner-line carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={photo1} className="card-img d-block w-100" alt=""/>
                            <div className='card-img-overlay d-flex flex-column align-items-center justify-content-center text-center'>
                                <div className='col-5 col-md-10 text-start'>
                                    <h2 className='welcome'>Welcome to<span> HARPER HOUSE</span></h2>
                                </div>
                                <div className="col-8 col-md-7 col-lg-5 col-xl-4 text-white text-center">
                                    <h4 className='quote'>"There's no place like home."</h4>
                                    <h5 className='text-end'> - <span>Dorothy</span></h5>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo2} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2 className='welcome fs-1'>Welcome to<span> HARPER HOUSE</span></h2>
                                <div className="info-box">
                                    <p className='quote col-5 col-md-6 col-lg-12 text-start'>There's no place like home</p>
                                    <p className='quote-author'> - <span>Dorothy</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={photo3} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2 className='welcome fs-1'>Welcome to<span> HARPER HOUSE</span></h2>
                                <div className="info-box">
                                    <p className='quote col-5 col-md-6 col-lg-12 text-start'>There's no place like home</p>
                                    <p className='quote-author'> - <span>Dorothy</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </>
    )
}