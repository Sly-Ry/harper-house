import { NavLink } from 'react-router-dom'
import Banner from '../components/Banner'
import photo3 from '../assets/images/photo3.jpg'
import '../assets/styles/Shows-Events.css'

export function ShowsEvents() {
    return (
        <>
            <div className="shows-events">
                {/* Banner */}
                <Banner title={"SHOWS & EVENTS"}/>
                <div className="container-fluid py-5 text-center">
                    <div className="
                        row 
                        row-col-2 
                        d-flex 
                        align-items-center 
                        justify-content-center
                        gy-5"
                    >
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Current Season</h1>
                                    <p class="card-text">What's in store.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/current-season">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Coming Soon</h1>
                                    <p class="card-text">What's to come.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/coming-soon">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Season Pass</h1>
                                    <p class="card-text">Stay a while.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/season-pass">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Subscribe</h1>
                                    <p class="card-text">Wander the halls.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/subscribe">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Discounts</h1>
                                    <p class="card-text">Quid pro quo.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/discounts">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-4 m-5">
                            <div className="card rounded-0"
                            >
                                <img src={photo3} className="card-img-top p-3 pb-0" alt="" />
                                <div class="card-body px-5 pt-3 pb-4">
                                    <h1 className="card-title">Production Calender</h1>
                                    <p class="card-text">Chart the course.</p>
                                    <div className='bar'></div>
                                    <NavLink to="/production-calendar">
                                        <p>Query?</p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}