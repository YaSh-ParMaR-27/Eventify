import React, { useEffect } from 'react'

import Carousel from '../../components/Carousel'
import DesignedPoster from './DesignedPoster'
import HomeEventCards from './HomeEventCards'
import MovieCards from '../../components/MovieCards'

//react-slick-slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings,slides } from '../../dataStore/data';

import './css/Home.css'
import { useDataLayerValue } from '../../dataStore/DataLayer'



export default function Home() {
  const [state , dispatch] = useDataLayerValue(); 
  useEffect(() => {
    var arrayb = document.cookie.split(";");
    for (const item of arrayb) {
      if (item.startsWith("jwt_token=")) {
        dispatch({ type: "SET_COOKIE", payload: item.substring(10) });
      }
    }
  },)
  
  
  return (  
    <>
      <Carousel slides={slides} />
      <HomeEventCards/>
      <DesignedPoster/>
      <div className="home_movie_card">
        <h1 className='text-2xl mb-2 font-bold'> Recomended Movies</h1>
        <Slider {...settings}>
            {state.popularMovies.map((movie)=>
              <MovieCards movie={movie} />
            )}
        </Slider>
      </div>
      
     
    </>
  )
};
