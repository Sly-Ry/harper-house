import JumbotronLayout from '../layout/JumbotronLayout'
import '../assets/styles/Home.css'
import photo2 from '../assets/images/photo2.jpg'

export function Home() {
    return (
        <>
            <div className="home">
                <JumbotronLayout />
                {/* upcoming shows */}
                <div className='container-fluid'>
                    <div className="
                        row 
                        p-5 
                        bg-white 
                        d-flex 
                        justify-content-center 
                        align-items-center"
                    >
                        <div className="
                            col-7 
                            mb-1
                            p-5
                            pb-0"
                        >
                            <h2 className='
                                text-center 
                                fs-1 
                                mb-5'
                            >Upcoming Events</h2>
                            <div className="card p-5 pb-0">
                                <img src={photo2} className="card-img-top" alt=""/>
                                <div class="
                                    card-body 
                                    text-center"
                                >
                                    <h2 className="card-title fs-1 fw-bold">RED</h2>
                                    <p className="
                                        card-text 
                                        pb-4
                                        fs-3"
                                    >Feb 15 - Mar 1, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}
