import React from "react";
import { useNavigate } from "react-router-dom";

const About  = () => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/support");
    }
    return(

    <div>
        About Page
        <button onClick={clickHandler}>
            Move to support page
        </button>
    </div>
    ) 
}


export  default About;