import { showList } from "../../data/ShowList";
import { keys } from "../../data/ResidencyKeys";
import { NavLink } from "react-router-dom";


import pro1 from '../../assets/images/photo2.jpg'


export default function Tickets(){
    return (
        <>
            <div className="tickets col-12 bg-white p-5 m-0">
                <div className="row py-2 d-flex justify-content-center">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        {/* SHOWS */}
                        <div className="accordion-item">
                            <h2 className="accordion-header d-flex align-items-center justify-content-center" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h2>SHOWS & EVENTS</h2>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        {
                                            showList.map(shows => {
                                                if (shows.id < 2){
                                                    return (
                                                        <>
                                                            <div key={shows.id} className="card mb-5 py-5" >
                                                                <div className="row d-flex justify-content-evenly g-0">
                                                                    <div className="col-lg-4 d-flex align-items-start">
                                                                        <img src={shows.img} className="img-fluid m-0 p-0" alt="..."/>
                                                                    </div>
                                                                    <div className="col-lg-7">
                                                                        <div className="card-body">
                                                                            <NavLink to="/tickets">
                                                                                <h3 className="underline card-title" style={{fontWeight: 'bold'}}>{shows.title}</h3>
                                                                            </NavLink>
                                                                            <h4 className="card-date">{shows.date}</h4>
                                                                            <hr/>
                                                                            <p className="card-text fs-5">"{shows.synopsis}"</p>
                                                                            <p className="card-text fs-5 py-2" style={{fontStyle: 'italic'}}>{shows.age}</p>
                                                                            <p className="card-text fs-5" style={{fontWeight: 'bold', lineHeight: '1.3'}}>Champagne Opening: <br/><span style={{fontWeight: 'normal'}}>{shows.champagne}</span></p>
                                                                            <p className="card-text fs-5" style={{fontWeight: 'bold', lineHeight: '1.3'}}>ASL / Open-Caption: <br/><span style={{fontWeight: 'normal'}}>{shows.asl}</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <>
                                                            <div key={shows.id} className="card col-12 mb-5 py-5" >
                                                                <div className="row d-flex justify-content-evenly g-0">
                                                                    <div className="col-12 col-lg-4 d-flex align-items-start">
                                                                        <img src={shows.img} className="img-fluid m-0 p-0" alt="..."/>
                                                                    </div>
                                                                    <div className="col-12 col-lg-7">
                                                                        <div className=" card-body">
                                                                            <NavLink to="/tickets">
                                                                                <h3 className="underline card-title" style={{fontWeight: 'bold'}}>{shows.title}</h3>
                                                                            </NavLink>
                                                                            <h4 className="card-date">{shows.date}</h4>
                                                                            <hr/>
                                                                            <p className="card-text fs-5">"{shows.synopsis}"</p>
                                                                            <p className="card-text fs-5" style={{fontStyle: 'italic'}}><small className="text-muted">{shows.age}</small></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            })
                                        }
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* SEASON PASSES */}
                        <div className="sp-accordion accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h2>SEASON PASS</h2>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse text-center" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                {/* UNO */}
                                <div className="row d-flex justify-content-evenly align-items-center">
                                    <div className="col-lg-12 col-xl-5 accordion-body mb-4">
                                        <div className="card bg-dark ">
                                            <img src={pro1} className="ticket card-img rounded-0 rounded-3" alt="..."/>
                                            <div className="card-img-overlay flex-column d-flex align-items-center justify-content-center text-white">
                                                <NavLink to='/tickets/'>
                                                    <h1 className="underline card-title">UNO</h1>
                                                </NavLink>
                                                <p className="mx-2">Single Pass (1): <span> $75</span></p>
                                                <p className="mx-2 fs-5" style={{fontStyle: 'italic'}}>Valued at $100*</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* DOS */}
                                    <div className="col-lg-12 col-xl-5 accordion-body mb-4">
                                        <div className="card bg-dark ">
                                            <img src={pro1} className="ticket card-img rounded-0 rounded-3" alt="..."/>
                                            <div className="card-img-overlay flex-column d-flex align-items-center justify-content-center text-white">
                                                <NavLink>
                                                    <h1 className="underline card-title">DOS</h1>
                                                </NavLink>
                                                <p className="mx-2">Two Passes (2): <span> $75</span></p>
                                                <p className="mx-2 fs-5" style={{fontStyle: 'italic'}}>Valued at $100*</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* TRES */}
                                    <div className="col-lg-12 col-xl-5 accordion-body mb-4">
                                        <div className="card bg-dark ">
                                            <img src={pro1} className="ticket card-img rounded-0 rounded-3" alt="..."/>
                                            <div className="card-img-overlay flex-column d-flex align-items-center justify-content-center text-white">
                                                <NavLink to='/tickets/'>
                                                    <h1 className="underline card-title">TRES</h1>
                                                </NavLink>
                                                <p className="mx-2">Three Passes (3): <span> $75</span></p>
                                                <p className="mx-2 fs-5" style={{fontStyle: 'italic'}}>Valued at $100*</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* QUATRO */}
                                    <div className="col-lg-12 col-xl-5 accordion-body mb-4">
                                        <div className="card bg-dark ">
                                            <img src={pro1} className="ticket card-img rounded-0 rounded-3" alt="..."/>
                                            <div className="card-img-overlay flex-column d-flex align-items-center justify-content-center text-white">
                                                <NavLink to='/tickets/'>
                                                    <h1 className="underline card-title">QUATRO</h1>
                                                </NavLink>
                                                <p className="mx-2">Four Passes (4): <span> $75</span></p>
                                                <p className="mx-2 fs-5" style={{fontStyle: 'italic'}}>Valued at $100*</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* KEYS */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h2>MEMBERSHIP</h2>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <div className="row d-flex justify-content-center align-items-start">
                                {
                                    keys.map((key, index) => {
                                        return (
                                            <>
                                            <div key={index} className="col-md-10 col-xl-6 col-xxl-3">
                                                <div className="card bg-dark text-center m-2 pt-3">
                                                    <div className="card-title pt-3">
                                                        <i className="card-img bi bi-gem px-3" style={{color: key.color}}></i>
                                                        <h1 className='card-img-overlay key-name text-white mt-4'>
                                                           {key.name.toUpperCase()}
                                                        </h1> 
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className="text-white fs-6" style={{fontStyle: 'italic'}}>${key.amount} value for ${key.price}</h4>
                                                        <NavLink to='/tickets/' className="stretched-link"/>
                                                    </div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 my-2 py-2"></div>            
        </>
    )
}