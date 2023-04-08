import React from "react"
import { Link } from "react-router-dom";
import "./css/Movies.css"

//react-responsive carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
//react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings } from '../../dataStore/data';

import MovieCards from '../../components/MovieCards'
import { useDataLayerValue } from "../../dataStore/DataLayer";

const Home = () => {
    const [state , dispatch] = useDataLayerValue();    
    return (
        <>
            <div className="movies_container poster mt-2 mx-2 ">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        state.popularMovies.slice(0,7).map((movie,index) =>  (

                            <Link style={{textDecoration:"none",color:"white"}} to={`/movies/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description ">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>

                <div className="movie_card">
                  <h1 className='text-2xl mb-2 font-bold'> Popular Movies</h1>
                  <Slider {...settings}>
                      {state.popularMovies.map((movie)=>
                        <MovieCards movie={movie} />
                      )}
                  </Slider>
                </div>
                <div className="movie_card">
                  <h1 className='text-2xl mb-2 font-bold'> Top Rated Movies</h1>
                  <Slider {...settings}>
                      {state.topRatedMovies.map((movie)=>
                        <MovieCards movie={movie} />
                      )}
                  </Slider>
                </div>
                <div className="movie_card">
                  <h1 className='text-2xl mb-2 font-bold'> Upcoming Movies</h1>
                  <Slider {...settings}>
                      {state.upcomingMovies.map((movie)=>
                        <MovieCards movie={movie} />
                      )}
                  </Slider>
                </div>
               
            </div>
        </>
    )
}

export default Home