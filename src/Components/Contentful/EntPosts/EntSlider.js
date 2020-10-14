import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import useEntPost from "./useEntPost";

function EntSlider(props) {

  const [posts,isLoading] = useEntPost();
   
        return(
            <Carousel class="carousel slide">
            {
              posts.map(post=>(
                <Carousel.Item>
                  <img
                  style={{
                    width:'1500px',
                    margin:'auto',
                    overflow:'hidden',
                    height:'500px'
                    
                  }}
                  src={post.fields.entPicture.fields.file.url}
                  />
                 
                </Carousel.Item>
              ))
            }
            </Carousel>
        )
    
    
}

export default EntSlider;