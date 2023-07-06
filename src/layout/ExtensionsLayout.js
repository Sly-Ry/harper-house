
import subscribePhoto from '../assets/images/subscribe.jpg'
import joinPhoto from '../assets/images/join-team.jpg'

export default function ExtensionsLayout() {
    return (
        <>
            <div className="special container-fluid">
                <div className="
                    row
                    px-5
                    pt-5
                    d-flex 
                    justify-content-evenly 
                    align-items-center"
                >
                    {/* Subscribe Box */}
                    <div className="col-5">
                        <div className="
                            card 
                            bg-dark 
                            text-white"
                        >
                            <a href="/subscribe">
                                <img src={subscribePhoto} className="card-img rounded-2 p-5" alt="" />
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
                    <div className="col-5">
                        <div className="
                            card 
                            bg-dark 
                            text-white"
                        >
                            <a href="/oppo">
                                <img src={joinPhoto} className="card-img rounded-0 p-5" alt="" />
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
                    {/* divider */}
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}