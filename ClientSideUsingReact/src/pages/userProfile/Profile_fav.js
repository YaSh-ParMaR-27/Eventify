import React from 'react'
import favImg from '../../assets/no_fav.svg'
import './css/Profile_fav.css'

export default function Profile_fav() {
  return (
    <>
      <div className="profile_favs">
        <img src={favImg} alt="favourites" />
        <p>No favourites yet</p>
      </div>
    </>
  )
}
