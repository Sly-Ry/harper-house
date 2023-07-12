// import { navItems } from "../data/NavItems"
import photo4 from '../assets/images/photo4.jpg'

export default function Banner({ title }) {

    return ( 
        <>
            <div>
                <div className="carousel-inner">
                    <div className="banner-box" data-bs-interval="8000">
                        <img src={photo4} className="d-block w-100" alt=""/>
                        <div className='banner-text'>
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}