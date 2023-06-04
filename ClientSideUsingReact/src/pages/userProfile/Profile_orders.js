import React from 'react'
import noBooking from '../../assets/no_booking.svg'
import './css/Profile_orders.css'

export default function Profile_orders() {
  return (
    <>
      <div className="profile_orders">
       <img src={noBooking} alt="favourites" />
        <p>No Bookings yet</p>
      </div>
    </>
  )
}
