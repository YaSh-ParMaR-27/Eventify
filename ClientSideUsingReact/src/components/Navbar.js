import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../dataStore/data';
import { useDataLayerValue } from '../dataStore/DataLayer';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {

  let [open, setOpen] = useState(false);
  let [state , dispatch] = useDataLayerValue();

  const closeDropdown = () => {
    open && setOpen(false);
  };


  return (
    <div className=' w-full  top-0 left-0 z-20'>
      <div className='md:flex items-center justify-between bg-slate-700 py-2 md:px-8 px-7'>
        <div className='text-xl cursor-pointer flex items-center font-[Poppins] text-slate-200 hover:text-cyan-50'>
          <Link className='hover:text-gray-400' to='/'>Logo</Link>
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-2 cursor-pointer md:hidden  text-slate-200'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center  md:pb-0 pb-14 absolute md:static bg-slate-700 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-out ${open ? 'top-10 ' : 'top-[-490px]'}`}>
          {
            navLinks.map((link) => (
              <li key={link.name} className='md:ml-4 md:my-0 my-7'>
                <Link onClick={closeDropdown} to={link.link} className='text-slate-200 hover:text-[#151e45]  hover:bg-[#85b8ba] py-1 px-2 rounded  duration-300'>{link.name}</Link>
              </li>
            ))
          }

          {state.cookie ? <button className=' md:ml-20 lg:ml-72'><Link to="/profile" >
            <Avatar sx={{ bgcolor: '#85b8ba', color:'#151e45'}} className=' text-[#151e45] font-[Poppins] hover:bg-[#9bcdce] rounded-xl   duration-500'><PersonIcon/></Avatar>
            {/* <button className='bg-[#85b8ba] text-[#151e45] font-[Poppins] py-1 px-6 rounded  md:ml-10 lg:ml-72  hover:bg-[#9bcdce]
              duration-500'>
              LogOut
            </button> */}
          </Link></button> : 
            <button className='bg-[#85b8ba]  text-[#151e45] font-[Poppins] py-1 px-6 rounded  md:ml-10 lg:ml-72  hover:bg-[#9bcdce]
              duration-500'>
                <Link to="/login"> SignIn</Link>
            </button>
          }

        </ul>
      </div>
    </div>
  )
}

export default Navbar;