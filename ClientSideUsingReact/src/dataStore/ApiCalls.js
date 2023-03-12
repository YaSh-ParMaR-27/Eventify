import React, { useEffect } from 'react'
import { useDataLayerValue } from './DataLayer';

export default function ApiCalls() {
  const baseAPI = `https://api.themoviedb.org/3/movie`;
  const popularMoviesURL = `${baseAPI}/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const topRatedMoviesURL = `${baseAPI}/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const upcomingMoviesURL = `${baseAPI}/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

  const [state , dispatch] = useDataLayerValue();

  const getData = () => {
    fetch(popularMoviesURL)
    .then(res => res.json())
    .then(data => dispatch({type:'SET_POPULAR',payload:data.results}))

    fetch(topRatedMoviesURL)
    .then(res => res.json())
    .then(data =>  dispatch({type:'SET_TOP_RATED',payload:data.results}))

    fetch(upcomingMoviesURL)
    .then(res => res.json())
    .then(data =>  dispatch({type:'SET_UPCOMING',payload:data.results}))
  }

  useEffect(()=>{
    getData();
     //eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <></>
  )
}
