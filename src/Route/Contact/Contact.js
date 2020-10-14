import React from 'react';
import "./Contact.css"
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { colors } from '@material-ui/core';

const Contact = () => {
    return (
        <div className="contact" >
           <div className="contact-top">
               <h1>2MUCH GH</h1>
               <p>Your Number #1 Loyal & Credible Tv Channel</p>
           </div>

           <div className="contact-address">
               <h3>You can contact us on</h3>
           </div>
           <div className='contact-contacts'>
               <div className="contact-chat">
                   <WhatsAppIcon    
                       style={{
                           fontSize:'30px',
                       }}
                   />
                   <h3>+233 504 154 385</h3>
               </div>

               <div className="contact-email">
                   <EmailIcon  
                   style={{
                       fontSize:'30px'
                   }}
                    />
                   <h3>Nationsnational2019@gmail.com</h3>
               </div>
           </div>


            <div className="Politics_Slider">
            <Carousel
            showThumbs={false}
            showArrow={false}
            autoPlay={true}
            showIndicators={false}
            showStatus={false}
            
            >
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/1.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/2.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/3.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/4.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/5.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/6.jpg")} />
                        </div>
                        <div>
                            <img
                            style={{
                            width:'60%',
                            height:'45%'
                            }}
                            src={require("../../Images/7.jpg")} />
                        </div>
                    
                    
            </Carousel>
            </div>
            
            <div className="contact_head">
                <h3> Visit Our Channels</h3>
            </div>
            <div className="contact_links">
            <div className="contact_youtube">
                <li>
                    <a href="https://www.youtube.com/channel/UCyaAUpjRlx2kjsOrS-bryLw">
                        <h3>Youtube</h3>
                    </a>
                </li>
            </div>  

            <div className="contact_facebook">
                <li>
                    <a href="https://web.facebook.com/2Much-Gh-105668130918261?_rdc=1&_rdr">
                        <h3>Facebook</h3>
                    </a>
                </li>
            </div>  

             <div className="contact_facebook">
                <li>
                    <a href="https://www.instagram.com/2muchgh_/">
                        <h3>Instagram</h3>
                    </a>
                </li>
            </div>
            
            <div className="contact_facebook">
                <li>
                    <a href="https://twitter.com/2muchgh_">
                        <h3>Twitter</h3>
                    </a>
                </li>
            </div>     
            </div>

        </div>
    )
}

export default Contact
