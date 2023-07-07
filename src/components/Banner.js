import photo1 from '../assets/images/photo1.jpg'

export default function Banner() {

    return ( 
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item" data-bs-interval="8000">
                        <img src={photo1} className="d-block w-100" alt=""/>
                        <div className='info'>
                            <h2>Welcome to<span> HARPER HOUSE</span></h2>
                            <p>There's no place like home</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}