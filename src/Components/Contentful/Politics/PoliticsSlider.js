import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import usePolitics from "./usePolitics";

function PoliticsSlider(props) {

  const [posts,isLoading] = usePolitics();
   
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
                  src={post.fields.politicsImage.fields.file.url}
                  />
                 
                </Carousel.Item>
              ))
            }
            </Carousel>
        )
    
    
}

export default PoliticsSlider;