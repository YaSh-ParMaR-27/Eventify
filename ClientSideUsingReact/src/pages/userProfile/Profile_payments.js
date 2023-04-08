import React from 'react'
import No_payments from '../../assets/No_Payments.svg'
import './css/Profile_payments.css'

export default function Payments() {
  return (
    <>
      <div className="profile_payments">
          <img src={No_payments} alt="no_payments" />
          <p>Your Payments will be displayed soon!!</p>
      </div>
    </>
  )
}
