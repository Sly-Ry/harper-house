import { Route, Routes } from "react-router-dom";
import { ShowsEvents } from '../pages/Shows-Events';
// import { CurrentSeason } from './pages/Current-Season';
// import { ComingSoon } from './pages/ComingSoon';
// import { SeasonPass } from './pages/SeasonPass';
// import { Subscribe } from './pages/Subscribe';
// import { Discounts } from './pages/Discounts';
// import { Calendar } from './pages/Calendar';

export default function ShowsEventsRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<ShowsEvents />} />
                {/*  <Route path='current-season' element={<CurrentSeason />} />
                <Route path='coming-soon' element={<ComingSoon />} />
                <Route path='season-pass' element={<SeasonPass />} />
                <Route path='subscribe' element={<Subscribe />} />
                <Route path='discounts' element={<Discounts />} />
                <Route path='calendar' element={<Calendar />} /> */}
            </Routes>
        </>
    )
} 