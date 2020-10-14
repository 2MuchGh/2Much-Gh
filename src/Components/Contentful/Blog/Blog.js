import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import useBlog from "./useBlog";
import "./Blog.css";
import Recent from "../../../Route/Home/Recent/Recent";

export default function Blog(){

    
    const [posts, isLoading] = useBlog();  

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    console.log(posts)


    return posts.map(post => (

      <div className="BlogPost_Content">

        <div className="Blog_Title">
        <h3>{post.fields.blogTitle}</h3>
        </div>

        <div className="Blog_Content">
            <img
              className="Blog_Images"
              src={post.fields.blogPicture.fields.file.url}
              alt={post.fields.blogTitle}
            />
          </div>

        <div className="Blog_Links">
        
         
          <p>{post.fields.blogDescription}</p>
          
        </div>

        <div className="Blog_Space">

        </div>

      </div>
      
    ))
  }

  return (
    <div className="Blog">
      <div className="Blog_Head">
        <h1>Blog</h1>
      </div>

     <div className="Blog_FCont">
     
        <div className="Post_Body">
        {
          renderPosts()
        }
      </div>

      <div className="Blog_News">
        <img 
        style={{
          width:'350px'
        }}
        src={require('./blog/8.jpg')}
        />
        <div>
          <Recent />
        </div>
      </div>
     </div>
    </div>
  )
}