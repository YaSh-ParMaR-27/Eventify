import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './css/EventForm.css'

export default function EventForm() {
    const navigate = useNavigate();
   const [eventData , setEventData] = useState({
    eventName:"",eventDate:"",createdAt:"",price:"",genre:"",venue:"",Img:"", about:""
   }) 

   const handleEventInputData = (e)=>{
    setEventData({...eventData, [e.target.name]:e.target.value})
  }

  const sendEventDataToServer = async (e)=>{
    e.preventDefault();
    const { eventName, date, createdAt, price, genre, venue, Img, about} = eventData;

    const res = await fetch('/event',{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      // credentials:"include",
      body:JSON.stringify({ eventName, date, createdAt, price, genre, venue, Img, about})
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Failed to send data")
      console.log("Failed to send data")
    }
    else{
        window.alert("Data sent Successfully")
        console.log("event data send successfully")

        setEventData({
          eventName:"",eventDate:"",createdAt:"",price:"",genre:"",venue:"",Img:"", about:""
         });
    }
  }


  return (
    <>
        <div className="container">
            <div className="event_form_container">
                <h1>Event Details</h1>
                <form method='POST' className='event_form'>
                    <div className="event_name e_input">
                        <input type="text" placeholder='Event Name' name='eventName'  value={eventData.eventName} onChange={handleEventInputData}/>
                    </div>
                    <div className="event_type e_input">
                        <input type="text" placeholder='event type like music, festival..' name='genre'  value={eventData.genre} onChange={handleEventInputData}/>    
                    </div>
                    <div className="event_fee e_input">
                        <input type="number" placeholder='Fee' name='price'  value={eventData.price} onChange={handleEventInputData}/>
                    </div>
                    <div className="event_date e_input">
                        <input type="date" placeholder='Date' name='date'  value={eventData.date} onChange={handleEventInputData}/>
                    </div>
                    <div className="event_time e_input">
                        <input type="time" placeholder='Time' name='createdAt' value={eventData.createdAt} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_venue e_input">
                        <input type="text" placeholder='venue' name='venue'  value={eventData.venue} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_image e_input">
                        <input type="file" name='Img'  value={eventData.Img} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_about e_input">
                        <textarea cols={30} name='about'  value={eventData.about} onChange={handleEventInputData} placeholder="About the event in min 30 words"/>
                    </div> 
                    <button className='event_submit_btn' onClick={sendEventDataToServer}>Submit</button>   
                </form>
            </div>
        </div>
    </>
  )
}
