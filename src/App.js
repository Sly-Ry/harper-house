import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ShowsEvents } from './pages/Shows-Events';
// import { CurrentSeason } from './pages/Current-Season';
// import { ComingSoon } from './pages/ComingSoon';
// import { SeasonPass } from './pages/SeasonPass';
// import { Subscribe } from './pages/Subscribe';
// import { Discounts } from './pages/Discounts';
// import { Calendar } from './pages/Calendar';
import { Visiting } from './pages/Visit';
// import { Venues } from './pages/Venues';
// import { TheRedDeck } from './pages/TheRedDeck';
// import { TheGallery } from './pages/TheGallery';
// import { Parking } from './pages/Parking';
// import { Tours } from './pages/Tours';
// import { Accessibility } from './pages/Accessibility';
import { Archives } from './pages/Archive';
// import { Videos } from './pages/Videos';
// import { Photos } from './pages/Photos';
// import { Documents } from './pages/Documents';
import { Support } from './pages/Support';
// import { Offering } from './pages/Offering';
// import { How-To } from './pages/How-To';
// import { Membership } from './pages/Membership';
// import { Sponsorship } from './pages/Sponsorship';
// import { Community } from './pages/Community';
// import { Corporate } from './pages/Corporate';
// import { Individual } from './pages/Individual';
// import { Donate } from './pages/Donate';
import { Oppo } from './pages/Oppo';
// import { WorkingAt } from './pages/WorkingAt';
// import { Auditions } from './pages/Auditions';
// import { Internships } from './pages/Internships';
// import { Volunteer } from './pages/Volunteer';
// import { Rentals } from './pages/Rentals';
import { About } from './pages/About';
// import { TheTheatre } from './pages/TheTheatre';
// import { AboutHarper } from './pages/AboutHarper';
// import { History } from './pages/History';
// import { Diversity } from './pages/Diversity';
// import { TheTeam } from './pages/TheTeam';
// import { Leadership } from './pages/Leadership';
// import { Staff } from './pages/Staff';
// import { Board } from './pages/Board';
// import { Contact } from './pages/Contact';
// import { FAQ } from './pages/FAQ';
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
      <Route />
      <Route exact path='/shows-events'>
        <Route index element={<ShowsEvents />} />
        {/*  <Route path='current-season' element={<CurrentSeason />} />
        <Route path='coming-soon' element={<ComingSoon />} />
        <Route path='season-pass' element={<SeasonPass />} />
        <Route path='subscribe' element={<Subscribe />} />
        <Route path='discounts' element={<Discounts />} />
        <Route path='calendar' element={<Calendar />} /> */}
      </Route>
      <Route exact path='/visit'>
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
      </Route>
      <Route exact path='/archives' >
        <Route index element={<Archives />} />
        {/* <Route path='videos' element={<Videos />} />
        <Route path='photos' element={<Photos />} />
        <Route path='documents' element={<Documents />} /> */}
      </Route>
      <Route exact path='/support'>
        <Route index element={<Support />} />
        {/* <Route exact path='offering'>
          <Route index element={<Offering />} />
          <Route path='how-to' element={<HowTo />} />
          <Route path='membership' element={<Membership />} />
        </Route>
        <Route exact path='sponsorship'>
          <Route index element={<Sponsorhip />} />
          <Route path='community' element={<Community />} />
          <Route path='corporate' element={<Corporate />} />
          <Route path='individual' element={<Individual />} />
        </Route>
        <Route path='donate' element={<Donate />} /> */}
      </Route>
      <Route exact path='/oppo' >
        <Route index element={<Oppo />} />
        {/* <Route path='work-at' element={<WorkAt />} />
        <Route path='auditions' element={<Auditions />} />
        <Route path='internships' element={<Internships />} />
        <Route path='volunteer' element={<Volunteer />} />
        <Route path='rentals' element={<Rentals />} /> */}
      </Route>
      <Route exact path='/about'>
        <Route index element={<About />} />
        {/* <Route path='the-theatre' >
          <Route index element={<TheTheatre />} />
          <Route path='about-us' element={<AboutHarper />} />
          <Route path='history' element={<History />} />
          <Route path='diversity' element={<Diversity />} />
        </Route>
        <Route path='the-team'>
          <Route index element={<TheTeam />} />
          <Route path='leadership' element={<Leadership />} />
          <Route path='staff' element={<Staff />} />
          <Route path='board' element={<Board />} />
        </Route>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} /> */}
      </Route>
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