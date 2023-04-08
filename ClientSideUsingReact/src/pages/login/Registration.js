import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import RegistrationImg from '../../assets/RegistrationImg.svg'
import './Registration.css'

export default function Registration() {
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "", email: "", mobile: "", password: ""
  });

  const handleUserSignupInput = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value })
  }

  const sendDataToServer = async (e) => {
    e.preventDefault();
    const { name, email, mobile, password } = userSignup;

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, mobile, password })
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Registration Failed!!");
      console.log('Registration Failed!!');
    }
    else {
      window.alert("Registration Successful ");
      console.log('Registration Successful ');

      navigate('/login');
    }
  }

  return (
    <>

      <div className="register__container container-fluid  ">
        <div className="row justify-center">

          <div className="col-10 col-md-5 col-lg-5 ">
            <img src={RegistrationImg} className="register__image" alt="register" />
          </div>

          <div className="col-10 col-md-7 col-lg-6 ">
            <form method='POST' className='form__content'>
              <p className='register__head1'>Sign Up</p>
              <p className='register__head2'>Create a free account.</p>
              <input type="text" className="form__input" id="InputName" name='name' value={userSignup.name} onChange={handleUserSignupInput} placeholder="Enter your name" />
              <input type="email" className="form__input" id="InputEmail" name='email' value={userSignup.email} onChange={handleUserSignupInput} aria-describedby="emailHelp" placeholder="Enter your email" />
              <input type="number" className="form__input" id="InputNumber" name='mobile' value={userSignup.mobile} onChange={handleUserSignupInput} placeholder="Mobile number" />
              <input type="password" className="form__input" id="InputPassword" name='password' value={userSignup.password} onChange={handleUserSignupInput} placeholder="Password" />

              <button type="submit" className="register__btn" onClick={sendDataToServer}>Sign Up</button>
              <Link to='/login' className='other__links'>Already have an account? Sign In</Link>

            </form>

          </div>

        </div>
      </div>

    </>
  )
}
