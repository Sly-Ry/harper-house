import subscribePhoto from '../assets/images/subscribe.jpg'
import joinPhoto from '../assets/images/join-team.jpg'
import { NavLink } from 'react-router-dom'

export default function ExtensionsLayout() {
    return (
        <>
            <div className="special container-fluid">
                <div className="
                    row
                    py-5
                    d-flex 
                    justify-content-evenly 
                    align-items-center"
                >
                    {/* Subscribe Box */}
                    <div className="col-12 col-md-10 col-lg-6 col-xl-5">
                        <div className="
                            card
                            bg-dark 
                            text-white
                            rounded-0
                            m-4"
                        >
                            <img src={subscribePhoto} className="card-img px-5" alt="" />
                            <div className="
                                card-img-overlay
                                text-white
                                d-flex
                                justify-content-center
                                align-items-center 
                                mt-5
                                pt-5"
                            >
                                <h1 className="card-title mt-5 pt-5">Subscribe</h1>
                                <NavLink to="/shows-events/subscribe" className="stretched-link"/>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Box */}
                    <div className="col-12 col-md-10 col-lg-6 col-xl-5">
                        <div className="
                            card 
                            bg-dark 
                            text-white
                            rounded-0
                            m-4"
                        >
                            <img src={joinPhoto} className="card-img px-5" alt="" />
                            <div className="
                                card-img-overlay
                                text-white
                                d-flex
                                justify-content-center
                                align-items-center
                                mt-5
                                pt-5"
                            >
                                <h1 className="card-title mt-5 pt-5">Volunteer</h1>
                                <NavLink to="/oppo/volunteer" className="stretched-link"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="bar"></div>
        </>
    )
}