import JumbotronLayout from '../layout/JumbotronLayout'
import UpcomingLayout from '../layout/UpcomingLayout'
import ExtensionsLayout from '../layout/ExtensionsLayout'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/styles/Home.css'
import { NavLink } from 'react-router-dom';
import StartToTop from '../utils/StartToTop.js'

export function Home() {    

    return (
        <>
            <div className="home">
                <StartToTop />
                <JumbotronLayout />
                <UpcomingLayout />
                <ExtensionsLayout />
                <div className="home-donate container-fluid py-5 bg-dark">
                    <div className="row">
                        <div className="col d-flex flex-column align-items-center text-center text-white">
                            <h1>MAKE A DONATION</h1>
                            <NavLink to="/support/donate" className="my-5">
                                <h2>DONATE</h2>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}
