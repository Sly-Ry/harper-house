import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ShowsEvents } from './pages/Shows-Events';
import { Visiting } from './pages/Visit';
// import { About } from './pages/About';
// import { Archive } from './pages/Archive';
// import { Contact } from './pages/Contact';
// import { Gallery } from './pages/Gallery';
// import { Oppo } from './pages/Oppo';
// import { Support } from './pages/Support';
import { Error } from './pages/Error'
// import ThemeToggler from './utils/ThemeToggler';
import Header from './components/Header';
import Footer from './layout/FooterLayout';
import ScrollToTop from "react-scroll-to-top";

export default function App() {
  return (
    <>
    {/* <ThemeToggler /> */}
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/shows-events' element={<ShowsEvents />} />
      <Route exact path='/visit' element={<Visiting />} />
      {/* <Route exact path='/about' element={<About />} />
      <Route exact path='/archive' element={<Archive />} />
      <Route exact path='/contact' elemtent={<Contact />} />
      <Route exact path='/gallery' element={<Gallery />} />
      <Route exact path='/opportunity' element={<Oppo />} />
      <Route exact path='/support' element={<Support />} /> */}
      <Route exact path='*' element={<Error />}/>
    </Routes>
    {/* Back to top button */}
    <Footer />
    <ScrollToTop 
      smooth 
      className='scrolltab'
      color='white'
      style={{
        backgroundColor: 'maroon',
        width: 65, 
        height: 55,
        position:'fixed',
        bottom: 0,
        right: 50,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      }}
      />

    </>
  );
}