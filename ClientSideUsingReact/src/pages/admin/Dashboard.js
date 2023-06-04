import React, { useEffect, useState } from 'react'
import './Dashboard.css'


export default function Dashboard() {
  
  const [totEvents , setTotEvents] = useState(0);
  const [ticketSold , setTicketSold] = useState(0);
  const [registrations , setRegistrations] = useState(0);
  const [users , setUsers] = useState(0);
  const [messages , setMessages] = useState(0);
  
  function calDetails(eventArr){
    setTotEvents(eventArr.length);
    let tickets = 0;
    let registeredUser = 0
    eventArr.forEach((obj)=>{
        tickets += (obj.totSeats - obj.availSeats)
        registeredUser += obj.registeredUser.length;
    })
    setTicketSold(tickets);
    setRegistrations(registeredUser);
  }

  useEffect(()=>{
    //for Event
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
        calDetails(data);
        console.log(data)                     
      }   
      catch(err){
        console.log(err);
      }
    }
     getData();


     //get users
     const getUsers = async ()=>{
      try{
        const res = await fetch('/getuserdetails',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        console.log(data)
        setUsers(data.length);
       
      }   
      catch(err){
        console.log(err);
      }
    }
     getUsers();


     //get contact messages number
     const getMessages = async ()=>{
      try{
        const res = await fetch('/getcontacts',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        // console.log(data)
        setMessages(data.length)
       
      }   
      catch(err){
        console.log(err);
      }
    }
     getMessages();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='dashboard_container container-fluid'>
        <div className="head row">
          <h2 >DASHBOARD</h2>
        </div>

        <div className="box_row row">
          <div className="box col-md-2 col-lg-3"><span>{users}</span> <br /> Users</div>
          <div className="box col-md-2 col-lg-3"><span>{totEvents}</span>  <br />  Events </div>
          <div className="box col-md-2 col-lg-3"><span>{ticketSold}</span>  <br /> Tickets sold</div>
        </div>
        <div className="box_row row">
          <div className="box col-md-2 col-lg-3"><span>{registrations}</span> <br /> Registrations For Events</div>
          <div className="box col-md-2 col-lg-3"><span>{messages}</span>  <br /> Messages </div>
          
        </div>

    </div>
  )
}
