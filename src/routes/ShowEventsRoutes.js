import { Route, Routes } from "react-router-dom";
import { ShowsEvents } from '../pages/SHOWS/ShowsEvents';
import { CurrentSeason } from "../pages/SHOWS/CurrentSeason";
import { ComingSoon } from '../pages/SHOWS/ComingSoon';
import { SeasonPass } from '../pages/SHOWS/SeasonPass';
import { Subscribe } from '../pages/SHOWS/Subscribe';
import { Discounts } from '../pages/SHOWS/Discounts';
import { Calendar } from '../pages/SHOWS/Calendar';
import StartToTop from "../utils/StartToTop";

export default function ShowsEventsRoutes() {
    return (
        <>
            <StartToTop />
            <Routes>
                <Route index element={<ShowsEvents />} />
                <Route path='current-season' element={<CurrentSeason />} />
                <Route path='coming-soon' element={<ComingSoon />} />
                <Route path='season-pass' element={<SeasonPass />} />
                <Route path='subscribe' element={<Subscribe />} />
                <Route path='discounts' element={<Discounts />} />
                <Route path='calendar' element={<Calendar />} />
            </Routes>
        </>
    )
} 