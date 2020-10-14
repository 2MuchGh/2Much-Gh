import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import useEntPost from "./useEntPost";
import "./EntPost.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Recent from "../../../Route/Home/Recent/Recent"
import EntSlider from "./EntSlider";

export default function Post(){

    
    const [posts, isLoading] = useEntPost();   

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map(post => (

      <div className="ent_rendpost">

        <div className="ent_contitle">
        <h3>{post.fields.entTitle}</h3>
        </div>

        <div className="ent_content">
            <img
              className="ent_postimage"
              src={post.fields.entPicture.fields.file.url}
              alt={post.fields.title}
            />
          </div>

        <div className="ent_body">
          <p>{post.fields.entBody}</p>
          
        </div>

        <div className="ent_space">

        </div>

      </div>
      
    ))
  }

  return (
    <div className="entertainment">
    <div className="entertain_header">
      <h1>Entertainment</h1>
    </div>

    <div className="Home_Slider">
      <EntSlider  />
    </div>

    <div className="entertain_flex">
        <div className="ent_body">
        {renderPosts()}
        </div>
         
        </div>
        <Recent />

        

    </div>

    
  )
}