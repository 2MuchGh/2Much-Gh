import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import usePosts from "./usePosts";
import "./Post.css";


export default function Post(){

    
    const [posts, isLoading] = usePosts();   

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map((post,index) => (

      <div className="renderpost_content">

        <div className="render_title">
        <h3 key={post.fields.title}>{post.fields.title}</h3>
        </div>

        <div className="Post_Content">
            <img
              key={index}
              className="Post_Images"
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.title}
            />
          </div>

        <div className="render_links">
        <Link
          className="Post_Links"
          key={post.fields.slug}
          to={`/post/${post.fields.slug}`}
          >
         
          <p key={index}>{post.fields.body}</p>
          <button className="PostContent_Button" style={{
            marginBottom:'20px'
          }} type="button">Read More</button>
          </Link>
        </div>

        <div className="Post_Space">

        </div>

      </div>
      
    ))
  }

  return (
    <div className="Post_Container">
      <div className="Post_Body">{renderPosts()}</div>
    </div>
  )
}
