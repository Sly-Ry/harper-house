// import '../assets/styles/Contact;

export function Contact() {
    return (
        <>
            <div className="contact bg-white">
                <div className="col-12 my-5 py-5" style={{backgroundColor: 'rgba(114, 0, 0, 0.911)'}}></div>
                <div className="row d-flex justify-content-center">
                    <h1 className="text-center fs-1">Contact Us</h1>
                    <div className="col-10 col-lg-6 p-5">
                        <h4>Box Office Information</h4>
                        <h5 style={{fontWeight: 'bold'}}>
                            Box Office Phone Hours (###) ###-#### 
                            <br/> 
                            Monday - Friday, 10:00AM - 7:00PM
                            <br/>
                            Central Time
                        </h5>
                        <br/>
                        <h5>Additionally, offices will be closed on the following evenings: 1/18, 6/09, 8/10, 9/27 & 10/04</h5>
                        <br/>
                        <h5 style={{fontWeight: 'bold'}}>Please take a moment to fill out the form below. Thank you again for your interest and we look forward to hearing from you!</h5>
                        <br/>
                        <br/>
                        <br/>
                        <form>
                            <h4>Contact Form</h4>
                            {/* dropdown Question Type */}
                            <h6>Department <span>*</span></h6>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Human Resources</option>
                                <option value="1">Feild Trips</option>
                                <option value="2">Donation Request</option>
                                <option value="4">Production</option>
                                <option value="5">Marketing</option>
                                <option value="6">Faculty Rentals</option>
                                <option value="7">Volunteering</option>
                                <option value="8">General Management</option>
                                <option value="9">Ticketing</option>
                                <option value="10">Finance</option>
                                <option value="11">Development</option>
                            </select>
                            <h6 className="py-3" style={{fontWeight: 'bold'}}>Please select the department you'd like to contact from the drop-down menu above, and then leave a message using the form below.</h6>
                            {/* Name */}
                            <div className="mb-3">
                                <label for="nameInput" className="form-label">Name <span>*</span></label>
                                <input type="email" className="form-control" id="nameInput" placeholder="Bebe Beans" required/>
                            </div>
                            {/* Email */}
                            <div className="mb-3">
                                <label for="emailInput" className="form-label">Email <span>*</span></label>
                                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required/>
                            </div>
                            {/* Subject */}
                            <div className="mb-3">
                                <label for="emailInput" className="form-label">Subject <span>*</span></label>
                                <input type="email" className="form-control" id="emailInput" required/>
                            </div>
                            {/* Message */}
                            <div className="mb-3">
                                <label for="harperMessageBox" className="form-label">Message <span>*</span></label>
                                <textarea className="form-control" id="harperMessageBox" rows="5" required></textarea>
                            </div>
                            {/* Feature: Spambot */}
                            {/* Submit Button */}
                            <div>
                                <button type="button" className="btn btn-outline-danger btn-lg">Submit</button>
                            </div>
                            <br/>
                        </form>
                    </div>
                    <div className="col-10 col-lg-4 p-5">
                        <h3 className="mb-5" style={{fontWeight: 'bold'}}>Questions?</h3>
                        <div className="card p-3">
                            <p>Due to the voume of form submissions, response times may vary. Please allow us time to respond.
                                <br/>
                                <br/>
                                Thank you for your patience on this matter.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 my-2 py-2"></div>
            </div>
        </>
    ) 
}