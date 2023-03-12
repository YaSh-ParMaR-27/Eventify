import React, { useState } from 'react'
import './css/Contact.css'

export default function Contact() {

  const [user , setUser] = useState({
    name:"" , email:"" , subject:"" , message:""
  });

  const handleUserInput = (e)=>{
    setUser({...user, [e.target.name]:e.target.value})
  }

  const sendDataToServer = async (e)=>{
    e.preventDefault();
    const {name , email , subject , message} = user;
   
      const res = await fetch('/contact',{
        method:'POST',
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({name , email , subject , message})
      });
  
      const data = await res.json();
      
      if(!data){
        console.log('Message not send');
      }
      else{
         alert('Message send');
        setUser({name:"" , email:"" , subject:"" , message:""});
      }

  
  }

  return (
    <>
      <div className="container-fluid contact_container h-[92vh] p-4">
        <div className="row justify-center align-middle ">
          <div className="col-md-10">
            <div className="forOuterBorder">
              
              <form method='POST'  className="form-group p-4 rounded-lg flex flex-col  gap-2 shadow-lg">
                  <h1 className='text-xl text-center'>Contact Us</h1>

                   <input type="text" className="form-control" name='name' value={user.name}  onChange={handleUserInput}  id="InputName" placeholder="Name"/>
                   <input type="email" className="form-control" name='email' value={user.email}  onChange={handleUserInput}  id="InputEmail" placeholder="Email"/>
                   <input type="text" className="form-control" id="InputSubject" value={user.subject}  onChange={handleUserInput} name='subject' placeholder="Subject"/>
                   <textarea  className='form-control' id="InputTextarea" name='message' value={user.message} onChange={handleUserInput}  placeholder='Message' cols="30" rows="6"></textarea>
                        
                   <button type='submit' onClick={sendDataToServer} className='btn'>Submit </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
