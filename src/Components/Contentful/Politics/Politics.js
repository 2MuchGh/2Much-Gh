import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import usePolitics from "./usePolitics";
import "./Politics.css";
import Recent from "../../../Route/Home/Recent/Recent";
import PoliticsSlider from "./PoliticsSlider";

 


export default function Politics(){
    
    const [posts, isLoading] = usePolitics();  
    
  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>


    return posts.map(post => (

      <div className="politics_content">

        <div className="politics_title">
        <h3>{post.fields.politicsTitle}</h3>
        </div>

        <div className="PostPolitcs_Content">
            <img
              className="Politics_Images"
              src={post.fields.politicsImage.fields.file.url}
              alt={post.fields.politicsTitle}
            />
          </div>

        <div className="Politics_links">
    
        <p>{post.fields.politicsDescription}</p>
          
          
        </div>

        <div className="Politics_Space">

        </div>

      </div>
      
    ))
  }

  return (
    <div className="Politics_Container">
    <div className="Politics_Header">
      <h3>Politics</h3>
    </div>

    <div className="Home_Slider">
      <PoliticsSlider />
    </div>    

    <div className="Politics_flex">
      <div className="Politics_Body">
      {renderPosts()}
      </div>
      
      <div className="Recent">
        <Recent />
      </div>
    </div>
    </div>
  )
}