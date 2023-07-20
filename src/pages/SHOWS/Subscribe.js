import '../../assets/styles/Subscribe.css'
import Banner from '../../components/Banner';

export function Subscribe() {
    return (
        <>
            <div className="subscribe page">
                {/* Banner */}
                <Banner title={"Subscribe"}/>
                <div className="container-fluid">
                    <row className="row d-flex justify-content-center align-items-center">
                        <div className="col col-md-10 col-lg-8 col-xl-5 my-5"> 
                                {/* Input Section */}
                            <section className="row g-3">
                                <div className="subscribe-title text-center">
                                    <h1 className="">Join our Newsletter</h1>
                                    <h6>*To sign up, please fill out the form below and indicate your interest preferences.</h6>
                                </div>
                                <div className="col-md-6">
                                    <label for="firstName" className="form-label">First Name <span>(required)</span></label>
                                    <input type="text" className="form-control" id="firstName" required/>
                                </div>
                                <div className="col-md-6">
                                    <label for="lastName" className="form-label">Last Name <span>(required)</span></label>
                                    <input type="text" className="form-control" id="lastName" required/>
                                </div>
                                <div className="col-12">
                                    <label for="inputEmail" className="form-label">Email <span>(required)</span></label>
                                    <input type="email" className="form-control" id="inputEmail" required/>
                                </div>
                                <div className="col-md-6">
                                    <label for="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                <div className="col-md-4">
                                    <label for="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>State</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label for="inputZip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="inputZip"/>
                                </div>
                                
                            </section>
                                {/* Personalized Checkbox Section*/}
                            <section className="checkbox-section p-4">
                                <div className="checkbox-text text-center">
                                    <h5>Please let us know what you're interested in learning more about:</h5>
                                </div>
                                <div className="row row-cols-2 d-flex justify-content-evenly align-items-center">
                                    <div className="col-3">
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Comedy
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Drama
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Musicals
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Mainstage
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Special Events
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Reader's Theatre
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Open Mic
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Children's Theatre
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Volunteering
                                            </label>
                                        </div>
                                        <div className="form-check py-2">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Membership
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>
                                {/* Submit Section */}
                            <section className='row d-flex justify-content-between align-items-center'>
                                <div className="col-9">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                        <label className="form-check-label" for="gridCheck">
                                            Create an account with this information.
                                        </label>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <button type="submit" className="btn btn-danger">Subscribe</button>
                                </div>
                            </section>
                        </div>
                    </row>
                </div>
            </div>
        </>
    ) 
}