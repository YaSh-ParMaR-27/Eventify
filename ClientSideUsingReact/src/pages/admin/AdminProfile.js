import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';

import './AdminProfile.css'

export default function AdminProfile() {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await fetch('/getadmindetails',{
          method:'GET',
          headers:{
            Accept :"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        })
        const data = await res.json();
        // console.log(data)
        setName(data[0].name)
        setEmail(data[0].email);
      }   
      catch(err){
        console.log(err);
      }
    }
     getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='adminProfile_container container-fluid'>
       <div className="adminProfile_head row">
          <h2 >PROFILE</h2>
        </div>

        <div className="profile_details_row row">
            <div className= "col-md-6 col-lg-5 profile_icon">
              <p><AccountCircleIcon className='icon'/></p>
            </div>
            <div className="col-sm-8 col-md-6 col-lg-5 profile_details">
              <h1 id='heading'>DETAILS</h1>
              <div>
                <h1>UserName:</h1>
                <p>{name}</p>
              </div>
              <div>
                <h1>Email:</h1>
                <p>{email}</p>
              </div>
              <NavLink className='btn' to={"/admin"} >Log Out</NavLink>
            </div>
        </div>
    </div>
  )
}
