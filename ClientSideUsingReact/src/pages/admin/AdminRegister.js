import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminRegister.css'

export default function AdminRegister() {

    const navigate = useNavigate();

    const [adminSignup, setAdminSignup] = useState({
      name: "", email: "", securityKey: "", password: ""
    });
  
    const handleAdminSignupInput = (e) => {
      setAdminSignup({ ...adminSignup, [e.target.name]: e.target.value })
    }
  
    const sendDataToServer = async (e) => {
      e.preventDefault();
      const { name, email, securityKey, password } = adminSignup;
  
      const res = await fetch('/adminregister', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, securityKey, password })
      });
     
    //   const data = await res.json();
   
      if (res.status === 422 || !res) {
        window.alert("Registration Failed!!");
        console.log('Registration Failed!!');
      }
      else {
        window.alert("Registration Successful ");
        console.log('Registration Successful ');
  
        navigate('/admin');
      }
    }
  
  

  return (
    <div className='adminregister_container container-fluid'>
    <div className="row">
        <div className="left_col col-4">
            <h1>Hello!</h1>
            <p>Welcome to  Websites Admin! Login to continue.</p>
            <NavLink className="left_btn_link"to={"/admin"}>Login</NavLink>
        </div>
        <div className="right_col col-6">
            <h1>Sign Up Form</h1>
            <input type="text" placeholder='Username'  name='name' value={adminSignup.name} onChange={handleAdminSignupInput} />
            <input type="email" placeholder='Email'   name='email' value={adminSignup.email}  onChange={handleAdminSignupInput}/>
            <input type="text" placeholder='Security Key'   name='securityKey' value={adminSignup.securityKey}  onChange={handleAdminSignupInput}/>
            <input type="password" placeholder='Password'  name='password' value={adminSignup.password}  onChange={handleAdminSignupInput} />
            <NavLink className="right_btn_link"  onClick={sendDataToServer}>Sign Up</NavLink>
        </div>
    </div>

</div>
)
 
}
