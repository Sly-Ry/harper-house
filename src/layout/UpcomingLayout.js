import productionRed from '../assets/images/pro_red.jpg'

export default function UpcomingLayout() {
    return (
        <>
            <div className='upcoming container-fluid'>
                <div className="
                    row
                    pb-5
                    d-flex 
                    justify-content-center 
                    align-items-center"
                >
                    <div className="
                        col-12
                        col-md-10
                        col-lg-8
                        col-xl-6
                        mb-1
                        p-5
                        pb-0"
                    >
                        <h2 className='
                            upcoming-header
                            text-center 
                            fs-1 
                            mb-4'
                        >Upcoming Events</h2>
                        <div className="card py-3">
                            <img src={productionRed} className="card-img-top rounded-0" alt=""/>
                            <div className="
                                card-body 
                                text-center"
                            >
                                <h2 className="card-title fs-1 fw-bold">RED</h2>
                                <p className="
                                    card-text 
                                    pb-3
                                    fs-3"
                                >Feb 15 - Mar 1, 2024</p>
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