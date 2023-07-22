import '../../assets/styles/Tours.css'
import Banner from '../../components/Banner';

export function Tours() {
    return (
        <>
            <div className="tours">
                {/* Banner */}
                <Banner title={"Tours"}/>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 col-xl-5 d-flex justify-content-evenly align-items-center">
                            <div className="card py-5" style={{width: '100%'}}>
                                <div className="card-body">
                                    <h1 className="card-title">SCHEDULE A TOUR</h1>
                                    <div className="card-info p-2">
                                        <p>Please contact our Serving Groundskeeper to schedule a tour through the House. You're more than welcome.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi pariatur laudantium porro illo non. Quisquam magni quos beatae distinctio, dolor animi reiciendis esse expedita perspiciatis, accusantium deserunt voluptates dolorem! Expedita!</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-xl-4 d-flex justify-content-evenly align-items-center">
                            <div className="card p-5 text-center">
                                <div className="card-body member">
                                    <h4>SERVING GROUNDSKEEPER</h4>
                                    <h2>Bilbo Baggins</h2>
                                    <p>1234@email.com</p>
                                    <p>(###) ###-####</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}