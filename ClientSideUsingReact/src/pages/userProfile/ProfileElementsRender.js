import React from 'react'
import {  Link, Outlet } from "react-router-dom";

//icons
import PersonIcon from '@mui/icons-material/Person';
import TocIcon from '@mui/icons-material/Toc';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

import avatar from '../../assets/avatar.svg';
import './css/ProfileElementsRender.css'

export default function ProfileElementsRender() {
  return (
    <>
      <div className="profile_container">
        <div className="left_side">
          <div className="avatar_text">
            <img src={avatar} className="avatar" alt="avatar" />
            <p>Hello , <br /> <span>Yash Parmar</span></p>
          </div>

          <div className="heads">
            
            <Link to="/profile/info"><p className='account_info'><PersonIcon color='primary' /> Account Info</p></Link>
            <Link to="/profile/orders"><p className='account_info'><TocIcon color='primary' /> Bookings</p></Link>
            <Link to="/profile/payments"> <p className='account_info'><AccountBalanceWalletIcon color='primary' /> Payments</p></Link>
            <Link to="/profile/favourite">  <p className='account_info'><FavoriteIcon color='primary' /> Favourites</p></Link>
            <Link to="/profile/notification"> <p className='account_info'><NotificationsIcon color='primary' /> Notifications</p></Link>
            <Link to="/profile/logout">  <p className='account_info' id='_logout'><LogoutIcon color='primary' /> Logout</p></Link>
           
          </div>
        </div>
        <div className="right_side">
          <Outlet/>
        </div>
      </div>
      
    </>
  )
}
