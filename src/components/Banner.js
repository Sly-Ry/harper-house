import photo4 from '../assets/images/photo4.jpg'

export default function Banner() {

    return ( 
        <>
            <div>
                <div className="carousel-inner">
                    <div className="banner" data-bs-interval="8000">
                        <img src={photo4} className="d-block w-100" alt=""/>
                        <div className='banner-text'>
                            <h2>SHOWS & EVENTS</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}