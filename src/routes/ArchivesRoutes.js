import { Routes, Route } from 'react-router-dom';
import { Archives } from '../pages/ARCHIVES/Archive';
// import { Seasons } from '../page/ARCHIVE/Seasons';


// import { Videos } from '../pages/ARCHIVES/Videos';
// import { Photos } from '../pages/ARCHIVES/Photos';
// import { Documents } from '../pages/ARCHIVES/Documents';
// import { SeasonLayout } from '../layout/SeasonLayout';

export default function ArchivesRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Archives />} />
                {/* <Route path='/videos' element={<SeasonLayout />}>
                    <Route index element={<Videos />} />
                    <Route path=':id' element={<Videos />} />
                </Route>
                <Route path='photos' element={<Photos />} />
                <Route path='documents' element={<Documents />} /> */}
            </Routes>
        </>
    )
} 