import React from "react";
import {Link, useParams} from "react-router-dom";
import useBlogSingle from "./useBlogSingle";



export default function BlogSingle(){

    const { id } = useParams()
    const [post, isLoading] = useBlogSingle(id)

    console.log(post)
  
    const renderPost = () => {
      if (isLoading) return <p>Loading...</p>
  
      return (
        <>
          <div className="renderpost">
           <div className="rendperpost_sub">
           <h2 className="renderpost_title">
           {post.blogTitle}
           </h2>
  
            <img
              className="renderpost_image"
              src={post.blogPicture.fields.file.url}
              alt={post.blogTitle}
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