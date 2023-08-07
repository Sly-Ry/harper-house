import { Routes, Route } from "react-router-dom";
import { About } from '../pages/ABOUT/About';
import { TheTheatre } from '../pages/ABOUT/TheTheatre';
import { History } from '../pages/ABOUT/History';
import { Diversity } from '../pages/ABOUT/Diversity';
import { TheTeam } from '../pages/ABOUT/TheTeam';
import { Leadership } from '../pages/ABOUT/Leadership.js';
import { Staff } from '../pages/ABOUT/Staff';
import { Board } from '../pages/ABOUT/Board';
import { Contact } from '../pages/ABOUT/Contact';
import { FAQ } from '../pages/ABOUT/FAQ';


export default function AboutRoutes() {
    return (
        <>
            <div className="about-pages container-fluid page">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 p-0">
                        <Routes>
                            <Route index element={<About />} />
                            <Route path='the-theatre/*' >
                                <Route index element={<TheTheatre />} />
                                <Route path='history' element={<History />} />
                                <Route path='diversity' element={<Diversity />} />
                            </Route>
                            <Route path='the-team/*'>
                                <Route index element={<TheTeam />} />
                                <Route path='leadership' element={<Leadership />} />
                                <Route path='staff' element={<Staff />} />
                                <Route path='board' element={<Board />} />
                            </Route>
                            <Route path='faq' element={<FAQ />} />
                            <Route path='contact' element={<Contact />} />
                        </Routes>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
        </>
    )
} 