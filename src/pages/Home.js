import JumbotronLayout from '../layout/JumbotronLayout'
import UpcomingLayout from '../layout/UpcomingLayout'
import ExtensionsLayout from '../layout/ExtensionsLayout'
import "bootstrap-icons/font/bootstrap-icons.css";
import '../assets/styles/Home.css'
import { NavLink } from 'react-router-dom';


export function Home() {    

    return (
        <>
            <div className="home">
                <JumbotronLayout />
                <UpcomingLayout />
                <ExtensionsLayout />
                <div className="container-fluid py-5 bg-dark">
                    <div className="row">
                        <div className="col text-center text-white">
                            <h1>Make a donation!</h1>
                            <button className='btn btn-lg btn-dark'>
                                <NavLink to="support/donate">
                                    Donate
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
                {/* Future feature: Donate */}
            </div>
        </>
    ) 
}
