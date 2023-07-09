import { Routes, Route } from "react-router-dom";
import { About } from '../pages/About';
// import { TheTheatre } from './pages/TheTheatre';
// import { AboutHarper } from './pages/AboutHarper';
// import { History } from './pages/History';
// import { Diversity } from './pages/Diversity';
// import { TheTeam } from './pages/TheTeam';
// import { Leadership } from './pages/Leadership';
// import { Staff } from './pages/Staff';
// import { Board } from './pages/Board';
// import { Contact } from './pages/Contact';
// import { FAQ } from './pages/FAQ';

export default function AboutRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<About />} />
                {/* <Route path='the-theatre' >
                    <Route index element={<TheTheatre />} />
                    <Route path='about-us' element={<AboutHarper />} />
                    <Route path='history' element={<History />} />
                    <Route path='diversity' element={<Diversity />} />
                </Route>
                <Route path='the-team'>
                    <Route index element={<TheTeam />} />
                    <Route path='leadership' element={<Leadership />} />
                    <Route path='staff' element={<Staff />} />
                    <Route path='board' element={<Board />} />
                </Route>
                <Route path='faq' element={<FAQ />} />
                <Route path='contact' element={<Contact />} /> */}
            </Routes>
        </>
    )
} 