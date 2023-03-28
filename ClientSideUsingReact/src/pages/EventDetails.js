import React from 'react'
import { useLocation,Link, useNavigate } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import {FaTags} from 'react-icons/fa'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './css/EventDetails.css'

import ballonsImg from '../assets/balloons.jpg'
import holiFestImg from '../assets/HoliFest.jpg'
import DJ_Night from '../assets/DJ Night.jpg'

//react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {settings } from '../dataStore/data';
import EventCard from '../components/eventCard/EventCard';
import { useDataLayerValue } from '../dataStore/DataLayer';

export default function EventDetails() {
  const [state , dispatch] = useDataLayerValue();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);
  
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide:0,
        arrow : false
      },
    },
  ],
};

const checkUserLogggedIn = async (e)=>{
  e.preventDefault();
  try{
      const res= await fetch('/about',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      });

      const data = await res.json();
      console.log(data);

      navigate('/events/eventdetails/checkout',{state:{userData:data,eventData:location.state} });
    
  }
  catch(err){
      console.log(err);
      navigate('/login');
      
  }
}


  return (
    <>
        <div className="eventDetails_container container flex-col sm:flex-row">
          <div className='image_container_on_left'>
            <img className='img'  src={location.state.cardImg.ballonsImg}  alt="EventImage" />
          </div>
          <div className="eventDetailsOnRight">
            <div className="details_container ">
              <div className="event_head mb-3">
                  <p className='heading'>{location.state.cardTitle}</p>
                  <p className='mt-3 '><BsFillHeartFill color='#B8E1FF' fontSize={"18px"}/></p>
              </div>
              <div className='small_Details mb-4'>
                <p className='flex gap-2 mb-2' ><FaTags className='mt-2'/> {location.state.cardType}</p>
                <p className='flex gap-2 mb-2' ><FaTags className='mt-2'/>{location.state.cardDate} | {location.state.cardTime}</p>
                <p className='flex gap-2' ><FaTags className='mt-2'/> {location.state.cardVenue}</p>
              </div>
              <div className="price">
                <p className='inline-block text-xl font-semibold'><CurrencyRupeeIcon fontSize='14px'/>{location.state.cardPrice}</p>
                <button  onClick={checkUserLogggedIn}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container event_about_container">
          <hr className='line'/>
          <h1 className='text-2xl my-2'>About This Event </h1>
          <p>{location.state.cardAbout}</p>
        </div>

        <div className="container related_events_container  ">
          <h1 className='text-2xl m-1 p-1'>Related Events</h1>
          <Slider {...settings}>
            {state.eventData.map((eventObj)=>(
                <Link to={`/events/eventdetails/${eventObj._id}`} state={{cardImg:{ballonsImg},cardTitle:eventObj.eventName, cardDate:eventObj.date, cardTime:eventObj.createdAt, cardType:eventObj.genre,  cardPrice:eventObj.price , cardVenue:eventObj.venue, cardAbout:eventObj.about}}>
                  <EventCard cardImg={ballonsImg} cardTitle={eventObj.eventName} cardDate={eventObj.date} cardTime={eventObj.createdAt} cardType={eventObj.genre}  cardPrice={eventObj.price} cardVenue = {eventObj.venue} cardAbout={eventObj.about}/>
                </Link>
            ))}
          </Slider>
        </div>
    </>
  )
}
 