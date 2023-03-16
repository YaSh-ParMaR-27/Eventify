import React  from 'react'
import {useLocation,Link, useNavigate} from 'react-router-dom';
import { cinemas } from '../dataStore/data';
import './css/CinemaDetails.css'
export default function BuyTicket() {
  
  let now = new Date().toLocaleDateString();
  const navigate = useNavigate();
  
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="container-fluid cinema_detai" >
        <div className="row bg-black">
          <div className="col p-3 text-white ">
            <p>{location.state.title}</p>
              <p className='show_date'>{now}</p>
          </div>
        </div>

       {
        cinemas.map((item)=>(
          <Link to={`/movies/${location.state.id}/cinemadetails/seatallot`} state={{title:location.state.title , cinemaName:item.title ,date:now, time:item.time}}>
            <div className="row bg-slate-300">
              <div className="col-6 col-md-5 p-4 ">
                <h2>{item.title}</h2>
              </div>
              <div className="col-4 col-md-4 p-4">
                <button className='time_btn' >{item.time}</button>
              </div>
              <hr />  
            </div>
          </Link>
        ))
       }
      </div> 
    </>
  )
}
