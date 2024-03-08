import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate("/about");
    }
    return (
    <div>
        Labs Page
        <button onClick={clickHandler}>Move to about page</button>
    </div>
    
    )
}


export  default Labs ;