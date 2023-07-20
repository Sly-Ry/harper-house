import "../../assets/styles/SeasonPass.css"
import Banner from '../../components/Banner';
import pro1 from '../../assets/images/photo2.jpg'
import { NavLink } from "react-router-dom";

export function SeasonPass() {
    return (
        <>
            <div className="season page">
                {/* Banner */}
                <Banner title={"Season Pass"}/>
                <div className="container-fluid">
                        {/* SINGLE PASS */}
                    <div className="row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center p-5">
                            <div className="card mb-3 bg-dark">
                                <div className="row g-0">
                                    <div className="col-0 col-xxl-5">
                                        <img src={pro1} className="ticket img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-xxl-4" >
                                        <div className="card-body d-flex flex-column" style={{height: 337}}>
                                            <h3 className="pass-number mx-2">Single Pass (1)</h3>
                                            <h2 className="card-title d-flex justify-content-center">UNO</h2>
                                        </div>
                                    </div>
                                    <div className="ticket-price col-12 col-sm-12 col-md-4 col-xxl-3">
                                        <NavLink href="/tickets/season-pass/uno" className="stretched-link">
                                            <div className="ticket-body card-body d-flex flex-column align-items-center justify-content-center bg-dark price" style={{height: 337}}>
                                                <h1 className="card-title price px-4">$<span>75</span></h1>
                                                <p className="card-text">click to buy*</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* TWO PASS */}
                    <div className="row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center p-5">
                            <div className="card mb-3 bg-dark">
                                <div className="row g-0">
                                    <div className="col-0 col-xxl-5">
                                        <img src={pro1} className="ticket img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-xxl-4" >
                                        <div className="card-body d-flex flex-column" style={{height: 337}}>
                                            <h3 className="pass-number mx-2">Two Passes (2)</h3>
                                            <h2 className="card-title d-flex justify-content-center">DOS</h2>
                                        </div>
                                    </div>
                                    <div className="ticket-price col-12 col-sm-12 col-md-4 col-xxl-3">
                                        <NavLink href="/tickets/season-pass/uno" className="stretched-link">
                                            <div className="ticket-body card-body d-flex flex-column align-items-center justify-content-center bg-dark price" style={{height: 337}}>
                                                <h1 className="card-title price px-4">$<span>145</span></h1>
                                                <p className="card-text">click to buy*</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* THREE PASS */}
                    <div className="row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center p-5">
                            <div className="card mb-3 bg-dark">
                                <div className="row g-0">
                                    <div className="col-0 col-xxl-5">
                                        <img src={pro1} className="ticket img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-xxl-4" >
                                        <div className="card-body d-flex flex-column" style={{height: 337}}>
                                            <h3 className="pass-number mx-2">Three Passes (3)</h3>
                                            <h2 className="card-title d-flex justify-content-center">TRES</h2>
                                        </div>
                                    </div>
                                    <div className="ticket-price col-12 col-sm-12 col-md-4 col-xxl-3">
                                        <NavLink href="/tickets/season-pass/uno" className="stretched-link">
                                            <div className="ticket-body card-body d-flex flex-column align-items-center justify-content-center bg-dark price" style={{height: 337}}>
                                                <h1 className="card-title price px-4">$<span>215</span></h1>
                                                <p className="card-text">click to buy*</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        {/* FOUR PASS */}
                    <div className="row d-flex justify-content-center">
                        <div className="col d-flex justify-content-center p-5">
                            <div className="card mb-3 bg-dark">
                                <div className="row g-0">
                                    <div className="col-0 col-xxl-5">
                                        <img src={pro1} className="ticket img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-8 col-xxl-4" >
                                        <div className="card-body d-flex flex-column" style={{height: 337}}>
                                            <h3 className="pass-number mx-2">Four Passes (4)</h3>
                                            <h2 className="card-4 card-title d-flex justify-content-center">QUATRO</h2>
                                        </div>
                                    </div>
                                    <div className="ticket-price col-12 col-sm-12 col-md-4 col-xxl-3">
                                        <NavLink href="/tickets/season-pass/uno" className="stretched-link">
                                            <div className="ticket-body card-body d-flex flex-column align-items-center justify-content-center bg-dark price" style={{height: 337}}>
                                                <h1 className="card-title price px-4">$<span>285</span></h1>
                                                <p className="card-text">click to buy*</p>
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End of Pass */}
                </div>
            </div>
        </>
    ) 
}