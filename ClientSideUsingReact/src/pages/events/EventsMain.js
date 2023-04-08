import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import EventCard from '../../components/EventCard'
import { useDataLayerValue } from '../../dataStore/DataLayer'


import './css/EventsMain.css'
export default function EventsMain() {

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
    <>
        <div className="event_main_container container-fluid">
            <div className="row search_bar_row py-2  ">
                <div className="col-8 search_bar_col flex py-2 justify-center">
                    <input className='search_Inp' type="search" placeholder='Event Search...' />  
                    <button type="submit" className='search_btn'>Search</button>
                </div>
            </div>
           <div className='row py-2 m-2 justify-evenly'>
               <div className="col-sm-9 col-md-10 col-lg-8 col-sm-9 flex flex-wrap gap-5 justify-center">
                    {state.eventData.map((eventObj)=>(
                        <div  className='event__wrapper  col-9 col-sm-8 col-md-5 col-lg-5'>
                            <Link to={`/events/eventdetails/${eventObj._id}`} state={eventObj}>
                                <EventCard data={eventObj}/>
                            </Link>
                        </div>
                    ))}
               </div>
               <div className="sidebar_container my-5 my-sm-0 col-sm-3  col-md-2 md:px-1 lg:px-3 ">
                    <div className="sidebar gap-4  gap-sm-0 ">
                        <h1>Categories</h1>
                        <p className="first_p">All Events</p>
                        <p>Art </p>
                        <p>Books</p>
                        <p>Food</p>
                        <p>Films</p>
                        <p>Awards</p>
                        <p>Parties</p>
                        <p>Music</p>
                        <p>Comedy</p>
                        <p className="last_p">Show</p>
                    </div>
               </div>
           </div>
          
        </div>
    </>
  )
}
