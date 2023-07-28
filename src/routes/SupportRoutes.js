import { Routes, Route, NavLink } from "react-router-dom";
import { Support } from '../pages/SUPPORT/Support';
// import { Offering } from '../pages/SUPPORT/Offering';
// import { HowTo } from '../pages/SUPPORT/How-To';
import { Membership } from '../pages/SUPPORT/Membership';
import { Sponsorship } from '../pages/SUPPORT/Sponsorship';
// import { Community } from '../pages/SUPPORT/Community';
// import { Corporate } from '../pages/SUPPORT/Corporate';
// import { Individual } from '../pages/SUPPORT/Individual';

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
                            {/* <Route exact path='offering'> */}
                                {/* <Route index element={<Offering />} />
                                <Route path='how-to' element={<HowTo />} />
                            {/* </Route> */}
                            <Route exact path='/sponsorship'>
                                <Route index element={<Sponsorship />} />
                                {/* <Route path='community' element={<Community />} />
                                <Route path='corporate' element={<Corporate />} />
                                <Route path='individual' element={<Individual />} /> */}
                            </Route>
                            <Route path='donate' element={<Donate />} /> 
                        </Routes>
                    </div>
                    <div className="col-lg-12 col-xl-3 d-flex justify-content-center align-items-center py-3">
                        <div className="card p-5 text-center">
                            <div className="card-body member">
                                <h4>SERVING TREASURER</h4>
                                <h2>Jill Valentine</h2>
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