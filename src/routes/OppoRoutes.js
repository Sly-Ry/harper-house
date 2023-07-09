import { Routes, Route } from "react-router-dom";
import { Oppo } from '../pages/Oppo';
// import { WorkingAt } from './pages/WorkingAt';
// import { Auditions } from './pages/Auditions';
// import { Internships } from './pages/Internships';
// import { Volunteer } from './pages/Volunteer';
// import { Rentals } from './pages/Rentals';

export default function OppoRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Oppo />} />
                {/* <Route path='work-at' element={<WorkAt />} />
                <Route path='auditions' element={<Auditions />} />
                <Route path='internships' element={<Internships />} />
                <Route path='volunteer' element={<Volunteer />} />
                <Route path='rentals' element={<Rentals />} /> */}
            </Routes>
        </>
    )
} 