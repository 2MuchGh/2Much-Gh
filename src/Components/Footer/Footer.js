import React from 'react'
import "./Footer.css";
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    return (
        <div className="Footer">
           <div className="Footer_flex">

           <div 
           className="Footer_TopRight">
                <h3>2Much-Gh</h3>
                <p>
                Provides you latest entertainment and hottest trends in Ghana
                </p>
            </div>


            <div className="Footer_TopLeft">
                <nav className="footer_catnav">
                    <li>
                        <Link to="/sports">
                            SPORTS
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            BLOG
                        </Link>
                    </li>
                    <li>
                        <Link to="/entertainment">
                            ENTERTAINMENT
                        </Link>
                    </li>
                    <li>
                        <Link to="/politics">
                            POLITICS
                        </Link>
                    </li>
                </nav>
            </div>

           </div>

           <div className="Footer_Botoom">
           
               <div className="Footer_BFlex">

               <div className="Footer_navigation">
               <nav className="Footer_HomeNav">
                   <li>
                       <Link to="/">
                           HOME
                       </Link>
                   </li>
                   <li>
                       <Link to="/contact-us">
                           CONTACT-US
                       </Link>
                   </li>
                   <li>
                       <Link to="/about">
                           ABOUT-US
                       </Link>
                   </li>
               </nav>
           </div>

           <div className="Footer_SocialLinks">
                <div className="Footer_Facebook">
                   <a href="https://web.facebook.com/2Much-Gh-105668130918261?_rdc=1&_rdr">
                   <FacebookIcon
                    style={{
                        fontSize:'40px',
                        color:'#0778e9'
                    }}   
                    className="Facebook"
                    />
                   </a>
                </div>
                <div className="Footer_Youtube">
                    <a href="https://www.youtube.com/channel/UCyaAUpjRlx2kjsOrS-bryLw">
                    <YouTubeIcon
                    style={{
                        fontSize:'45px',
                        fontWeight:'100',
                        color:'#ED421E'
                
                    }} 
                    className="Youtube"
                    />
                    </a>
                </div>
                <div className="Footer_Twitter">
                    <a href="https://twitter.com/2muchgh_">
                    <TwitterIcon
                    style={{
                        fontSize:'40px',
                        fontWeight:'100',
                        color:'#0778e9'
                    }} 
                    className="Youtube"
                    />
                    </a>
                </div>
                <div className="Footer_Instagram">
                    <a href="https://www.instagram.com/2muchgh_/">
                    <InstagramIcon
                    style={{
                        fontSize:'37px',
                        fontWeight:'100',
                        color:'pink',
                        marginTop:'3px'
                
                    }} 
                    className="Youtube"
                    />
                    </a>
                </div>
           </div>

           <div className="Footer_Logo">
              <ul className="Footer_Logolink">
                  <li>
                      <Link to="/">
                          <h3>2Much-Gh &copy; .2020</h3>
                      </Link>
                  </li>
              </ul>
          </div>

           
               </div>
           </div>
        </div>
    )
}

export default Footer
