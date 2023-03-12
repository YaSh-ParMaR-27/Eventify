import React from 'react'
import aboutusImg from '../../assets/aboutus.svg'
import FaqImg from '../../assets/faq.svg'
import FeedbackImg from '../../assets/feedback.svg'
import NewsletterImgLight from '../../assets/newsletterlight.png'
import InstaIcon from '@mui/icons-material/Instagram'
import FbIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import './Footer.css'


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
                        <h4>FAQ</h4>
                    </div>

                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={aboutusImg} alt="" />
                        </div>
                        <h4>ABOUT US</h4>
                    </div>
                    
                    <div className='footerIconWithText'>
                        <div className='footerBigIcons'>
                            <img width={50} src={FeedbackImg} alt="" />
                        </div>
                        <h4>FEEDBACK</h4>
                    </div>

                    <div className='footerIconWithText'>
                        <div className='footerBigIcons '>
                            <img className='footerNewsletter' width={50} src={NewsletterImgLight} alt="" />
                        </div>
                        <h4>NEWSLETTER</h4>
                    </div>
               </div>
            </div>

            <div className="row footerlinksContainer flex flex-col sm:flex-row justify-around">
                <div className="col sm:col-3 lg:ml-32 flex flex-col">
                    <h3 className='text-2xl font-medium'>Browse</h3>
                    <p><a href="">Recommended Movies</a></p>
                    <p><a href="">Coming Soon</a></p>
                    <p><a href="">Events</a></p>
                </div>

                <div className="col sm:col-3 flex flex-col">
                    <h3 className='text-2xl font-medium'>Links</h3>
                    <p><a href="">Login</a></p>
                    <p><a href="">Register</a></p>
                    <p><a href="">Contact Us</a></p>
                    
                </div>

                <div className="col sm:col-3 flex flex-col">
                    <h3 className='text-2xl font-medium'>General</h3>
                    <p><a href="">About Us</a></p>
                    <p><a href="">FAQs</a></p>
                    <p><a href="">Feedback</a></p>
                    <p><a href=""></a>Terms & conditions</p>
                </div>
            </div>

            <div className="row socialLinksRow">
                <hr className='socialLine'/>
                <div className="col flex justify-center p-1">
                    <div className="col-8 flex justify-center gap-3">
                        <InstaIcon  htmlColor='grey' fontSize='large'/>
                        <FbIcon htmlColor='grey' fontSize='large'/>
                        <LinkedinIcon htmlColor='grey' fontSize='large'/>
                        <TwitterIcon htmlColor='grey' fontSize='large'/>
                    </div>
                </div>
                <hr  className='socialLine'/>
                <p>Copyright@2023 private limited</p>
            </div>
        </div>
    </>
  )
}
