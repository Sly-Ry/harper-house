import { Routes, Route } from "react-router-dom";
import { Support } from '../pages/SUPPORT/Support';
// import { Offering } from './pages/Offering';
// import { How-To } from './pages/How-To';
// import { Membership } from './pages/Membership';
// import { Sponsorship } from './pages/Sponsorship';
// import { Community } from './pages/Community';
// import { Corporate } from './pages/Corporate';
// import { Individual } from './pages/Individual';
import { Donate } from '../pages/SUPPORT/Donate';

export default function SupportRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Support />} />
                {/* <Route exact path='offering'>
                    <Route index element={<Offering />} />
                    <Route path='how-to' element={<HowTo />} />
                    <Route path='membership' element={<Membership />} />
                </Route>
                <Route exact path='sponsorship'>
                    <Route index element={<Sponsorhip />} />
                    <Route path='community' element={<Community />} />
                    <Route path='corporate' element={<Corporate />} />
                    <Route path='individual' element={<Individual />} />
                </Route>*/}
                <Route path='donate' element={<Donate />} /> 
            </Routes>
        </>
    )
}