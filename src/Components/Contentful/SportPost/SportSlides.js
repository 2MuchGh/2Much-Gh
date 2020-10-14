import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import useSport from "./useSport";

function SportSlides(props) {

  const [posts,isLoading] = useSport();
   
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
                  src={post.fields.sportPicture.fields.file.url}
                  />
                 
                </Carousel.Item>
              ))
            }
            </Carousel>
        )
    
    
}

export default SportSlides;