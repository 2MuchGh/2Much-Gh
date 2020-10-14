import React from 'react';
import "./About.css";
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


const About = () => {

    return (
        <div className="about">
            <div className="about_title">
                <p>About Us</p>
            </div>

            <div className="about_description">
                <p>
                2Much Gh your number one loyal and credible tv channel
                Provides you with the latest, hottest trending news. We’ve been in existence for the past last 3 years.
                We are known and recognized to be the best.
                Do you want a place to publish your news, advertise your products or concerning any media work
                2Much Gh will provide all the services you need

                </p>

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
        </div>
    )
}

export default About
