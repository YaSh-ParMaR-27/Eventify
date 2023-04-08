import React from 'react'
import { Routes , Route, Navigate} from "react-router-dom";

import ApiCalls from './dataStore/ApiCalls';

//navbar
import Navbar from './components/Navbar'
//about
import About from './pages/about/About'
//contact
import Contact from './pages/contact/Contact';

//register
import Registration from './pages/login/Registration';
//login
import Login from './pages/login/Login';
//logout
import Logout from './pages/login/Logout';

//footer
import Footer from './components/Footer';
//error
import Error from './pages/error/Error';


//movies
import Movies from './pages/movies/Movies';
import MoviesDetails from './pages/movies/MovieDetails'
import CinemaDetails from './pages/movies/CinemaDetails';
import SeatAllot from './pages/movies/SeatAllot';

//home
import Home from './pages/home/Home';


//Events
import EventsMain from './pages/events/EventsMain';
import EventDetails from './pages/events/EventDetails';
import EventCheckout from './pages/events/EventCheckout';
import EventForm from './pages/events/EventForm';

//profile
import ProfileElementsRender from './pages/userProfile/ProfileElementsRender';
import ProfileInfo from './pages/userProfile/Profile_info';
import ProfilePayments from './pages/userProfile/Profile_payments';
import ProfileOrders from './pages/userProfile/Profile_orders';
import ProfileFav from './pages/userProfile/Profile_fav';
import ProfileNotifications from './pages/userProfile/Profile_notifications';


export default function App() {
  return (
    <>
      <ApiCalls/>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
      
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
          
          {/* Movies Route */}
          <Route path="/movies" element={<Movies/>}/>
          <Route path="movies/:id" element={<MoviesDetails/>}/>
          <Route path="movies/:id/cinemadetails" element={<CinemaDetails/>}/>
          <Route path="movies/:id/cinemadetails/seatallot" element={<SeatAllot/>}/>

          {/* Event Route */}
          <Route path="/events" element={<EventsMain/>}/>
          <Route path="/events/eventdetails/:id" element={<EventDetails/>}/>
          <Route path='/events/eventdetails/checkout' element={<EventCheckout/>}/>
          <Route path="/fillevent" element={<EventForm/>}/>

          {/* Profile Route */}
          <Route path="/profile" element={<ProfileElementsRender/>}>
            <Route index element={<Navigate to="info" replace />}/>
            <Route path='info' element={<ProfileInfo/>}/>
            <Route path='orders' element={<ProfileOrders/>}/>
            <Route path='payments' element={<ProfilePayments/>}/>
            <Route path='favourite' element={<ProfileFav/>}/>
            <Route path='notification' element={<ProfileNotifications/>}/>
            <Route path="logout" element={<Logout/>}/>
          </Route>

          {/* Error Route */}
          <Route path='*' element={<Error/>}/>
        
        </Routes>
      
      <Footer/>
     
    </>
  )
}
