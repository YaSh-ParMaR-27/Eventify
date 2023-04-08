import React from 'react'
import EventIcon from '@mui/icons-material/Event';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './css/Profile_orders.css'

export default function Profile_orders() {
  return (
    <>
      <div className="profile_orders">
        <h1>Events</h1>
        <div className="event_details">
          <div className="event_name_image">
            <EventIcon  fontSize='large' style={{fontSize:"50px"}}/>
            <div className='event_name'>
              <p className='title'>Holi Festival</p>
              <p className='genre'>Genre : Music </p>
            </div>
          </div>

          <div className="event_price">
            <p><CurrencyRupeeIcon  fontSize='10px'/>478</p>
          </div>
          <div className="event_date">
            <p> 01-3-2022</p>
          </div>
        </div>
        <div className="event_details">
          <div className="event_name_image">
            <EventIcon  fontSize='large' style={{fontSize:"50px"}}/>
            <div className='event_name'>
              <p className='title'>Holi Festival</p>
              <p className='genre'>Genre : Music </p>
            </div>
          </div>

          <div className="event_price">
            <p><CurrencyRupeeIcon  fontSize='10px'/>478</p>
          </div>
          <div className="event_date">
            <p> 01-3-2022</p>
          </div>
        </div>
        <div className="event_details">
          <div className="event_name_image">
            <EventIcon  fontSize='large' style={{fontSize:"50px"}}/>
            <div className='event_name'>
              <p className='title'>Holi Festival</p>
              <p className='genre'>Genre : Music </p>
            </div>
          </div>

          <div className="event_price">
            <p><CurrencyRupeeIcon  fontSize='10px'/>478</p>
          </div>
          <div className="event_date">
            <p> 01-3-2022</p>
          </div>
        </div>
        <div className="event_details">
          <div className="event_name_image">
            <EventIcon  fontSize='large' style={{fontSize:"50px"}}/>
            <div className='event_name'>
              <p className='title'>Holi Festival</p>
              <p className='genre'>Genre : Music </p>
            </div>
          </div>

          <div className="event_price">
            <p><CurrencyRupeeIcon  fontSize='10px'/>478</p>
          </div>
          <div className="event_date">
            <p> 01-3-2022</p>
          </div>
        </div>

      </div>
    </>
  )
}
