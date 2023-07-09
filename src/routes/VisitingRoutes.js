import { Routes, Route } from 'react-router-dom';
import { Visiting } from '../pages/Visit';
// import { Venues } from './pages/Venues';
// import { TheRedDeck } from './pages/TheRedDeck';
// import { TheGallery } from './pages/TheGallery';
// import { Parking } from './pages/Parking';
// import { Tours } from './pages/Tours';
// import { Accessibility } from './pages/Accessibility';

export default function VisitingRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Visiting />} />
                {/* <Route  path='the-red-deck' element={<TheRedDeck />} />
                <Route path='venues' >
                <Route index element={<Venues />} />
                <Route path='the-gallery' element={<TheGallery />} />
                <Route path='documents' element={<Documents />} />
                </Route>
                <Route path='parking' element={<Parking />} />
                <Route path='tours' element={<Tours />} />
                <Route path='accessibility' element={<Accessibility />} />
                <Route path='faq' element={<FAQ />} /> */}
            </Routes>
        </>
    )
} 