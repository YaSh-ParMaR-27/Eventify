import React, { useEffect, useState }  from 'react';
import {Link} from 'react-router-dom'
//react-skeleton-loading
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


function MovieCards({movie}) {
  console.log(movie);
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
                <span className='flex align-middle'><ThumbUpIcon color='success' className='mx-3'/>{movie.vote_average}/10</span>
            </div>
          </div> 
        </Link>
      }
    </>
        
  );
}

export default MovieCards;