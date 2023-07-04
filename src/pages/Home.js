// import '../assets/styles/Home'
// import JumbotronLayout from '../layout/JumbotronLayout'
import '../assets/styles/Home.css'
import photo1 from '../assets/images/photo1.jpg'
import photo2 from '../assets/images/photo2.jpg'
import photo7 from "../assets/images/photo7.jpg"

export function Home() {
    return (
        <>
            <div className="home">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="12000">
                            <img src={photo1} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <p>There's no place like home</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="12000">
                            <img src={photo2} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <p>There's no place like home</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="12000">
                            <img src={photo7} className="d-block w-100" alt=""/>
                            <div className='info'>
                                <h2>Welcome to<span> HARPER HOUSE</span></h2>
                                <p>There's no place like home</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{display: "none"}}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{display: "none"}}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    
                </div>
            </div>
        </>
    ) 
}
