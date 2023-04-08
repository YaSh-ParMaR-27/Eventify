import React, { useState } from 'react'
import contact_img from "../../assets/contact_page.svg";
import './Contact.css'

export default function Contact() {
  const [user, setUser] = useState({
    name: "", email: "", subject: "", message: ""
  });

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const sendDataToServer = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = user;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const data = await res.json();

    if (!data) {
      console.log('Message not send');
    }
    else {
      alert('Message send');
      setUser({ name: "", email: "", subject: "", message: "" });
    }


  }

  return (
    <>
      <div className="container-fluid contact__container">
        <div className="row justify-center">

          <div className="col-10 col-md-5 col-lg-5 ">
            <img className='contact__image ' src={contact_img} alt="Contact" />
          </div>

          <div className="col-10 col-md-7 col-lg-6 ">
              <form method='POST' className="form__content">
                <h1 className='contact__head'>Get in touch with us!</h1>

                <input type="text" className="form__input" name='name' value={user.name} onChange={handleUserInput} id="InputName" placeholder="Name" />
                <input type="email" className="form__input" name='email' value={user.email} onChange={handleUserInput} id="InputEmail" placeholder="Email" />
                <input type="text" className="form__input"  value={user.subject} onChange={handleUserInput} name='subject' placeholder="Subject" />
                <textarea className='form__input'  name='message' value={user.message} onChange={handleUserInput} placeholder='Message' cols="30" rows="6"></textarea>

                <button type='submit' onClick={sendDataToServer} className='contact__btn'>Submit </button>
              </form>  
          </div>
      
        </div>
      </div>
    </>
  )
}
