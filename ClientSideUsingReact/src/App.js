import React from 'react'
import { Routes , Route, Navigate } from "react-router-dom";

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
// import EventForm from './pages/events/EventForm';

//profile
import ProfileElementsRender from './pages/userProfile/ProfileElementsRender';
import ProfileInfo from './pages/userProfile/Profile_info';
import ProfilePayments from './pages/userProfile/Profile_payments';
import ProfileOrders from './pages/userProfile/Profile_orders';
import ProfileFav from './pages/userProfile/Profile_fav';
import ProfileNotifications from './pages/userProfile/Profile_notifications';

//admin
import Sidebar from './pages/admin/Sidebar';
import Dashboard from './pages/admin/Dashboard';
import EventList from './pages/admin/EventList'
import EventUpload from './pages/admin/EventUpload'
import Users from './pages/admin/Users'
import PeopleContacted from './pages/admin/PeopleContacted'
import AdminProfile from './pages/admin/AdminProfile'
import AdminLogin from './pages/admin/AdminLogin';
import AdminRegister from './pages/admin/AdminRegister';
import AdminLogout  from './pages/admin/AdminLogout';

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
          {/* <Route path="/fillevent" element={<EventForm/>}/> */}

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

          <Route path='/adminregister' element={<AdminRegister/>}/>
          <Route path='/admin' element={<AdminLogin/>}/>

          <Route path="/homeadmin" element={<Sidebar/>}>
            <Route index  element={<Navigate to={"dashboard"} replace/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="eventlist" element={<EventList/>}/>
            <Route path="upload" element={<EventUpload/>}/>
            <Route path="peoplecontacted" element={<PeopleContacted/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="profile" element={<AdminProfile/>}/>
            <Route path="logout" element={<AdminLogout/>}/>
          </Route>

          
          {/* Error Route */}
          <Route path='*' element={<Error/>}/>
        </Routes>
        
       
      
      <Footer/>
     
    </>
  )

}