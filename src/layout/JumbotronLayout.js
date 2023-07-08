import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo3 from '../assets/images/photo3.jpg'

export default function JumbotronLayout() {

    return ( 
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="8000">
                            <img src={photo1} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <div className="info-box">
                                    <p className='quote'>There's no place like home</p>
                                    <p className='quote-author'> - <span>Dorothy</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="8000">
                            <img src={photo2} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <div className="info-box">
                                    <p className='quote'>There's no place like home</p>
                                    <p className='quote-author'> - <span>Dorothy</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="8000">
                            <img src={photo3} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <div className="info-box">
                                    <p className='quote'>There's no place like home</p>
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