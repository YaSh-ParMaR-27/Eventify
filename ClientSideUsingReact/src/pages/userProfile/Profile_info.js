import React from 'react'
import './css/Profile_info.css'


export default function Profile() {
  return (
    <> 
      <div className="profile_info">
        <div><p className='name '>Full Name </p> <p className='value'>Yash Parmar</p></div>  
        <div> <p className='name mr-8'>Email</p> <p className='value'>yashwant8878185163@gmail.com</p></div>  
        <div><p className='name mr-5'>Mobile</p> <p className='value'>8878185163</p></div>  
        <div  id='border_remove'><p className='name mr-7 '>Address</p> <p className='value'>-----</p></div>    
      </div>
    </>
  )
}
