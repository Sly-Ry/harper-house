export function Donate() {
    return (
        <>
            <div className="donate">
                {/* Banner */}
                <h1 className="text-center">Make A Donation Today!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est at assumenda veniam error aut aliquid, officiis, blanditiis minus, quos non doloremque labore eum magnam dolor quidem ea unde repudiandae. Rem.</p>
                <form className="row g-3 my-4 border rounded-1 text-center">
                    <div className="col-md-12 text-start">
                        <h3 style={{fontWeight: 'bold'}}>Select a Donation Amount</h3>
                    </div>
                    <div className="col-lg-3 p-3">
                        <button type="button" class="btn btn-lg btn-outline-dark fs-3 w-100" style={{fontStyle: 'italic'}}>$25</button>
                    </div>
                    <div className="col-lg-3 p-3">
                        <button type="button" class="btn btn-lg btn-outline-dark fs-3 w-100" style={{fontStyle: 'italic'}}>$50</button>
                    </div>
                    <div className="col-lg-3 p-3">
                        <button type="button" class="btn btn-lg btn-outline-dark fs-3  w-100" style={{fontStyle: 'italic'}}>$100</button>
                    </div>
                    <div className="col-lg-3 p-3">
                        <button 
                            type="button" 
                            className="accordion btn btn-lg btn-outline-dark fs-3 w-100"
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                            style={{fontStyle: 'italic'}}
                        >
                            Other
                        </button>
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse col-lg-12 text-start px-5" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-bodytext-start mb-4">
                            <h6>Amount</h6>
                            <div className="row">
                                <div className="col-12">
                                    <div className="input-group">
                                        <div className="input-group-text">$</div>
                                        <input type="text" className="form-control my-2" id="autoSizingInputGroup" placeholder="1.00" required/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="contact-form">
                    <div className="form-title">
                        <h3 style={{fontWeight: 'bold'}}>Contact Information</h3>
                        <h5>Where should we send your order confirmation email?</h5>
                    </div>
                    <form className="row g-3 m-3 border rounded-1 p-4">
                        <div className="col-lg-6">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="firstName" className="fs-5">FIRST NAME</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="firstName" placeholder="Sebastion" required/>
                        </div>
                        <div className="col-lg-6">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="lastName" className="fs-5">LAST NAME</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="lastName" placeholder="McMillington" required/>
                        </div>
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="email" className="fs-5">EMAIL</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="email" placeholder="email@example.com" required/>
                        </div>
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="phone" className="fs-5">PHONE</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="phoneNumber" placeholder="###-###-####"/>
                        </div>
                    </form>
                </div>
                <div className="contact-form">
                    <div className="form-title">
                        <h3 style={{fontWeight: 'bold'}}>Billing Information</h3>
                        <h5>Please provide your billing address.</h5>
                    </div>
                    <form className="row g-3 m-3 border rounded-1 p-4">
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="address" className="fs-5">ADDRESS</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="address" required/>
                            <input type="text" className="form-control my-2" id="address"/>
                        </div>
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="city" className="fs-5">CITY</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="city" required/>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="country" className="fs-5">COUNTRY</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="country" placeholder="USA" required/>
                        </div>
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="stateProv" className="fs-5">STATE/PROVIDENCE</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="stateProv" placeholder="Select" required/>
                        </div>
                        <div className="col-lg-12">
                            <div className="labels d-flex flex-row align-items-center justify-content-between">
                                <label htmlFor="postalCode" className="fs-5">POSTAL CODE</label>
                                <label className="px-5">required</label>
                            </div>
                            <input type="text" className="form-control my-2" id="postalCode" required/>
                        </div>
                    </form>
                </div>
                <div className="col-lg-12 d-flex flex-row mx-3 ">
                    <button type="submit" className="btn border-dark text-danger">DONATE</button>
                    <h2 className="mx-2">$100.00</h2>
                </div>
            </div>
        </>
    ) 
}