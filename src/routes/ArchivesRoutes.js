import { Routes, Route } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Archives } from '../pages/ARCHIVES/Archive';

import { Seasons } from '../components/Seasons';
import CustomBanner from "../components/CustomBanner";

import { ArchiveItems } from "../data/ArchiveItems";
import archiveBackground from '../assets/images/photo2.jpg'
import "../assets/styles/Archive.css"

export default function ArchivesRoutes() {
    return (
        <>
            <CustomBanner title={"Archives"} background={archiveBackground}/>
            <div className="archive-routes container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-12 col-xl-3 p-5">
                        <nav className="nav flex-column bg-white">
                            <NavLink to='/archives' className="arch-nav py-2 fs-6">Archives</NavLink>
                            {
                                ArchiveItems.toReversed().map(items => {
                                    return (
                                        <NavLink 
                                        key={items.id}
                                            to={items.path} 
                                            className="arch-nav py-2 fs-6" 
                                        >
                                            S{items.id}: {items.yr} || {items.title}
                                        </NavLink>
                                    )
                                })
                            }
                        </nav>
                    </div>
                    <div className="col-12 col-lg-12 col-xl-7 p-5 bg-danger">
                        <Routes>
                            <Route index element={<Archives />} />
                            <Route path=':id' element={<Seasons />} />
                        </Routes>
                    </div>
                    <div className="col-lg-12 col-xl-2 d-flex justify-content-center align-items-center">
                        <div className="card p-5 text-center">
                            <div className="card-body member">
                                <h4>SERVING LIBRARIAN</h4>
                                <h2>Wilma Flintstone</h2>
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