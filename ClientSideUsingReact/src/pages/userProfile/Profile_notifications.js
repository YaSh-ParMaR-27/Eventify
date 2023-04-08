import React from 'react'
import notificationImg from '../../assets/no_notification.svg'
import './css/Profile_notifications.css'

export default function Profile_notifications() {
  return (
    <>
      <div className="profile_notification">
          <img src={notificationImg} alt="no_notification" />
          <p>No notifications yet</p>
      </div>
    </>
  )
}
