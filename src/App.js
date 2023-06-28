import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
// import { About } from './pages/About';
// import { Archive } from './pages/Archive';
// import { Contact } from './pages/Contact';
// import { Gallery } from './pages/Gallery';
// import { Oppo } from './pages/Oppo';
// import { ShowsEvents } from './pages/Shows-Event';
// import { Support } from './pages/Support';
import { Error } from './pages/Error'
// import ThemeToggler from './utils/ThemeToggler';
import Header from './layout/Header';

export default function App() {
  return (
    <>
    {/* <ThemeToggler /> */}
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/about' element={<About />} />
      <Route exact path='/archive' element={<Archive />} />
      <Route exact path='/contact' elemtent={<Contact />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/opportunity' element={<Oppo />} />
      <Route exact path='/shows-events' element={<ShowsEvents />} />
      <Route exact path='/support' element={<Support />} /> */}
      <Route exact path='*' element={<Error />}/>
    </Routes>
    </>
  );
}