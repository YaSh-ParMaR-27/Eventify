import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogout() {

    const navigate = useNavigate();

  
    useEffect(()=>{
        navigate('/admin');
    })
    
  return (
    <div>

    </div>
  )
}
