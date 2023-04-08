import React from 'react'
import {Link} from 'react-router-dom'
import errorImg from '../../assets/error_page.svg'
import './error.css'

export default function Error() {
  return (
    <>
      <div className="error_page">
        <div className='leftside'>
          <h1>Oops , <br />Nothing here.... </h1>
          <p>The page you were looking for does not exist</p>
          <Link to="/" style={{width:"100%", textAlign:"center"}}> <button>Back to home</button></Link>
        </div>
        <div className='rightside'>
         <img src={errorImg} alt="error"  />
        </div>
      </div>
    </>
  )
}
