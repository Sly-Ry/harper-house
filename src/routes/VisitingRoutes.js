import { Routes, Route } from 'react-router-dom';
import { Visiting } from '../pages/VISIT/Visit';
import { Venues } from '../pages/VISIT/VENUES/Venues';
import { TheRedDeck } from '../pages/VISIT/VENUES/TheRedDeck';
import { TheGallery } from '../pages/VISIT/VENUES/TheGallery';
import { Parking } from '../pages/VISIT/Parking';
import { Tours } from '../pages/VISIT/Tours';
import { Accessibility } from '../pages/VISIT/Accessibility';

export default function VisitingRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Visiting />} />
                <Route path='venues' >
                <Route index element={<Venues />} />
                    <Route path='the-red-deck' element={<TheRedDeck />} />
                    <Route path='the-gallery' element={<TheGallery />} />
                </Route>
                <Route path='parking' element={<Parking />} />
                <Route path='tours' element={<Tours />} />
                <Route path='accessibility' element={<Accessibility />} />
            </Routes>
        </>
    )
} 