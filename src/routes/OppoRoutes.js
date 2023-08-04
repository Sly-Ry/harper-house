import { Routes, Route, NavLink } from "react-router-dom";
import { Oppo } from '../pages/OPPO/Oppo';
import { Auditions } from '../pages/OPPO/Auditions';
import { Internships } from '../pages/OPPO/Internships';
import { Volunteer } from '../pages/OPPO/Volunteer';
import { Rentals } from '../pages/OPPO/Rentals';

import CustomBanner from "../components/CustomBanner";
import archiveBackground from '../assets/images/join-team.jpg'
import { navItems } from "../data/NavItems";

export default function OppoRoutes() {
    return (
        <>
            <CustomBanner title={"Opportunity"} background={archiveBackground} mxh={'90vh'}/>
            <div className="archive-routes container-fluid page">
                <div className="row">
                    <div className="col-12 col-lg-12 col-xl-3 p-5">
                        <nav className="nav flex-column">
                            <NavLink to='/oppo' className="arch-nav py-5 fs-4 text-white">Working At Harper</NavLink>
                            {
                                navItems.map(items => {
                                    if (items.title === 'OPPORTUNITY') {
                                        return (
                                            <>
                                                {   
                                                    items.submenu.map(item => {
                                                        return (
                                                            <NavLink 
                                                                key={item.id}
                                                                to={item.path} 
                                                                className="supp-nav py-2 fs-6 text-white" 
                                                            >
                                                                {item.title}
                                                            </NavLink>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    }
                                    else {
                                        return null;
                                    }
                                })
                            }
                        </nav>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-6 p-5 bg-white">
                        <Routes>
                            <Route index element={<Oppo />} />
                            <Route path='auditions' element={<Auditions />} />
                            <Route path='internships' element={<Internships />} />
                            <Route path='volunteer' element={<Volunteer />} />
                            <Route path='rentals' element={<Rentals />} />
                        </Routes>
                    </div>
                    <div className="col-lg-12 col-xl-3 d-flex justify-content-center align-items-start py-3">
                        <div className="card w-75 text-center">
                            <div className="card-body member">
                                <h5>SERVING MANAGER</h5>
                                <h1 className='text-dark'>Walter White</h1>
                                <p>1234@email.com</p>
                                <p>(###) ###-####</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 