import JumbotronLayout from '../layout/JumbotronLayout'
import UpcomingLayout from '../layout/UpcomingLayout'
import ExtensionsLayout from '../layout/ExtensionsLayout'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/styles/Home.css'
import { useEffect, useState } from 'react';

// import subscribePhoto from '../assets/images/subscribe.jpg'
// import joinPhoto from '../assets/images/join-team.jpg'




export function Home() {

    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        
        function scrollFunction() {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } 
            else {
                setBackToTop(false);
            }
        }
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className="home">
            {/* Back to top button */}
            {backToTop && (  
                <button
                    type="button"
                    className="btn btn-danger btn-floating btn-lg"
                    id="btn-back-to-top"
                    onClick={scrollUp}
                >
                    <i class="fas fa-arrow-up"></i>
                </button>
            )}
                <JumbotronLayout />
                <UpcomingLayout />
                <ExtensionsLayout />
                {/* Future feature: Donate */}
                <div className="footer container-fluid py-5">
                    <div className="
                        row
                        py-5
                        d-flex
                        justify-content-center
                        align-items-start
                        fs-6"
                    >

                        <div className="
                            col-3 
                            d-flex
                            justify-content-start"
                        >
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-header">
                                    <h5>T'BOX OFFICE HOURS</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Monday - Sunday, <span>10PM</span> - <span>5PM</span></li>
                                    <li className="list-group-item ">Join our <span className='newsletter'>Newsletter</span>!</li>
                                </ul>
                            </div>
                        </div>
                        <div className="
                            col-3
                            d-flex
                            justify-content-center"
                        >
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-header">
                                    <h5>CONTACT</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Email Us</li>
                                    <li className="list-group-item">(###) ###-####</li>
                                    {/* FEATURE: HOME ADDRESS */}
                                    {/* <li className="list-group-item">Street Adress</li> */}
                                    <div className="icons fs-4">
                                        <i className="bi bi-facebook"></i>
                                        <i className="bi bi-twitter"></i>
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="
                            col-3
                            d-flex
                            justify-content-end"
                        >
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-header">
                                    <h5>YEARLY SPONSORS</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Sponsor 1</li>
                                    <li className="list-group-item">Support 2</li>
                                    <li className="list-group-item">Sponsor 3</li>
                                    <li className="list-group-item">Support 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}
