import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDataLayerValue } from '../dataStore/DataLayer';

export default function Logout() {
  const navigate = useNavigate();

  const [state , dispatch] = useDataLayerValue();

  useEffect(()=>{
    fetch('/logout',{
      method:'GET',
      headers:{
        Accept :"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
    }).then((res)=>{
        dispatch({type:'SET_COOKIE',payload:""});
        navigate('/login',{replace:true});
        if(res.status !== 200){
          const error = new Error(res.error);
          throw error;
        }
    }).catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
      <h1>Logout page</h1>
    </>
  )
}
