import React from "react";
import {Link, useParams} from "react-router-dom";
import useSingleSports from "./useSingleSports";


export default function SinglePost(){

    const { sportid } = useParams()
    const [post, isLoading] = useSingleSports(sportid)

    console.log(post)
  
    const renderPost = () => {
      if (isLoading) return <p>Loading...</p>
  
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