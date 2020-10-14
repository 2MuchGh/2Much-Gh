import React from "react";
import {Link, useParams} from "react-router-dom";
import useSinglePost from "./useSinglePost";
import "./Single.css";


export default function SinglePost(){

    const { id } = useParams()
    const [post, isLoading] = useSinglePost(id)
  
    const renderPost = () => {
      if (isLoading) return <p>Loading...</p>
      console.log(post)
  
      return (
        <>
          <div className="renderpost">
           <div className="rendperpost_sub">
           <h2 className="renderpost_title">
           {post.title}
           </h2>
  
            <img
              className="renderpost_image"
              src={post.featuredImage.fields.file.url}
              alt={post.title}
            />
           </div>
          </div>
  
          <div className="renderpost_body">
            <p>{post.description} </p>
          </div>
        </>
      )
    }
  
    return (
      <div className="post"> 
        {renderPost()}
      </div>
    )
}