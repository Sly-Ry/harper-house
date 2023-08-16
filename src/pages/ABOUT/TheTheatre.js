import { NavLink } from 'react-router-dom'
import photo from '../../assets/images/about-us.jpg'
export function TheTheatre() {
    return (
        <>
            <div className="theatre bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="col-12">
                    <div className="row d-flex flex-row align-items-center justify-content-center text-center">
                        <div className="col-4">
                            <NavLink to='/about/the-theatre/history'>
                                <h2>History</h2>
                            </NavLink>
                        </div>
                        <div className="col-4">
                            <h1 className="text-center fs-1">THE THEATRE</h1>
                        </div>
                        <div className="col-4">
                            <NavLink to='/about/the-theatre/diversity'>
                                <h2>Equality</h2>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row my-5 px-3 d-flex justify-content-between align-items-center">
                        <div className="col-12 col-md-6">
                            <div className="card">
                                <img src={photo} alt="A lone man peering through the gate of Harper House at the witching hour." className=''/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-5">
                            <div className="accordion accordion-flush bg-danger" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <h2 className=''>FOUNDATION</h2>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Date founded...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            <h2>MISSION & VISION</h2>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our mission...</p>
                                            <p>Our vision...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <h2>CORE VIRTUES</h2>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Our values...</p>
                                            <ul style={{lineHeight: '30px'}}>
                                                <li><p>Virtue 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                <li><p>Virtue 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                                <li><p>Virtue 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2 py-2" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
            </div>
        </>
    ) 
}