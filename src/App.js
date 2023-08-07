import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import ShowEventsRoutes from './routes/ShowEventsRoutes';
import VisitingRoutes from './routes/VisitingRoutes';
import ArchivesRoutes from './routes/ArchivesRoutes';
import SupportRoutes from './routes/SupportRoutes';
import OppoRoutes from './routes/OppoRoutes';
import AboutRoutes from './routes/AboutRoutes';
import TicketsRoutes from './routes/TicketsRoutes';
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
      <Route path='/' element={<Home />} />
      <Route path='/shows-events/*' element={<ShowEventsRoutes />} />
      <Route path='/visit/*' element={<VisitingRoutes />} />
      <Route path='/archives/*' element={<ArchivesRoutes />} />
      <Route path='/support/*' element={<SupportRoutes />} />
      <Route path='/oppo/*' element={<OppoRoutes />} />
      <Route path='/about/*' element={<AboutRoutes />} />
      <Route path='/tickets/*' element={<TicketsRoutes />} />
      <Route exact path='*' element={<Error />} />
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