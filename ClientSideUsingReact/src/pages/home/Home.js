import React from 'react'

import Carousel from '../../components/Carousel'
import DesignedPoster from './DesignedPoster'
import EventCards from './EventCards'
import MovieCards from '../../components/movie_cards/MovieCards'
//react-slick-slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings,slides } from '../../dataStore/data';

import './css/Home.css'
import { useDataLayerValue } from '../../dataStore/DataLayer'



export default function Home() {
  const [state , dispatch] = useDataLayerValue(); 
  
  return (  
    <>
      <Carousel slides={slides} />
      <EventCards/>
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
