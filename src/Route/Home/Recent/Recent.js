import React, { useEffect,useState } from "react";
import {Link} from "react-router-dom";
import usePosts from "../../../Components/Contentful/usePosts";
import "./Recent.css";


export default function RecentPost(){

    
    const [posts, isLoading] = usePosts();   

  const renderRecentPosts = () => {
    if (isLoading) return <p>Loading...</p>

    return posts.map(post => (

      <div className="recent_content">

        <div className="recent_links">
        <img
              className="recent_images"
              src={post.fields.featuredImage.fields.file.url}
              alt={post.fields.title}
            />

        <Link
          className="recentpost_Links"
          key={post.fields.slug}
          to={`/post/${post.fields.slug}`}
          style={{
              textDecoration:'none',

          }}
          >
         <div className="recentpost_title">
            <p>
            {post.fields.title}
            </p>
         </div>
         <div className="recentpost_body">
          <p>
          {post.fields.body}
          </p>
         </div>
          </Link>
        </div>
      </div>
      
    ))
  }

  return (
    <div className="RecentPost_Container">
    <div className="RecentPostContainer_Title">
        <h2>Recent Post</h2>
    </div>
      <div className="RecentPost_Body">{renderRecentPosts()}</div>
      <div className="space" style={{
        paddingBottom:'20px'
      }}
      />
    </div>
  )
}