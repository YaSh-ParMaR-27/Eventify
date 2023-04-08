import React from 'react'
import './css/EventCard.css'

export default function NewCard({data}) {
    const {eventName , date ,  totSeats, availSeats, venue, organizer ,Img} = data;
  return (
    <>
        <div className="event_card_container ">
            <div className="image__container">
                <img src={Img} alt="balloon" />
            </div>

            <div className="event__details">
                <p className='event__name'>{eventName}</p>
                <p className='event__venue'>Venue : {venue}</p>
                <div className='event_date_tickets'>
                    <p className='event__date'>Date  <span className='value'> {date}</span> </p>
                    <p className='event__ticket'>Tickets   <span className='value'>Available {availSeats}/{totSeats} </span></p>
                </div>
            </div>   

            <div className="author">
                <p className='author__name'>- Organized by <span className='value'>{organizer}</span> </p>
            </div>
        </div>
    </>
  )
}
