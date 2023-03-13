import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDataLayerValue } from '../../dataStore/DataLayer';

const Nav = () => {
    const [{userLoggedIn},dispatch] = useDataLayerValue(); 

    let Links =[
      {name:"HOME",link:"/"},
      {name:"MOVIES",link:"/movies"},
      {name:"EVENTS",link:"/events"},
      {name:"ABOUT",link:"/about"},
      {name:"CONTACT",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className=' w-full  top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-slate-600 py-2 md:px-8 px-7'>
        <div className='text-xl cursor-pointer flex items-center font-[Poppins] text-slate-200 '>
            <Link to='/'>Logo</Link>
        </div>
      
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden'>
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center  md:pb-0 pb-14 absolute md:static bg-slate-600 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 ':'top-[-490px]'}`}>
            {
            Links.map((link)=>(
                <li key={link.name} className='md:ml-4 md:my-0 my-7'>
                <Link to={link.link} className='text-slate-200 hover:text-gray-400 hover:bg-gray-700 p-2 rounded-xl  duration-300'>{link.name}</Link>
                </li>
            ))
            }
           
           
            {userLoggedIn?  <Link to="/logout">
              <button className='bg-indigo-600 text-slate-200 font-[Poppins] py-1 px-6 rounded  md:ml-10 lg:ml-72  hover:bg-indigo-400 
              duration-500'>
                LogOut
              </button>
            </Link> :  <Link to="/login">
              <button className='bg-indigo-600 text-slate-200 font-[Poppins] py-1 px-6 rounded  md:ml-10 lg:ml-72  hover:bg-indigo-400 
              duration-500'>
                SignIn
              </button>
            </Link>}
            
        </ul>
      </div>
    </div>
  )
}

export default Nav