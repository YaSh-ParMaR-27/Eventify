import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/EventCards.css';
import {settings } from '../../dataStore/data';

function Card() {
  const arr = [1,2,3,4,5,6,7,8] 
  return (
    <div className="eventCard">
      <h1 className='text-2xl mb-2 font-bold'> Explore events</h1>
      <Slider {...settings}>
        {arr.map((item) => (
          <div className="max-w-sm  overflow-hidden rounded-lg ">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit sunt non, incidunt dicta veritatis et facere vitae commodi quo iure.</p>          
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;