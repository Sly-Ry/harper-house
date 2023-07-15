// import { navItems } from "../data/NavItems"
import background from '../assets/images/background.jpg'

export default function Banner({ title }) {

    return ( 
        <>
            <div>
                <div className="carousel-inner">
                    <div className="banner-box" data-bs-interval="8000">
                        <img src={background} className="d-block w-100" alt=""/>
                        <div class="card-img-overlay text-center text-white d-flex align-items-center justify-content-center">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}