import React, { useEffect, useState } from 'react'
import { useParams,useNavigate  } from 'react-router-dom'
import './css/MovieDetails.css'
import Star from '@mui/icons-material/Star';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {settings } from '../dataStore/data';
import { useDataLayerValue } from '../dataStore/DataLayer';
import MovieCards from '../components/movie_cards/MovieCards'

export default function MovieDetails() {
    const navigate = useNavigate();
    const [state , dispatch] = useDataLayerValue(); 
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=da19b578f86fdc6b60d25855d696d2cd&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }
    // console.log(currentMovieDetail);

    const checkUserLogggedIn = async (e)=>{
        e.preventDefault();
        try{
            const res= await fetch('/about',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });

            const data = await res.json();
            console.log(data);

            navigate(`/movies/${id}/cinemadetails`,{state:{title:currentMovieDetail.original_title,id:id}});
        
          
        }
        catch(err){
            console.log(err);
            navigate('/login');
        }
    }
    return (
    <>
        <div className='movie_detail_container container-fluid  border-2 border-red-500' >
           <div className="row poster_details_row">
            <div className="col-sm-5 border-2  border-emerald-300">
                <div className="movie__poster">
                    <img className="movie__poster_img" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""/>
                </div>
            </div>
            <div className="col-sm-7 border-2  border-emerald-300 ">
                <form method='GET'>
                    <div className="details text-white  ">
                        <h1 className='movie__name'>{currentMovieDetail ? currentMovieDetail.original_title : ""}</h1>
                    
                        <p> <Star color='error'/><span>{Math.round((currentMovieDetail ? currentMovieDetail.vote_average: "")*10)/10}/10</span> <small className='ml-2'>{currentMovieDetail ? currentMovieDetail.vote_count: ""} votes..</small></p>
                        <p>
                        <span className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins " : ""} </span>
                        </p>
                        <p>
                            <span className="movie__genres">
                                {
                                    currentMovieDetail && currentMovieDetail.genres
                                    ? 
                                    currentMovieDetail.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name + ', '}</span></>
                                    )) 
                                    : 
                                    ""
                                }
                            </span>
                        </p>
                        <p>
                            <span className="movie__releaseDate">{currentMovieDetail ? currentMovieDetail.release_date : ""}</span>
                        </p>
                        <button className='movie_ticket_btn btn btn-danger ' onClick={checkUserLogggedIn} >Book Ticket</button>
                    </div>
                </form>
            </div>
           </div>

           <div className="row movie_overview_row">
            <div className="col ">
                <h1 className='text-xl font-semibold mb-2'>About the movie</h1>
                <p className='mb-4'>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
                <hr />
            </div>
           </div>

           <div className="row movie_production_row">
            <h1 className='text-xl font-semibold mb-2'>Production Company </h1>
            <div className="movie__production mb-6">
                    {
                        currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.slice(0,1).map(company => (
                            <>
                                {
                                    company.logo_path 
                                    && 
                                    <span className="productionCompanyImage">
                                        {/* <span>{company.name}</span> */}
                                        <img className="movie__productionComapany w-[30%]" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="" />
                                        
                                    </span>
                                }
                            </>
                        ))
                    }
                </div>
                <hr />
           </div>

           <div className="row similar_movies_row">
                <div className="movie_card">
                    <h1 className='text-xl font-semibold mb-2'> You might also like </h1>
                    <Slider {...settings}>
                        {state.upcomingMovies.map((movie)=>
                            <MovieCards movie={movie} />
                        )}
                    </Slider>
                    </div>
                </div>
        </div>
    </>
  )
}
