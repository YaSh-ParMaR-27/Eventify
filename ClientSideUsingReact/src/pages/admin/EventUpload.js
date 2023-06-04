import React, { useState } from 'react'
// import { Await, useNavigate } from 'react-router-dom';
import './EventUpload.css';
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



export default function EventUpload() {

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
        "Content-Type": "application/json",
        'Accept': 'application/json',
      },
      credentials:"include",
      body:JSON.stringify({ eventName, date, time, regDeadline, totSeats, availSeats, price, genre, venue, organizer, Img, about})
    });


    // const data = await res.json();

    if(res.status === 422 || res.status === 500 ||  !res){
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
    <div className='event_upload_container container-fluid'>
        <div className="form_head row">
          <h2>EventForm</h2>
        </div>

        <div className="row event_form_row">
          <div className="event_form_container">
                  <form method='POST' className='event_form' >
                      <div className="event_name_type e_input">
                          <input type="text" placeholder='Event Name' name='eventName'  value={eventData.eventName} onChange={handleEventInputData}/>
                          <input type="text" placeholder='Event Type like music, festival...' id='inp_type' name='genre'  value={eventData.genre} onChange={handleEventInputData}/>    
                      </div>
                     
                      
                      <div className="event_date e_input">
                          <label htmlFor="inp_date" className=' date_label'>Event Date</label>
                          <input type="date" placeholder='Date' id='inp_date'  name='date'  value={eventData.date} onChange={handleEventInputData}/>

                          <label htmlFor="inp_time" className=' date_label'>Event Time</label>
                          <input type="time" placeholder='Time' id='inp_time' name='time' value={eventData.time} onChange={handleEventInputData}/>

                          <label htmlFor="inp_deadline" className=' date_label'>Registration Deadline</label>
                          <input type="date" placeholder='registration deadline' id='inp_deadline' name='regDeadline'  value={eventData.regDeadline} onChange={handleEventInputData}/>
                      </div>
                     
                      <div className="event_fee_venue e_input">
                          <input type="number" placeholder='Fee' name='price'  value={eventData.price} onChange={handleEventInputData}/>
                          <input type="text" placeholder='venue' id='inp_venue'  name='venue'  value={eventData.venue} onChange={handleEventInputData}/>
                      </div>
                     
                      <div className="event_seats_organizer e_input">
                          <input type="number" placeholder='Total Seats' name='totSeats'  value={eventData.totSeats} onChange={handleEventInputData}/>
                          <input type="number" placeholder='Available Seats' id='inp_availSeats' name='availSeats'  value={eventData.availSeats} onChange={handleEventInputData}/>
                          <input type="text" placeholder='Organizer name' name='organizer'  value={eventData.organizer} onChange={handleEventInputData}/>
                      </div> 
                    
                      <div className="event_image e_input">
                          <input type="file"  id='inp_image' accept='.jpeg, .png, .jpg'  name='Img' onChange={handleFileData}/>
                      </div> 
                      <div className="event_about e_input">
                          <textarea cols={30} name='about' id="inp_about" value={eventData.about} onChange={handleEventInputData} placeholder="About the event in min 30 words"/>
                      </div> 
                      <button className='event_submit_btn' onClick={sendEventDataToServer}>Submit</button>   
                  </form>
              </div>
        </div>
    </div>
  )
}
