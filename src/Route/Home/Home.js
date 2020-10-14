import React from 'react'
import About from '../../Components/About/About';
import Post from "../../Components/Contentful/Posts";
import HomeSlider from '../../Components/Slide/HomeSlider';
import "./Home.css";
import RecentPost from './Recent/Recent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";


function Home() {
    return (
        <div className="Home">
          <div className="Home_Header">
              <div className="Home_Title">
                  <h1>Cover News</h1>
              </div>
          </div>
            <div
            style={{
                padding:'5px'
            }}
            />
          <div className="Home_SubTitle">
                  <h1>Main Story</h1>
              </div>

          <div className="Home_Slider">
              <HomeSlider   />
          </div>

          <div className="Home_Mid">

          <div className="Right_left">
          <div className="Home_Separator">
              <h3>Trending News</h3>
          </div>

          <div className="Home_Post">
              <Post />
          </div>
          </div>

          <div className="Right_right">
              <RecentPost   />
             <div className="Right_about">
                 <h3>About</h3>
             </div>
             <About    />
          </div>
            
          </div>

        
           
        </div>
    )
}

export default Home
