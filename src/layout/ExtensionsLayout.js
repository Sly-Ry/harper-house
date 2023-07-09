
import subscribePhoto from '../assets/images/subscribe.jpg'
import joinPhoto from '../assets/images/join-team.jpg'

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
                            <a href="/subscribe">
                                <img src={subscribePhoto} className="card-img  px-5" alt="" />
                            </a>
                            <div className="
                                card-img-overlay
                                text-white
                                text-center
                                d-flex
                                flex-column
                                justify-content-center
                                align-items-center"
                            >
                                <h1 className="card-title">Subscribe</h1>
                            </div>
                        </div>
                    </div>

                    {/* Volunteer Box */}
                    <div className="col-12 col-md-10 col-lg-6 col-xl-5">
                        <div className="
                            card 
                            bg-dark 
                            text-white
                            rounded-
                            m-4"
                        >
                            <a href="/oppo">
                                <img src={joinPhoto} className="card-img px-5" alt="" />
                            </a>
                            <div className="
                                card-img-overlay
                                text-white
                                text-center
                                d-flex
                                flex-column
                                justify-content-center
                                align-items-center"
                            >
                                <h1 className="card-title">Volunteer</h1>
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