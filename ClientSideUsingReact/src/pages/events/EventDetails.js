import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import balloonImg from '../../assets/DJ Night.jpg'
import './css/EventDetails.css'

export default function EventDetailsMain() {
    const navigate = useNavigate();
    const location = useLocation();   
    // console.log(location.state); 

    const  {eventName , date , time , regDeadline, totSeats, availSeats, price, genre, venue, organizer ,Img, about} = location.state;
    
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
        <div className="event_details_container container">
            <div className="row  p-3 justify-center gap-4 gap-md-2">
                <div className="col-12 col-md-7 py-2 py-md-4 py-lg-2 ">
                   <div className="event_image">
                    <img src={balloonImg} alt="ballon" />
                   </div>
                </div>
                <div className="col-12   col-md-4  col-lg-3 ">
                   <div className='mt-2 event__details'>
                        <div className='mx-lg-2'>
                            <p className="para event_name">{eventName}</p>
                            <p className="para venue">{venue}</p>
                            <p className="para">Date : <span className="value">{date}</span></p>
                            <p className="para">Time : <span className="value">{time}</span></p>      
                            <p className="para">Reg.Deadline : <span className="value">{regDeadline}</span> </p>        
                            <p className="para">Genre : <span className="value">{genre}</span></p>
                            <p className="para">Price : <span className="value"><CurrencyRupeeIcon fontSize='14px'/>{price}</span></p>
                            <p className=" last_p">organized by {organizer}</p>
                        </div>
                   </div>
                </div>
            </div>
            <div className="row justify-center p-3 gap-4 gap-md-2">
                <div className="col-12 col-md-7 ">
                    <div className=" event_description p-1">
                        <h1>About this event </h1>
                        <p>{about}</p>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3  seats_buy flex flex-col justify-center col-3 ">
                   <p className="flex gap-6 my-2 justify-center">  <span className="text-lg ">Total Seats : </span>  
                        <select className='p-2 px-4 rounded-md bg-[#334155] text-white '>
                            <option className='opt' value="1">01</option>
                            <option className='opt' value="1">02</option>
                            <option className='opt' value="1">03</option>
                            <option className='opt' value="1">04</option>
                        </select>
                   </p>
                   <button onClick={checkUserLogggedIn} className='buy_btn hover:bg-[#9bcdce] duration-500 mb-2' >Buy Ticket</button>
                </div>
            </div>
        </div>
    </>
  )
}
