import React,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
//icons and images
import {CgProfile} from 'react-icons/cg'
import RegistrationImg from '../assets/RegistrationImg.jpg'
import './css/Registration.css'

export default function Registration() {
  const navigate = useNavigate();

  const [userSignup , setUserSignup] = useState({
    name:"" , email:"" , mobile:"" , password:""
  });

  const handleUserSignupInput = (e)=>{
    setUserSignup({...userSignup, [e.target.name]:e.target.value})
  }

  const sendDataToServer = async (e)=>{
    e.preventDefault();
    const {name , email , mobile , password} = userSignup;

    const res = await fetch('/register',{
      method:'POST',
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({name , email , mobile , password})
    });

    const data = await res.json();

    if(data.status === 422 || !data){
      window.alert("Registration Failed!!");
      console.log('Registration Failed!!');
    }
    else{
      window.alert("Registration Successful ");
      console.log('Registration Successful ');

      navigate('/login');
    }
  }

  return (
    <>
      <div className="register_container container  h-[90vh]  ">
        <div className="row p-2  ">

          <div className="col-md-5 mt-16 lg:mt-0 hidden md:block">
            <img src={RegistrationImg} className="img-fluid w-100 h-auto" alt="" />
          </div>

          <div className="col-md-7 pt-6 flex flex-col justify-center form_container mt-14 sm:mt-0">
            <div className="forFormOuterBorder">
              <form method='POST' className='form-group formContent flex flex-col gap-2 shadow-lg'>

                <CgProfile style={{color:'007dff',fontSize:'80px'}}/>
                <h1 className='text-lg sm:text-xl'>Create your account</h1>
                <input type="text" className="form-control form_input" id="InputName" name='name' value={userSignup.name} onChange={handleUserSignupInput} placeholder="Enter your name"/>
                <input type="email" className="form-control form_input" id="InputEmail" name='email' value={userSignup.email} onChange={handleUserSignupInput}  aria-describedby="emailHelp" placeholder="Enter your email"/>         
                <input type="number" className="form-control form_input" id="InputNumber" name='mobile' value={userSignup.mobile} onChange={handleUserSignupInput}  placeholder="Mobile number"/>
                <input type="password" className="form-control form_input" id="InputPassword" name='password' value={userSignup.password} onChange={handleUserSignupInput}  placeholder="Password"/>
 
                <button type="submit" className="btn btn-primary" onClick={sendDataToServer}>SignUp</button>
                <Link to='/login' className='formAnchor'>Already have an account | SignIn</Link>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
