import React, { useState } from 'react'
// import { Await, useNavigate } from 'react-router-dom';
import './css/EventForm.css'
// import axios from 'axios'

// function convertToBase64(file){
//     return new Promise((resolve,reject)=>{
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(file);
//         fileReader.onload = ()=>{
//             resolve(fileReader.result)
//         };
//         fileReader.onerror = (error)=>{
//             reject(error);
//         }
//     })
// }


export default function EventForm() {
    // const navigate = useNavigate();
   const [eventData , setEventData] = useState({
    eventName:"",date:"",time:"",regDeadline:"",totSeats:"",availSeats:"",price:"",genre:"",venue:"",organizer:"",Img:"", about:""
   }) 

   const handleEventInputData = (e)=>{
    setEventData({...eventData, [e.target.name]:e.target.value});
  }
  const handleFileData = async (e)=>{
    const file = e.target.files[0];
    console.log(e.target.files)
    console.log(file)
    // const base64 =  await convertToBase64(file);
    setEventData({...eventData, Img:file});
    // console.log(base64)
  }

  const sendEventDataToServer = async (e)=>{
    e.preventDefault();
    console.log(eventData)
    const { eventName, date, time, regDeadline, totSeats, availSeats, price, genre, venue, organizer, Img, about} = eventData;

   
    const res = await fetch('/event',{
      method:'POST',
      headers:{
        // 'Accept': 'application/json',
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        //"Content-Type": undefined
      },
      // credentials:"include",
      body:JSON.stringify({ eventName, date, time, regDeadline, totSeats, availSeats, price, genre, venue, organizer, Img, about})
    });


    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Failed to send data")
      console.log("Failed to send data")
    }
    else{
        window.alert("Data sent Successfully")
        console.log("event data send successfully")

        // setEventData({
        //   eventName:"",eventDate:"",time:"", regDeadline:"", totSeats:"",availSeats:"",price:"",genre:"",venue:"",organizer:"",Img:"", about:""
        // });
    }
  }


  return (
    <>
        <div className="container">
            <div className="event_form_container">
                <h1>Event Details</h1>
                <form method='POST' className='event_form'  encType="multipart/form-data">
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
                        <input type="time" placeholder='Time' name='time' value={eventData.time} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_deadline e_input">
                        <input type="date" placeholder='registration deadline' name='regDeadline'  value={eventData.regDeadline} onChange={handleEventInputData}/>
                    </div>
                    <div className="event_venue e_input">
                        <input type="text" placeholder='venue' name='venue'  value={eventData.venue} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_total_seats e_input">
                        <input type="number" placeholder='Total Seats' name='totSeats'  value={eventData.totSeats} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_avail_seats e_input">
                        <input type="number" placeholder='Available Seats' name='availSeats'  value={eventData.availSeats} onChange={handleEventInputData}/>
                    </div> 

                    <div className="event_organizer e_input">
                        <input type="text" placeholder='Organizer name' name='organizer'  value={eventData.organizer} onChange={handleEventInputData}/>
                    </div> 
                    <div className="event_image e_input">
                        <input type="file"  accept='.jpeg, .png, .jpg'  name='uploadImage' onChange={handleFileData}/>
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
