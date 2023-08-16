import { Routes, Route } from 'react-router-dom';
import { Visiting } from '../pages/VISIT/Visit';
import { Venues } from '../pages/VISIT/VENUES/Venues';
import { TheRedDeck } from '../pages/VISIT/VENUES/TheRedDeck';
import { TheGallery } from '../pages/VISIT/VENUES/TheGallery';
import { Parking } from '../pages/VISIT/Parking';
import { Tours } from '../pages/VISIT/Tours';
import { Accessibility } from '../pages/VISIT/Accessibility';
import StartToTop from '../utils/StartToTop';
import Banner from '../components/Banner';

export default function VisitingRoutes() {
    return (
        <>
            <StartToTop />
            <Banner title={"Visiting"}/>
            <div className="container-fluid page bg-white">
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
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center py-3 page">
                        <div className="card w-50 text-center">
                            <div className="card-body member">
                                <h5>SERVING GROUNDSKEEPER</h5>
                                <h1 className='text-dark'>Bilbo Baggins</h1>
                                <p>1234@email.com</p>
                                <p>(###) ###-####</p>
                            </div>
                        </div>
            </div>
        </>
    )
} 