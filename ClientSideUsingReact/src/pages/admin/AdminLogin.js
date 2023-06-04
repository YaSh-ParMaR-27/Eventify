import React, { useState } from 'react'
import './AdminLogin.css'
import { NavLink, useNavigate } from 'react-router-dom';

export default function AdminLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch("/adminlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials!!");
    } else {

      window.alert("Login Successfull");

      navigate("/homeadmin");
    }
  };


  return (
    <div className='adminLogin_container container-fluid'>
        <div className="row">
            <div className="left_col col-4">
                <h1>Hello!</h1>
                <p>Welcome to  Websites Admin! Login to continue.</p>
                <NavLink className="left_btn_link"to={"/adminregister"}>Sign Up</NavLink>
            </div>
            <div className="right_col col-6">
                <h1>Login Form</h1>
                <input type="email" placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password'  name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <NavLink className="right_btn_link" onClick={loginAdmin}>Login</NavLink>
            </div>
        </div>

    </div>
  )
}
