import React from 'react'
import about_image from '../../assets/for_about_page.svg'
import './About.css'


export default function About() {
  return (
    <>
      <div className="about_container">
        <div className="about_img">
          <img src={about_image} alt="about_photo" />
        </div>

        <div className="first_p">
          <p className='head'>Looking for the events near you ? </p>
          <p className='detail_txt'>Welcome to our events website! We are dedicated to providing our clients with the best possible event planning and management services. Our team of experienced professionals is committed to creating unforgettable experiences for our clients and their guests.</p>
        </div>
        <div className="quote">
          <p><q>An event is not just an event, it's an experience. And it's the experience that people remember.</q></p>
        </div>

        <div className="second_p">
          <p>At our events, we strive to create an atmosphere of excitement and enjoyment. From corporate events and product launches to weddings and private parties, we provide a wide range of services that are tailored to meet the specific needs of each of our clients.
          </p>
        </div>

        <div className="last_p">
          <p>Thank you for considering our services for your upcoming event. We look forward to working with you to create a truly unforgettable experience for you and your guests.</p>
        </div>
      </div>

    </>
  )
}
