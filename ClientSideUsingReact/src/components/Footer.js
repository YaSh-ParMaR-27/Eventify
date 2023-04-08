import React from 'react'
import {Link} from 'react-router-dom'

//images
import aboutusImg from '../assets/aboutus_footer.svg'
import FaqImg from '../assets/faq_footer.svg'
import FeedbackImg from '../assets/feedback_footer.svg'
import NewsletterImgLight from '../assets/newsletterlight_footer.png'

//icons
import InstaIcon from '@mui/icons-material/Instagram'
import FbIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import './css/Footer.css'


export default function Footer() {
  return (
    <>
        <div className='footer container-fluid  '>
            <div className="row">
               <div className="footerIconContainer p-2 col flex justify-around align-middle ">
                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={FaqImg} alt="" />
                        </div>
                        <Link to="/"><h4>FAQ</h4></Link>      
                    </div>

                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={aboutusImg} alt="" />
                        </div>
                        <Link to="/about"><h4>ABOUT US</h4></Link>
                    </div>
                    
                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={FeedbackImg} alt="" />
                        </div>
                        <Link to="/contact"><h4 >FEEDBACK</h4></Link>
                    </div>

                    <div className='footerIconWithText'>
                        <div className='footerBigIcons '>
                            <img className='footerNewsletter' width={50} src={NewsletterImgLight} alt="" />
                        </div>
                        <Link to="/"><h4>NEWSLETTER</h4></Link>
                    </div>
               </div>
            </div>

            <div className="row footerlinksContainer flex flex-col sm:flex-row justify-around">
                <div className="col sm:col-3 lg:ml-32 flex flex-col">
                    <h3 className='text-2xl font-medium'>Browse</h3>
                    <span><Link to="/movies" className='footer__links'>Recommended Movies</Link></span>
                    <span><Link to="/movies" className='footer__links'>Coming Soon</Link></span>
                    <span><Link to="/movies" className='footer__links'>Events</Link></span>
                </div>

                <div className="col sm:col-3 flex flex-col">
                    <h3 className='text-2xl font-medium'>Links</h3>
                    <span><Link to="/login" className='footer__links'>Login</Link></span>
                    <span> <Link to="/registration" className='footer__links'>Register</Link></span>
                    <span><Link to="/contact" className='footer__links'>Contact Us</Link></span>
                </div>

                <div className="col sm:col-3 flex flex-col">
                    <h3 className='text-2xl font-medium'>General</h3>
                    <span><Link to="/about" className='footer__links'>About Us</Link></span>
                    <span><Link to="/" className='footer__links'>FAQs</Link></span>
                    <span><Link to="/contact" className='footer__links'>Feedback</Link></span>
                    <span><Link to="/" className='footer__links'>Terms & conditions</Link></span>
                </div>
            </div>

            <div className="row socialLinksRow">
                <hr className='socialLine'/>
                <div className="col flex justify-center p-1">
                    <div className="col-8 flex justify-center gap-3">
                       <Link to="/"><InstaIcon className='socialIcons' htmlColor='grey' fontSize='large'/></Link>
                       <Link to="/"><FbIcon className='socialIcons' htmlColor='grey' fontSize='large'/></Link>
                       <Link to="/"><LinkedinIcon className='socialIcons' htmlColor='grey' fontSize='large'/></Link>
                       <Link to="/"> <TwitterIcon className='socialIcons' htmlColor='grey' fontSize='large'/></Link>      
                    </div>
                </div>
                <hr  className='socialLine'/>
                <p>Copyright@2023 private limited</p>
            </div>
        </div>
    </>
  )
}
