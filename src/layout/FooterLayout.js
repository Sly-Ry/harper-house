export default function Footer() {
    return (
        <>
            <div className="footer container-fluid py-0">
                <div className="
                    row
                    py-2
                    d-flex
                    justify-content-center
                    align-items-start
                    fs-6"
                >
                    <div className="
                        col-12 col-md-3 col-lg-3
                        d-flex
                        justify-content-center
                        my-5"
                    >
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-header">
                                <h5>T'BOX OFFICE HOURS</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Monday - Sunday, <span>10PM</span> - <span>5PM</span></li>
                                <li className="list-group-item ">Join our <span className='newsletter'>Newsletter</span>!</li>
                            </ul>
                        </div>
                    </div>
                    <div className="
                        col-12 col-md-3 col-lg-3
                        d-flex
                        justify-content-center
                        my-5"
                    >
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-header">
                                <h5>CONTACT</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Email Us</li>
                                <li className="list-group-item">(###) ###-####</li>
                                {/* FEATURE: HOME ADDRESS */}
                                {/* <li className="list-group-item">Street Adress</li> */}
                                <div className="icons fs-4">
                                    <a href="https://www.facebook.com/">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                    <a href="https://twitter.com/?lang=en">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="
                        col-12 col-md-3 col-lg-3
                        d-flex
                        justify-content-center
                        my-5"
                    >
                        <div className="card" style={{width: '18rem'}}>
                            <div className="card-header">
                                <h5>YEARLY SPONSORS</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Sponsor 1</li>
                                <li className="list-group-item">Support 2</li>
                                <li className="list-group-item">Sponsor 3</li>
                                <li className="list-group-item">Support 4</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}