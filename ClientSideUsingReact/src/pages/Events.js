import React, { useEffect } from 'react'
import  EventCard from '../components/eventCard/EventCard'
import { Link } from 'react-router-dom'

import ballonsImg from '../assets/balloons.jpg'
import holiFestImg from '../assets/HoliFest.jpg'
import DJ_Night from '../assets/DJ Night.jpg'
import { useDataLayerValue } from '../dataStore/DataLayer'


export default function Events() {
  const [state, dispatch] = useDataLayerValue();
  
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await fetch('/geteventdetails',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        // console.log(data)
        dispatch({ type: "SET_EVENT_DATA", payload: data });

      }   
      catch(err){
        console.log(err);
      }
    }
     getData();
  },[])
  console.log(state.eventData);
  

    
  return (
    <div  className='container'>
      <div className="row m-2  flex justify-center align-items-center g-4">
          {state.eventData.map((eventObj)=>(
            <div className="p-2 flex justify-center col-10 col-sm-6 col-md-4  ">
              <Link to={`/events/eventdetails/${eventObj._id}`} state={{cardImg:{ballonsImg},cardTitle:eventObj.eventName, cardDate:eventObj.date, cardTime:eventObj.createdAt, cardType:eventObj.genre,  cardPrice:eventObj.price, cardVenue:eventObj.venue, cardAbout:eventObj.about}}>
                <EventCard cardImg={`data:image/png;base64,${eventObj.Img.toString('base64')}`} cardTitle={eventObj.eventName} cardDate={eventObj.date} cardTime={eventObj.createdAt} cardType={eventObj.genre}  cardPrice={eventObj.price} cardVenue = {eventObj.venue}  cardAbout={eventObj.about}/>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}
