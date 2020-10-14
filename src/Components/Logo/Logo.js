import React from 'react';
import "./Logo.css";
import {Card} from "react-bootstrap"

function Logo() {
    return (
        
           <Card className="CardLogo_logo">
                <Card.Img 
               
            class="img-fluid w-50 h-30 img-responsive center-block d-block mx-auto"
            src={require('../../Images/mylogo.png')}
            className="logo_image"
            />
           </Card>
        
    )
}

export default Logo
