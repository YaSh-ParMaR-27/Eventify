import React from 'react'
import { Routes , Route} from "react-router-dom";


import Navbar from './components/navbar/Navbar'
import About from './pages/About'
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MovieDetails'
import Events from './pages/Events';
import Home from './pages/home/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Footer from './components/footer/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import CinemaDetails from './pages/CinemaDetails';
import ApiCalls from './dataStore/ApiCalls';
import SeatAllot from './pages/SeatAllot';
import EventDetails from './pages/EventDetails';
import EventCheckout from './pages/EventCheckout';
import EventForm from './pages/EventForm';


export default function App() {
  return (
    <>
      <ApiCalls/>
      <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/fillevent" element={<EventForm/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="movies/:id" element={<MoviesDetails/>}/>
          <Route path="movies/:id/cinemadetails" element={<CinemaDetails/>}/>
          <Route path="movies/:id/cinemadetails/seatallot" element={<SeatAllot/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/events/eventdetails/:id" element={<EventDetails/>}/>
          <Route path='/events/eventdetails/checkout' element={<EventCheckout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/registration" element={<Registration/>}/>
          <Route path='*' element={<Error/>}/>
        
        </Routes>
      
      <Footer/>
     
    </>
  )
}
