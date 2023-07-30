import { Routes, Route, NavLink } from "react-router-dom";
import { Support } from '../pages/SUPPORT/Support';
import { Membership } from '../pages/SUPPORT/Membership';
import { Sponsorship } from '../pages/SUPPORT/Sponsorship';
import { Donate } from '../pages/SUPPORT/Donate';

import CustomBanner from "../components/CustomBanner";
import archiveBackground from '../assets/images/support.jpg'
import { navItems } from "../data/NavItems";

import '../assets/styles/Support.css'

export default function SupportRoutes() {
    return (
        <>
            <CustomBanner title={"Support Us"} background={archiveBackground}/>
            <div className="archive-routes container-fluid page">
                <div className="row">
                    <div className="col-12 col-lg-12 col-xl-3 p-5">
                        <nav className="nav flex-column">
                            <NavLink to='/support' className="arch-nav py-5 fs-4 text-white">Support</NavLink>
                            {
                                navItems.map(items => {
                                    if (items.title === 'SUPPORT US') {
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
                            <Route index element={<Support />} />
                            <Route path='membership' element={<Membership />} />
                            <Route path='/sponsorship'element={<Sponsorship />} />
                            <Route path='donate' element={<Donate />} /> 
                        </Routes>
                    </div>
                    <div className="col-lg-12 col-xl-3 d-flex justify-content-center align-items-center py-3">
                    <div className="card w-75 text-center">
                            <div className="card-body member">
                                <h5>SERVING TREASURER</h5>
                                <h1 className='text-dark'>Jill Valentine</h1>
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