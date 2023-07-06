import photo2 from '../assets/images/photo2.jpg'

export default function UpcomingLayout() {
    return (
        <>
            <div className='upcoming container-fluid'>
                <div className="
                    row 
                    bg-white 
                    d-flex 
                    justify-content-center 
                    align-items-center"
                >
                    <div className="
                        col-12
                        col-xxl-7
                        mb-1
                        p-5
                        pb-0"
                    >
                        <h2 className='
                            text-center 
                            fs-1 
                            mb-5'
                        >Upcoming Events</h2>
                        <div className="card py-3">
                            <img src={photo2} className="card-img-top rounded-0" alt=""/>
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
                    <div className="bar"></div>
                </div>
            </div>
        </>
    )
}