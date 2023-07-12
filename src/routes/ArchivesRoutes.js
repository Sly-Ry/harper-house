import { Routes, Route } from 'react-router-dom';
import { Archives } from '../pages/ARCHIVES/Archive';
// import { Videos } from './pages/Videos';
// import { Photos } from './pages/Photos';
// import { Documents } from './pages/Documents';

export default function ArchivesRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Archives />} />
                {/* <Route path='videos' element={<Videos />} />
                <Route path='photos' element={<Photos />} />
                <Route path='documents' element={<Documents />} /> */}
            </Routes>
        </>
    )
} 