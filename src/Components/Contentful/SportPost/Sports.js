import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import useSport from "./useSport";
import "./Sport.css"
import SportSlides from "./SportSlides";
import About from "../../About/About";
import Recent from "../../../Route/Home/Recent/Recent";


export default function Sports(){

    
    const [posts, isLoading] = useSport();   

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>


    return posts.map(post => (

      <div className="sport_content">

        <div className="sport_title">
        <h3>{post.fields.sportsTitle}</h3>
        </div>

        <div className="Sport_Post">
            <img
              className="Sport_PostImage"
              src={post.fields.sportPicture.fields.file.url}
              alt={post.fields.sportsTitle}
            />
          </div>

        <div className="Sports_Description">
        
         
          <p>{post.fields.sportsDescription}</p>
  
        
        </div>

        <div className="Post_Space">

        </div>

      </div>
      
    ))
  }

  return (
    <div className="Sport_Container">
      <div className="Sport_Title">
        <h2>Sports</h2>
      </div>

      <div className="Home_Slider">
        <SportSlides  />
      </div>

      <div className="Sport_Separator">
       
       <div className="Separator_title">
        <h3> Sport News</h3>
       </div>

      </div>


      <div className="Sports">
      <div className="Sport_Body">
        {renderPosts()}
      </div>

      
      <div className="Separator_image">
         <img
         className="football"
         alt="football"
         src={require('../../../Images/footbal.jpg')}
         />

         <div className="Sport_About">
           <Recent  />
         </div>
       </div>
      </div>
    </div>
  )
}