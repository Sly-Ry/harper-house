import '../assets/styles/Uhoh.css'
import { NavLink } from 'react-router-dom';

export default function Uhoh() {
    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row" style={{height: 400}}>
                    <div className="col text-white d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="future-feature">
                            <h1>
                                Uh oh! 
                            <br/>
                                This feature is in <span>development</span>...
                            <br/>
                                Care to help?
                            </h1>
                            <div className="links d-flex align-items-center justify-content-between py-3">
                                <NavLink to="/support/donate">
                                    <h2>Donate</h2>
                                </NavLink>
                                <NavLink to="/oppo/volunteer">
                                    <h2>Volunteer</h2>
                                </NavLink>
                                <NavLink to="/about/contact">
                                    <h2>Contact</h2>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 