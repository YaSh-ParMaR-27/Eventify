import React from 'react'
import  EventCard from '../components/eventCard/EventCard'
import { Link } from 'react-router-dom'

import ballonsImg from '../assets/balloons.jpg'
import holiFestImg from '../assets/HoliFest.jpg'
import DJ_Night from '../assets/DJ Night.jpg'


export default function Events() {
  return (
    <div  className='container bg-[#B8E1FF] bg-opacity-[0.3] '>
      <div className="row m-2  flex justify-center align-items-center g-4">
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4  ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={ballonsImg} cardTitle={"Balloon Ride"} cardDate={"Feb 22"} cardTime={"4PM"} cardType={"Adventure"}  cardPrice={500} />
          </Link>
        </div>
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4 ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={holiFestImg} cardTitle={"Holi Fest"} cardDate={"March 11"} cardTime={"1PM"} cardType={"Holi"}  cardPrice={0}/>
          </Link>
        </div>
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4  ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={DJ_Night} cardTitle={"Dj Night"} cardDate={"April 09"} cardTime={"9PM"} cardType={"Music"}  cardPrice={300}/>
          </Link>
        </div>
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4  ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={ballonsImg} cardTitle={"Balloon Ride"} cardDate={"Feb 22"} cardTime={"4PM"} cardType={"Adventure"}  cardPrice={1000}/>
          </Link>
        </div>
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4 ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={holiFestImg} cardTitle={"Holi Fest"} cardDate={"March 11"} cardTime={"1PM"} cardType={"Holi"}  cardPrice={0}/>
          </Link>
        </div>
        <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4 ">
          <Link to={"/events/eventdetails"} state={{cardTitle:"Balloon Ride", cardDate:"Feb 22" , cardTime:"4PM",cardType:"Adventure",cardPrice:500 , cardImg:{ballonsImg}}}>
            <EventCard cardImg={DJ_Night} cardTitle={"Dj Night"} cardDate={"April 09"} cardTime={"9PM"} cardType={"Music"}  cardPrice={200}/>
          </Link>
        </div>
      </div>
    </div>
  )
}
