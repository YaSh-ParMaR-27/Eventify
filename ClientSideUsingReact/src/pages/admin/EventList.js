import React, { useEffect } from 'react'
import EventCard from '../../components/EventCard'
import { useDataLayerValue } from '../../dataStore/DataLayer'

import './EventList.css'

export default function EventList() {

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  console.log(state.eventData);

  return (
    <div className='event_container container-fluid'>
        <div className="event_head row">
          <h2 >EVENTS</h2>
        </div>

        <div className="adminEvent_row row">
              <div className="col-sm-10 col-md-12 col-lg-9  flex flex-wrap gap-5 justify-center">
                    {state.eventData.map((eventObj)=>(
                        <div  className='event__wrapper  col-9 col-sm-8 col-md-5 col-lg-5'>
                            
                                <EventCard data={eventObj}/>
                            
                        </div>
                    ))}
              </div>
        </div>

    </div>
  )
}
