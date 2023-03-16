import React from 'react'
import { useLocation } from 'react-router-dom';
import './css/EventDetails.css'

export default function EventDetails() {
  const location = useLocation();
  console.log(location.state);
  return (
    <>
        <div className="eventDetails container border-2 border-red-700">
          <div className="row ">
            <div className="col-sm-7  border-2 border-purple-400">
              
            </div>
            <div className="col-sm-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in consequatur nemo repellendus quod obcaecati voluptate placeat perspiciatis harum asperiores.</div>
          </div>
        </div>
        <div className='p-2 image_container' >
                <img className='img'  src={location.state.cardImg.ballonsImg}  alt="EventImage" />
        </div>
    </>
  )
}
