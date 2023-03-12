import React, { useEffect, useState }  from 'react';
import {Link} from 'react-router-dom'
import Star from '@mui/icons-material/Star';
//react-skeleton-loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


function MovieCards({movie}) {
  // console.log(movie);
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, []) 

  return (  
    <>
      {
        isLoading
        ?
        <div className="max-w-sm  overflow-hidden rounded-lg ">
            <SkeletonTheme color="grey">
              <div className='h-72  '>
                <Skeleton height={288} duration={2}/>
              </div>
              <div>
                <Skeleton baseColor='lightgrey' />
              </div>
              
            </SkeletonTheme>
        </div>
        :
        <Link  to={`/movies/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
          <div className="max-w-sm  overflow-hidden rounded-lg ">
            <div className='h-72 border-b-2 border-black shadow-sm '>
                <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="Sunset in the mountains"/>
            </div>
            <div className=" bg-black text-white flex justify-around align-middle rounded-b-lg">
                <span><Star color='error'/></span>
                <span >{movie.vote_average}/10</span>
                <span>{movie.vote_count} Votes</span>
            </div>
          </div> 
        </Link>
      }
    </>
        
  );
}

export default MovieCards;