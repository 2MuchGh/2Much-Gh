import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import usePosts from "../Contentful/usePosts";

function HomeSlider(props) {

  const [posts,isLoading] = usePosts();
   
        return(
            <Carousel>
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
                  src={post.fields.featuredImage.fields.file.url}
                  />
                 
                </Carousel.Item>
              ))
            }
            </Carousel>
        )
    
    
}

export default HomeSlider;