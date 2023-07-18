import "../../assets/styles/SeasonPass.css"
import Banner from '../../components/Banner';
import Uhoh from '../../components/Uh-oh';
import pro1 from '../../assets/images/photo2.jpg'

export function SeasonPass() {
    return (
        <>
            <div className="season page">
                {/* Banner */}
                <Banner title={"Season Pass"}/>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col col-sm-10 col-md-8 col-lg-7 d-flex justify-content-center p-5">
                            <div className="card mb-3" style={{maxWidth: 1040}}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={pro1} className="img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-md-4" >
                                        <div className="card-body d-flex flex-column justify-content-between" style={{height: 337}}>
                                            <h2 className="card-title">Un Pass<span className="pass-number">(1)</span></h2>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <div className="card-body d-flex align-items-center justify-content-center bg-dark price"style={{height: 337}}>
                                            <h1 className="card-title price">$<span>25</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-10 col-md-8 col-lg-7 d-flex justify-content-center p-5">
                            <div className="card mb-3" style={{maxWidth: 1040, height: 337}}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={pro1} className="img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-md-4" >
                                        <div className="card-body d-flex flex-column justify-content-between" style={{height: 337}}>
                                            <h2 className="card-title">Dos Passes<span className="pass-number">(2)</span></h2>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <div className="card-body d-flex align-items-center justify-content-center bg-dark price"style={{height: 337}}>
                                            <h1 className="card-title price">$<span>50</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-10 col-md-8 col-lg-7 d-flex justify-content-center p-5">
                            <div className="card mb-3" style={{maxWidth: 1040, height: 337}}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={pro1} className="img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-md-4" >
                                        <div className="card-body d-flex flex-column justify-content-between" style={{height: 337}}>
                                            <h2 className="card-title">Tres Passes<span className="pass-number">(3)</span></h2>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <div className="card-body d-flex align-items-center justify-content-center bg-dark price"style={{height: 337}}>
                                            <h1 className="card-title price">$<span>75</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-10 col-md-8 col-lg-7 d-flex justify-content-center p-5">
                            <div className="card mb-3" style={{maxWidth: 1040, height: 337}}>
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img src={pro1} className="img-fluid rounded-0" alt="..."/>
                                    </div>
                                    <div className="col-md-4" >
                                        <div className="card-body d-flex flex-column justify-content-between" style={{height: 337}}>
                                            <h2 className="card-title">Quatro Passes<span className="pass-number">(4)</span></h2>
                                            <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-center align-items-center">
                                        <div className="card-body d-flex align-items-center justify-content-center bg-dark price"style={{height: 337}}>
                                            <h1 className="card-title price">$<span>100</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Uhoh />
            </div>
        </>
    ) 
}